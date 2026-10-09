// Regression guard for the Legal page.
//
// All five "policy" PDFs were byte-identical (md5 5a54646a36d83f49f60f730d77fa92cd)
// and none was a legal document — each was the same personal graduate-school
// application essay belonging to a named member of staff, including their
// private email address. Vite deduplicated them, so every one of the five
// "Download PDF" buttons served that single file to the public.
//
// These tests fail if a download button is wired back up without a real
// document behind it.
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LegalPage from "./legal";

afterEach(cleanup);

const renderLegal = () =>
  render(
    <MemoryRouter>
      <LegalPage />
    </MemoryRouter>,
  );

const SECTIONS = [
  "Terms of Service",
  "Privacy Policy",
  "Cookies",
  "License",
  "Compliance",
];

describe("Legal — no document is offered that does not exist", () => {
  it("links to no PDF anywhere on the page", () => {
    const { container } = renderLegal();

    for (const el of container.querySelectorAll("a, img, iframe, embed")) {
      const url = el.getAttribute("href") ?? el.getAttribute("src") ?? "";
      expect(url).not.toMatch(/\.pdf(\?|#|$)/i);
    }
  });

  it("offers no download control", () => {
    const { container } = renderLegal();

    expect(screen.queryByText(/download/i)).toBeNull();
    expect(container.querySelector("a[download]")).toBeNull();
  });

  it("says plainly that each document is still being prepared", () => {
    renderLegal();
    expect(screen.getAllByText(/being prepared/i)).toHaveLength(
      SECTIONS.length,
    );
  });
});

describe("Legal — section copy", () => {
  it("still lists every policy section", () => {
    renderLegal();

    for (const title of SECTIONS) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("gives each section its own description", () => {
    const { container } = renderLegal();

    // All five shared one placeholder string: "Description of our terms and
    // conditions governing the use of our website and services".
    const descriptions = [
      ...container.querySelectorAll("p.text-sm.text-gray-600.ml-9"),
    ].map((p) => p.textContent?.trim());

    expect(descriptions).toHaveLength(SECTIONS.length);
    expect(new Set(descriptions).size).toBe(SECTIONS.length);
    for (const d of descriptions) {
      expect(d).not.toMatch(/^Description of our terms and conditions/);
    }
  });
});
