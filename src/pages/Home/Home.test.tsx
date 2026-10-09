// Stage 4 verification for the Home page.
// Covers CTA wiring, the service-link regression, image accessibility and
// heading structure. Responsive rendering is a media-query concern jsdom does
// not evaluate, so breakpoint classes are asserted instead.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import {
  render,
  screen,
  cleanup,
  within,
  act,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { allServices } from "../../data/services";
import { featuredProjects } from "../../data/projects";

// Routes as declared in AppRoutes.tsx. The Home service cards must point at
// these exact paths — three of four previously pointed at paths that did not
// exist and fell through to the NotFound catch-all.
const DECLARED_SERVICE_ROUTES = [
  "/Services/SoftwareSolutions",
  "/Services/AIML",
  "/Services/CloudSolutions",
  "/Services/MobileAppDevelopment",
];

afterEach(cleanup);

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

describe("Home — calls to action", () => {
  it("has exactly one h1 and leads with the primary CTA", () => {
    renderHome();

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("link", { name: /get started/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("routes every CTA to a real destination", () => {
    renderHome();

    const expected: Record<string, string> = {
      "get started": "/contact",
      "learn more": "/about",
      "explore all services": "/services",
      "about our team": "/about",
      "view all projects": "/portfolio",
      "start a project": "/contact",
      "explore services": "/services",
    };

    for (const [name, href] of Object.entries(expected)) {
      const link = screen.getByRole("link", {
        name: new RegExp(`^${name}$`, "i"),
      });
      expect(link, `CTA "${name}"`).toHaveAttribute("href", href);
    }
  });
});

describe("Home — service cards", () => {
  it("links each service to a route that actually exists", () => {
    renderHome();

    const learnMoreLinks = screen.getAllByRole("link", {
      name: /^learn more about /i,
    });
    expect(learnMoreLinks).toHaveLength(allServices.length);

    const hrefs = learnMoreLinks.map((l) => l.getAttribute("href"));
    for (const href of hrefs) {
      expect(DECLARED_SERVICE_ROUTES).toContain(href);
    }
    // No duplicates — each card goes somewhere different.
    expect(new Set(hrefs).size).toBe(allServices.length);
  });

  it("renders every service, not a rotating subset", () => {
    renderHome();

    for (const service of allServices) {
      expect(
        screen.getByRole("heading", { name: service.title }),
      ).toBeInTheDocument();
    }
  });
});

describe("Home — featured projects", () => {
  it("shows three real projects from the shared project data", () => {
    renderHome();

    for (const project of featuredProjects) {
      expect(
        screen.getByRole("heading", { name: project.title }),
      ).toBeInTheDocument();
      // Titles contain regex metacharacters, e.g. "E-Commerce Platform (Web)".
      const escaped = project.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      expect(
        screen.getByRole("link", { name: new RegExp(escaped, "i") }),
      ).toHaveAttribute("href", "/portfolio");
    }
  });

  it("uses the high-resolution portfolio screenshots, not the stock photo", () => {
    const { container } = renderHome();
    const projectImgs = featuredProjects.map((p) =>
      container.querySelector(`img[alt="${p.title} interface"]`),
    );

    for (const img of projectImgs) {
      expect(img).toBeTruthy();
      // Intrinsic size declared so the browser reserves space and does not
      // upscale; these sources are ~1024px.
      expect(img).toHaveAttribute("width", "1024");
      expect(img).toHaveAttribute("height", "768");
    }

    // The 801x568 team photo that used to fill this section is gone.
    expect(
      container.querySelector('img[alt*="robotics automation"]'),
    ).toBeNull();
  });
});

describe("Home — accessibility", () => {
  it("gives every image an alt attribute", () => {
    const { container } = renderHome();
    const imgs = Array.from(container.querySelectorAll("img"));

    expect(imgs.length).toBeGreaterThan(0);
    for (const img of imgs) {
      expect(img).toHaveAttribute("alt");
    }
  });

  it("marks decorative images as empty-alt and meaningful ones with text", () => {
    const { container } = renderHome();
    const meaningful = Array.from(container.querySelectorAll("img")).filter(
      (img) => img.getAttribute("alt") !== "",
    );

    // The two photographic images carry real descriptions.
    for (const img of meaningful) {
      expect(img.getAttribute("alt")!.length).toBeGreaterThan(5);
    }
  });

  it("lazy-loads below-the-fold imagery", () => {
    const { container } = renderHome();
    const lazy = container.querySelectorAll('img[loading="lazy"]');
    expect(lazy.length).toBeGreaterThan(0);
  });

  it("keeps a single logical heading order", () => {
    renderHome();
    const levels = screen
      .getAllByRole("heading")
      .map((h) => Number(h.tagName[1]));

    // Never jumps more than one level deeper than the previous heading.
    for (let i = 1; i < levels.length; i++) {
      expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
    }
  });
});

describe("Home — responsive contract", () => {
  it("offsets the hero with the shared nav token", () => {
    const { container } = renderHome();
    const hero = container.querySelector("section");

    expect(hero?.className).toContain("pt-nav");
    expect(hero?.className).toContain("md:pt-nav-lg");
  });
});

describe("Home — marquee rails", () => {
  const track = (label: string) =>
    document.querySelector<HTMLElement>(`ul[aria-label="${label}"]`);

  it("scrolls services leftwards and projects rightwards", () => {
    renderHome();

    expect(track("Our services")?.className).toContain("marquee-track-left");
    expect(track("Featured projects")?.className).toContain(
      "marquee-track-right",
    );
    expect(track("Why choose COLTEK")?.className).toContain(
      "marquee-track-right",
    );
  });

  it("duplicates each item set so the loop is seamless", () => {
    renderHome();

    const servicesTrack = track("Our services")!;
    const items = servicesTrack.querySelectorAll(":scope > li");

    // Two copies of every service.
    expect(items).toHaveLength(allServices.length * 2);
    expect(
      servicesTrack.querySelectorAll(":scope > li.marquee-duplicate"),
    ).toHaveLength(allServices.length);
  });

  it("hides the duplicate copy from assistive tech and the tab order", () => {
    renderHome();

    for (const dup of document.querySelectorAll("li.marquee-duplicate")) {
      expect(dup).toHaveAttribute("aria-hidden", "true");
      expect(dup).toHaveAttribute("inert");
    }

    // Because duplicates are aria-hidden, each service still resolves to a
    // single accessible heading rather than two.
    for (const service of allServices) {
      expect(
        screen.getByRole("heading", { name: service.title }),
      ).toBeInTheDocument();
    }
  });

  it("offers a pause control that toggles the animation", () => {
    renderHome();

    const pause = screen.getByRole("button", { name: /pause our services/i });
    expect(pause).toHaveAttribute("aria-pressed", "false");
    expect(track("Our services")).not.toHaveAttribute("data-paused");

    fireEvent.click(pause);

    expect(
      screen.getByRole("button", { name: /play our services/i }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(track("Our services")).toHaveAttribute("data-paused", "true");
  });

  it("gives every rail an accessible name", () => {
    renderHome();
    for (const label of [
      "Our services",
      "Why choose COLTEK",
      "Featured projects",
    ]) {
      expect(track(label)).toBeTruthy();
    }
  });
});

describe("Home — no console errors", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("renders clean", () => {
    renderHome();
    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    vi.restoreAllMocks();
  });
});

describe("Home — preserved behaviour", () => {
  it("still rotates the hero word on a timer", () => {
    vi.useFakeTimers();
    renderHome();

    expect(screen.getByText("Excellence")).toBeInTheDocument();

    // State updates from the interval have to be flushed inside act().
    act(() => {
      vi.advanceTimersByTime(2800);
    });
    act(() => {
      vi.advanceTimersByTime(450);
    });

    expect(screen.getByText("Innovation")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("still renders the testimonials section", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /what people say/i }),
    ).toBeInTheDocument();

    // Both testimonials are 5 stars, so there are two rating images.
    expect(
      within(document.body).getAllByLabelText(/5 out of 5 stars/i),
    ).toHaveLength(2);
  });
});
