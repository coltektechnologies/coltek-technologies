// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all the pages
import Home from "../pages/Home/Home.tsx"; // This assumes you already have a Home page
import About from "../pages/About/About.tsx";
import Contact from "../pages/Contact/Contact.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";

/**
 * AppRoutes Component
 * -------------------
 * Hi, this is Frederick’s main routing setup for the COLTEK website.
 * This file defines all available routes (URLs) and connects them to their page components.
 * 
 * Later, when my teammate finishes the Navbar and Footer, they can import
 * them inside the individual pages or wrap them around this Router for global use.
 */

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* About page (my assigned page) */}
        <Route path="/about" element={<About />} />

        {/* Contact page (my other assigned page) */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
