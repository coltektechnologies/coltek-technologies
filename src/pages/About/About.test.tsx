// Stage 5A verification for the About page.
//
// These assertions pin the defects the refactor closed: the missing navbar
// offset, the milestone copy that was hidden behind a broken auto-cycle, the
// unnamed target="_blank" social links, and the dead "Learn More" button.
// Responsive rendering is a media-query concern jsdom does not evaluate, so
// breakpoint classes are asserted instead.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, beforeAll, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

// The page's <Reveal> wrappers use useScrollReveal, which constructs an
// IntersectionObserver. jsdom does not implement one, so it is stubbed here.
// It never fires, which leaves each section at its pre-reveal opacity — the
// markup is still mounted, so every query below resolves.
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

// Expected card counts per section, for the vacuity guard below.
const MILESTONES = 4;
const PRINCIPLES = 2;
const VALUES = 5;
const CEO_PANEL = 1;
const TEAM = 3;

const renderAbout = () =>
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );

describe("About — page shell", () => {
  it("offsets the fixed navbar at both breakpoints", () => {
    const { container } = renderAbout();
    const page = container.firstElementChild;

    // Without these the page renders underneath the fixed navbar, which is
    // what it did before Stage 5A.
    expect(page?.className).toContain("pt-nav");
    expect(page?.className).toContain("md:pt-nav-lg");
  });

  it("has exactly one h1", () => {
    renderAbout();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: /about us/i }),
    ).toBeInTheDocument();
  });

  it("keeps a single logical heading order", () => {
    renderAbout();

    const levels = screen
      .getAllByRole("heading")
      .map((h) => Number(h.tagName[1]));

    // No level may be skipped on the way down.
    levels.forEach((level, i) => {
      if (i === 0) return;
      expect(level - levels[i - 1]).toBeLessThanOrEqual(1);
    });
  });
});

describe("About — milestones", () => {
  it("shows every milestone description without interaction", () => {
    renderAbout();

    // The old panel revealed one description at a time and its auto-cycle
    // stalled on the first entry, so three of the four were unreachable.
    for (const text of [
      /passionate young innovators/i,
      /leadership and technical teams were officially formed/i,
      /earning trust through professionalism/i,
      /official digital presence went live/i,
    ]) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });

  it("renders the milestones as an ordered list of four entries", () => {
    const { container } = renderAbout();

    // A timeline is a sequence, so it is an <ol>. The old markup was four
    // loose <article onClick> elements.
    const ordered = container.querySelector("ol");
    expect(ordered).not.toBeNull();
    expect(ordered?.querySelectorAll("li")).toHaveLength(4);
  });
});

describe("About — links", () => {
  it("gives every CEO social link an accessible name and a safe rel", () => {
    renderAbout();

    const socials = [
      "Collins Boansi on Facebook",
      "Collins Boansi on Instagram",
      "Collins Boansi on X",
    ];

    for (const name of socials) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      // Missing rel on a target="_blank" link leaks window.opener.
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("routes both CTA buttons to a real destination", () => {
    renderAbout();

    expect(screen.getByRole("link", { name: /get started/i })).toHaveAttribute(
      "href",
      "/contact",
    );
    // This slot used to hold a <button>Learn More</button> with no handler.
    expect(
      screen.getByRole("link", { name: /explore services/i }),
    ).toHaveAttribute("href", "/services");
  });
});

describe("About — images", () => {
  it("names every team portrait", () => {
    renderAbout();

    for (const name of [
      "Boansi Kyeremateng Collins",
      "Owusu Bonsu Frederick",
      "Owusu Williams",
      "Ampaabeng Kyeremeh Nancy",
    ]) {
      expect(screen.getByRole("img", { name })).toBeInTheDocument();
    }
  });

  it("renders the header on the brand gradient, with no image to upscale", () => {
    const { container } = renderAbout();

    const header = container.querySelectorAll("section")[0];
    expect(header.className).toContain("bg-gradient-brand");
    expect(header.querySelector("img")).toBeNull();

    // Decorative grid over the gradient — hidden from assistive tech.
    const grid = header.querySelector(".bg-grid-lines");
    expect(grid).not.toBeNull();
    expect(grid).toHaveAttribute("aria-hidden", "true");
  });

  it("never places a card on a section of its own colour", () => {
    const { container } = renderAbout();

    // --card is #FFFFFF and --background is #F5F9FF. A default (white) Card
    // on a `bg-card` section is invisible; a `muted` Card on a `bg-background`
    // section is too. Each section must pair one with the other.
    let checked = 0;

    for (const section of container.querySelectorAll("section")) {
      const onWhite = section.className.includes("bg-card");
      const onTinted = section.className.includes("bg-background");
      if (!onWhite && !onTinted) continue;

      for (const card of section.querySelectorAll('[class*="rounded-card"]')) {
        const tintedCard = card.className.includes("bg-background");
        expect(tintedCard).toBe(onWhite);
        checked += 1;
      }
    }

    // Guards against the assertion above passing vacuously.
    expect(checked).toBe(MILESTONES + PRINCIPLES + VALUES + CEO_PANEL + TEAM);
  });
});
