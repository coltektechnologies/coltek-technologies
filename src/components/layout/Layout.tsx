// ========== LAYOUT ==========
// The shared application shell for every route nested under "/".
//
// The Services routes sit outside this Layout and compose Navbar/Footer
// themselves, so both paths must produce the same shell — see the Stage 3
// report for the consequences that remain.
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "../loading/Loader";
import { useEffect, useState } from "react";

const Layout = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();
  const [routeKey, setRouteKey] = useState(0);

  // Initial Loader Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Fade-in on route change
  useEffect(() => {
    setRouteKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Show initial loading animation */}
      {initialLoading && <Loader />}

      {!initialLoading && (
        <>
          {/* Lets keyboard users jump past the fixed navbar (CLAUDE.md §17).
              Visible only while focused. */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>

          <Navbar />

          {/* Re-keyed on navigation so the route fade replays */}
          <main
            id="main-content"
            key={routeKey}
            className="animate-route-fade flex-1"
          >
            <Outlet />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
