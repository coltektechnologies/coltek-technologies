// Stage 5B verification for the Services page.
//
// These assertions pin the defects the refactor closed: the globally leaking
// <style jsx> block, the four dead "Read More" buttons nested inside links,
// the zero-byte hero image, and the white-on-white card surfaces.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, beforeAll, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "./Services";

// jsdom implements neither of these; the shell and the reveal wrappers use
// them. Neither fires, which leaves the markup mounted for the queries below.
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
  window.scrollTo = vi.fn();
});

afterEach(cleanup);

// Routes as declared in AppRoutes.tsx.
const DECLARED_ROUTES = [
  "/Services/SoftwareSolutions",
  "/Services/AIML",
  "/Services/CloudSolutions",
  "/Services/MobileAppDevelopment",
];

const renderServices = () =>
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>,
  );

describe("Services — page shell", () => {
  it("offsets the fixed navbar at both breakpoints", () => {
    const { container } = renderServices();
    const main = container.querySelector("main");

    expect(main?.className).toContain("pt-nav");
    expect(main?.className).toContain("md:pt-nav-lg");
  });

  it("has exactly one h1", () => {
    renderServices();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: /our services/i }),
    ).toBeInTheDocument();
  });

  it("emits no unscoped <style> tag", () => {
    const { container } = renderServices();

    // The page used <style jsx>, but styled-jsx is not a dependency, so React
    // rendered a plain <style> and .animate-marquee leaked app-wide.
    expect(container.querySelectorAll("style")).toHaveLength(0);
  });

  it("renders the header on the brand gradient, with no image to load", () => {
    const { container } = renderServices();

    const header = container.querySelector("main > section");
    expect(header?.className).toContain("bg-gradient-brand");
    // ServiceHeroImage.jpg is a zero-byte file.
    expect(header?.querySelector("img")).toBeNull();

    const grid = header?.querySelector(".bg-grid-lines");
    expect(grid).not.toBeNull();
    expect(grid).toHaveAttribute("aria-hidden", "true");
  });
});

describe("Services — links", () => {
  it("routes every Read More to a declared service route", () => {
    renderServices();

    for (const route of DECLARED_ROUTES) {
      const links = screen
        .getAllByRole("link")
        .filter((a) => a.getAttribute("href") === route);

      // The rail card title and the detail section's Read More, both real
      // links. Previously the detail one was a <button> inside an <a> whose
      // only handler was stopPropagation(), so it navigated nowhere.
      expect(links.length).toBeGreaterThan(0);
    }
  });

  it("gives each Read More a distinct accessible name", () => {
    renderServices();

    const names = screen
      .getAllByRole("link", { name: /^read more about /i })
      .map((a) => a.getAttribute("aria-label"));

    expect(names).toHaveLength(4);
    expect(new Set(names).size).toBe(4);
  });

  it("nests no interactive element inside a link", () => {
    const { container } = renderServices();

    for (const link of container.querySelectorAll("a")) {
      expect(
        link.querySelector("a, button, input, select, textarea"),
      ).toBeNull();
    }
  });
});

describe("Services — surfaces", () => {
  it("never places a card on a section of its own colour", () => {
    const { container } = renderServices();

    let checked = 0;

    for (const section of container.querySelectorAll("section")) {
      const onWhite = section.className.includes("bg-card");
      const onTinted = section.className.includes("bg-background");
      if (!onWhite && !onTinted) continue;

      for (const card of section.querySelectorAll('[class*="rounded-card"]')) {
        // Only surface cards are in scope. The Why Choose Us panel is a
        // deliberate brand block, and the stretched links carry rounded-card
        // for their focus ring but paint no background at all.
        const tintedCard = card.className.includes("bg-background");
        const whiteCard = card.className.includes("bg-card");
        if (!tintedCard && !whiteCard) continue;

        expect(tintedCard).toBe(onWhite);
        checked += 1;
      }
    }

    // 4 rail cards, rendered twice by the Marquee, plus 4 detail cards.
    // Guards against a vacuous pass.
    expect(checked).toBe(4 * 2 + 4);
  });

  it("keeps the per-service anchors so deep links still land", () => {
    const { container } = renderServices();

    for (const id of ["service-0", "service-1", "service-2", "service-3"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });
});
