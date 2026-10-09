// ========== NAVBAR ==========
// The application's only navigation surface (CLAUDE.md §8).
//
// Rendered both by Layout (for the routes nested under it) and directly by
// the Services pages, so it must stand alone. Its height comes from the
// --spacing-nav token, which is the same token pages use to offset their
// content — see index.css §1 "Application shell".
//
// Navigation destinations, labels and the logo hover-swap behaviour are
// unchanged; only the styling, markup and keyboard handling were reworked.
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logoPath = "/logo.png";
const logoHoverPath = "/images/logohover.png";

// Single source of truth for the nav destinations — previously these five
// links were copy-pasted twice (desktop + mobile) with duplicated classNames.
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
] as const;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Close on outside click, and on Escape for keyboard users.
  useEffect(() => {
    if (!showMobileMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (
        target &&
        !menuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setShowMobileMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMobileMenu(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  // Desktop link: underline grows from the left on hover, brand blue when active.
  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative cursor-pointer text-sm font-medium transition-colors duration-300",
      "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-bright",
      "after:transition-all after:duration-300 hover:after:w-full",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-control",
      isActive ? "text-blue-bright after:w-full" : "hover:text-blue-bright",
    );

  // Mobile link: full-width row with a translucent active/hover fill.
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "w-full rounded-control px-4 py-3 text-center text-lg font-medium text-white transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
      isActive ? "bg-white/20" : "hover:bg-white/10",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 shadow-md transition-colors duration-300",
        isLogoHovered ? "bg-[#D9D9D9]" : "bg-[#04062D]",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-nav w-full max-w-screen-xl items-center justify-between",
          "px-4 md:h-nav-lg md:px-10 lg:px-20",
        )}
      >
        {/* Logo — crossfades to the hover artwork, which also lightens the bar. */}
        <NavLink
          to="/"
          aria-label="COLTEK Technologies — home"
          className="relative block shrink-0 rounded-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <img
            src={logoPath}
            alt="Coltek Technologies"
            className={cn(
              "h-10 w-auto transition-opacity duration-300 md:h-12",
              isLogoHovered ? "opacity-0" : "opacity-100",
            )}
          />
          <img
            src={logoHoverPath}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute left-0 top-0 h-10 w-auto transition-opacity duration-300 md:h-12",
              isLogoHovered ? "opacity-100" : "opacity-0",
            )}
          />
        </NavLink>

        {/* Desktop navigation */}
        <ul
          className={cn(
            "hidden items-center gap-6 md:flex",
            isLogoHovered ? "text-[#102A43]" : "text-white",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              {/* NavLink sets aria-current="page" on the anchor itself.
                  `end` keeps "/" from matching every route as a prefix. */}
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop call to action.
            Intentionally has no destination: the original button had no
            onClick and no link, and wiring one up would change navigation
            behaviour. Flagged in the Stage 3 report. */}
        <Button className="hidden rounded-pill bg-white text-[#102A43] shadow-md hover:bg-gray-100 md:inline-flex">
          Get a Quote
        </Button>

        {/* Mobile menu trigger */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setShowMobileMenu(true)}
          aria-label="Open navigation menu"
          aria-expanded={showMobileMenu}
          aria-controls="mobile-navigation"
          className="rounded-control p-1 text-blue-bright transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-hidden="true"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        aria-label="Mobile"
        // Keeps the off-screen drawer out of the tab order when closed.
        inert={!showMobileMenu}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-4/5 max-w-sm md:hidden",
          "bg-gradient-to-r from-brand-navy to-brand-teal",
          "transform transition-transform duration-300 ease-in-out",
          showMobileMenu ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-nav items-center justify-end px-4">
          <button
            type="button"
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close navigation menu"
            className="rounded-control p-1 text-white transition-colors hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex h-[calc(100%-var(--spacing-nav))] flex-col items-center justify-center gap-8 px-4">
          <ul className="flex w-full flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="w-full">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setShowMobileMenu(false)}
                  className={mobileLinkClass}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Same as desktop: closes the drawer, as it did before. */}
          <Button
            className="rounded-pill bg-[#0D1B2A] text-[#B0BEC5] hover:bg-[#0D1B2A]/90"
            onClick={() => setShowMobileMenu(false)}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
