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
    <div className="min-h-screen flex flex-col" style={{ overflowX: "hidden" }}>
      {/* Show initial loading animation */}
      {initialLoading && <Loader />}

      {!initialLoading && (
        <>
          <Navbar />

          {/* This div fades in whenever route changes */}
          <main key={routeKey} className="flex-1 animate-route-fade">
            <Outlet />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
