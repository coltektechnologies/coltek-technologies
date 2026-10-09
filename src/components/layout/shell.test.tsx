// Behavioural tests for the application shell (Stage 3).
// These cover navigation structure, the mobile drawer and the single-footer
// guarantee. Responsive *rendering* is a CSS-media-query concern that jsdom
// does not evaluate, so the breakpoint contract is asserted on class names.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

afterEach(cleanup);

const renderAt = (ui: ReactElement, route = "/") =>
  render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);

const NAV_LABELS = ["Home", "About", "Services", "Portfolio", "Contact"];

describe("Navbar", () => {
  it("exposes every destination in both the desktop and mobile menus", () => {
    renderAt(<Navbar />);

    // One desktop entry + one mobile entry per destination, from the single
    // NAV_ITEMS source that replaced the two copy-pasted link lists.
    for (const label of NAV_LABELS) {
      expect(screen.getAllByRole("link", { name: label })).toHaveLength(2);
    }
  });

  it("marks only the current route as active", () => {
    renderAt(<Navbar />, "/about");

    for (const about of screen.getAllByRole("link", { name: "About" })) {
      expect(about).toHaveAttribute("aria-current", "page");
    }

    // Regression guard: `to="/"` without `end` matches every path as a
    // prefix, which used to leave Home permanently highlighted.
    for (const home of screen.getAllByRole("link", { name: "Home" })) {
      expect(home).not.toHaveAttribute("aria-current");
    }
  });

  it("opens and closes the mobile drawer, keeping aria-expanded in sync", () => {
    renderAt(<Navbar />);
    const trigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(
      screen.getByRole("button", { name: /close navigation menu/i }),
    );
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile drawer on Escape", () => {
    renderAt(<Navbar />);
    const trigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps the closed drawer out of the tab order, and releases it when open", () => {
    renderAt(<Navbar />);
    const drawer = document.getElementById("mobile-navigation");

    // Asserted on the attribute, not the IDL property: React 19 emits
    // inert="" correctly but jsdom does not reflect it onto the element.
    expect(drawer).toHaveAttribute("inert");

    fireEvent.click(
      screen.getByRole("button", { name: /open navigation menu/i }),
    );
    expect(drawer).not.toHaveAttribute("inert");
  });

  it("sizes itself from the shared nav token at both breakpoints", () => {
    renderAt(<Navbar />);
    const nav = screen.getByRole("navigation", { name: "Main" });

    expect(nav.className).toContain("h-nav");
    expect(nav.className).toContain("md:h-nav-lg");
  });
});

describe("Footer", () => {
  it("associates the newsletter input with a label", () => {
    renderAt(<Footer />);
    expect(
      screen.getByLabelText(/subscribe to our newsletter/i),
    ).toHaveAttribute("type", "email");
  });

  it("gives every social link an accessible name and safe rel", () => {
    renderAt(<Footer />);
    const social = screen.getAllByRole("link", { name: /visit our/i });

    expect(social).toHaveLength(4);
    for (const link of social) {
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });
});

describe("shell composition", () => {
  it("renders exactly one banner and one contentinfo", () => {
    const { container } = renderAt(
      <>
        <Navbar />
        <main>page content</main>
        <Footer />
      </>,
    );

    expect(container.querySelectorAll("header")).toHaveLength(1);
    expect(container.querySelectorAll("footer")).toHaveLength(1);
  });
});
