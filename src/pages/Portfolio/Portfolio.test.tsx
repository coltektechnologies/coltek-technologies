// Stage 5C verification for the Portfolio page.
//
// These assertions pin the defects the refactor closed: the nested <main>,
// the seven per-card live regions, the duplicated View/Link controls, and the
// missing empty state.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, beforeAll, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  within,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Portfolio from "./Portfolio";
import { projects } from "../../data/projects";

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

const renderPortfolio = () =>
  render(
    <MemoryRouter>
      <Portfolio />
    </MemoryRouter>,
  );

/**
 * The filter bar only. A bare name query is ambiguous: /^Cloud/ also matches
 * the "Cloud-Based CRM case study" action button inside a card.
 */
const filterBar = (container: HTMLElement) =>
  within(
    container.querySelector("[aria-label='Filter projects by category']")!
      .parentElement as HTMLElement,
  );

/** Direct children only — tag chips are <li> too. */
const gridItems = (container: HTMLElement) => [
  ...(container.querySelector("ul.grid") as HTMLElement).children,
];

describe("Portfolio — page shell", () => {
  it("renders no <main> of its own", () => {
    const { container } = renderPortfolio();

    // Layout already renders <main id="main-content">. This page used to
    // nest a second one inside it, which is invalid and breaks the skip link.
    expect(container.querySelector("main")).toBeNull();
  });

  it("offsets the fixed navbar at both breakpoints", () => {
    const { container } = renderPortfolio();
    const page = container.firstElementChild;

    expect(page?.className).toContain("pt-nav");
    expect(page?.className).toContain("md:pt-nav-lg");
  });

  it("has exactly one h1", () => {
    renderPortfolio();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders the header on the brand gradient with the mesh overlay", () => {
    const { container } = renderPortfolio();

    const header = container.querySelector("section");
    expect(header?.className).toContain("bg-gradient-brand");

    const grid = header?.querySelector(".bg-grid-lines");
    expect(grid).not.toBeNull();
    expect(grid).toHaveAttribute("aria-hidden", "true");
  });

  it("declares exactly one live region", () => {
    const { container } = renderPortfolio();

    // Every project <article> used to carry aria-live="polite", so any state
    // change re-announced entire cards.
    expect(container.querySelectorAll("[aria-live]")).toHaveLength(1);
  });
});

describe("Portfolio — filtering", () => {
  it("shows every project under All", () => {
    renderPortfolio();

    for (const project of projects) {
      expect(
        screen.getAllByRole("heading", { name: project.title }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("narrows the grid to the chosen category", () => {
    const { container } = renderPortfolio();

    fireEvent.click(
      filterBar(container).getByRole("button", { name: /^Cloud/ }),
    );

    const expected = projects.filter((p) => p.category === "Cloud");
    expect(gridItems(container)).toHaveLength(expected.length);
  });

  it("marks the active category with aria-pressed", () => {
    const { container } = renderPortfolio();

    const cloud = filterBar(container).getByRole("button", { name: /^Cloud/ });
    expect(cloud).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(cloud);
    expect(cloud).toHaveAttribute("aria-pressed", "true");
  });
});

describe("Portfolio — project actions", () => {
  it("gives each project one action, not two pointing at the same place", () => {
    const { container } = renderPortfolio();

    for (const item of gridItems(container)) {
      const actions = [
        ...item.querySelectorAll("a[href^='http']"),
        ...item.querySelectorAll("button"),
      ];
      expect(actions).toHaveLength(1);
    }
  });

  it("opens external links safely", () => {
    const { container } = renderPortfolio();

    for (const link of container.querySelectorAll<HTMLAnchorElement>(
      "a[target='_blank']",
    )) {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link.getAttribute("aria-label")).toMatch(/in a new tab$/);
    }
  });
});

describe("Portfolio — surfaces and assets", () => {
  it("never places a card on a section of its own colour", () => {
    const { container } = renderPortfolio();

    let checked = 0;

    for (const section of container.querySelectorAll("section")) {
      const onWhite = section.className.includes("bg-card");
      const onTinted = section.className.includes("bg-background");
      if (!onWhite && !onTinted) continue;

      for (const card of section.querySelectorAll('[class*="rounded-card"]')) {
        const tintedCard = card.className.includes("bg-background");
        const whiteCard = card.className.includes("bg-card");
        if (!tintedCard && !whiteCard) continue;

        expect(tintedCard).toBe(onWhite);
        checked += 1;
      }
    }

    // One per project, plus the featured panel.
    expect(checked).toBe(projects.length + 1);
  });

  it("serves the WebP screenshots, not the palette PNG originals", () => {
    const { container } = renderPortfolio();

    const images = [...container.querySelectorAll("img")];
    expect(images.length).toBeGreaterThan(0);

    for (const img of images) {
      expect(img.getAttribute("src")).not.toMatch(/\.png$/i);
    }
  });
});
