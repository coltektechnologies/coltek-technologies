// Stage 5D verification for the Contact page.
//
// These assertions pin the defects the refactor closed: the missing navbar
// offset, the duplicate live region on the <form>, the FAQ answers that were
// clipped and always exposed to assistive tech, and the unnamed / unprotected
// external links. The submit handler is unchanged, so its contract is
// asserted rather than its implementation.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, beforeAll, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";

beforeAll(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
      readonly root = null;
      readonly rootMargin = "";
      readonly thresholds = [];
    },
  );
});

afterEach(cleanup);

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

describe("Contact — page shell", () => {
  it("offsets the fixed navbar at both breakpoints", () => {
    const { container } = renderContact();
    const page = container.firstElementChild;

    expect(page?.className).toContain("pt-nav");
    expect(page?.className).toContain("md:pt-nav-lg");
  });

  it("has exactly one h1 and no heading that duplicates it", () => {
    renderContact();

    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/contact us/i);

    // There used to be an <h2> reading "CONTACT US" right under it.
    const h2s = screen
      .getAllByRole("heading", { level: 2 })
      .map((h) => h.textContent?.trim().toLowerCase());
    expect(h2s).not.toContain("contact us");
  });

  it("keeps a single logical heading order", () => {
    renderContact();

    const levels = screen
      .getAllByRole("heading")
      .map((h) => Number(h.tagName[1]));

    levels.forEach((level, i) => {
      if (i === 0) return;
      expect(level - levels[i - 1]).toBeLessThanOrEqual(1);
    });
  });

  it("renders the header on the brand gradient with the mesh overlay", () => {
    const { container } = renderContact();

    const header = container.querySelector("section");
    expect(header?.className).toContain("bg-gradient-brand");

    const grid = header?.querySelector(".bg-grid-lines");
    expect(grid).not.toBeNull();
    expect(grid).toHaveAttribute("aria-hidden", "true");
  });

  it("declares exactly one live region", () => {
    const { container } = renderContact();

    // The toast stack is the announcer. The <form> also carried
    // aria-live="polite", which made assistive tech re-read the whole form.
    expect(container.querySelectorAll("[aria-live]")).toHaveLength(1);
    expect(container.querySelector("form")).not.toHaveAttribute("aria-live");
  });
});

describe("Contact — form", () => {
  it("preserves every field the web3forms endpoint receives", () => {
    const { container } = renderContact();

    const names = [...container.querySelectorAll("[name]")].map((el) =>
      el.getAttribute("name"),
    );

    for (const field of [
      "access_key",
      "to",
      "from_name",
      "subject",
      "name",
      "email",
      "message",
    ]) {
      expect(names).toContain(field);
    }
  });

  it("marks the three required fields as required", () => {
    renderContact();

    for (const label of [/^name/i, /^email/i, /^message/i]) {
      expect(screen.getByLabelText(label)).toBeRequired();
    }
  });

  it("offers a submit button", () => {
    renderContact();

    const submit = screen.getByRole("button", { name: /send message/i });
    expect(submit).toHaveAttribute("type", "submit");
  });
});

describe("Contact — FAQ", () => {
  it("starts collapsed, with every answer inert", () => {
    const { container } = renderContact();

    const panels = container.querySelectorAll("[id^='faq-panel-']");
    expect(panels).toHaveLength(5);

    for (const panel of panels) {
      // max-h-0 + overflow-hidden hid the answers visually but left them in
      // the reading order, so all five were announced regardless of state.
      expect(panel).toHaveAttribute("inert");
      expect(panel.className).toContain("grid-rows-[0fr]");
      // No max-height clamp: the longest answer used to clip at max-h-40.
      expect(panel.className).not.toMatch(/max-h-/);
    }
  });

  it("expands the answer that was asked for", () => {
    const { container } = renderContact();

    const trigger = screen.getByRole("button", {
      name: /how do i get started/i,
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const panel = container.querySelector(
      `#${trigger.getAttribute("aria-controls")}`,
    );
    expect(panel).not.toHaveAttribute("inert");
    expect(panel?.className).toContain("grid-rows-[1fr]");
  });

  it("points every trigger at the panel it controls", () => {
    const { container } = renderContact();

    for (const trigger of screen.getAllByRole("button", { expanded: false })) {
      const id = trigger.getAttribute("aria-controls");
      expect(id).toBeTruthy();
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });
});

describe("Contact — external links", () => {
  it("names and protects every outbound link", () => {
    const { container } = renderContact();

    const links = [
      ...container.querySelectorAll<HTMLAnchorElement>("a[target='_blank']"),
    ];
    // 5 socials + WhatsApp.
    expect(links).toHaveLength(6);

    for (const link of links) {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      // Icon-only links need a name; four of five had none.
      expect(
        link.textContent?.trim() || link.getAttribute("aria-label"),
      ).toBeTruthy();
    }
  });

  it("loads no third-party images", () => {
    const { container } = renderContact();

    // The YouTube icon was an <img> hotlinked from upload.wikimedia.org.
    for (const img of container.querySelectorAll("img")) {
      expect(img.getAttribute("src")).not.toMatch(/^https?:\/\//);
    }
  });

  it("titles the map iframe", () => {
    renderContact();
    expect(
      screen.getByTitle(/COLTEK location on Google Maps/i),
    ).toBeInTheDocument();
  });
});
