// src/pages/About/About.tsx
import React from "react";

/**
 * About Page Component
 * --------------------
 * Hi, this is Frederick's About Us page for the COLTEK website.
 * I created this as part of my assigned pages (About and Contact).
 * 
 * For now, this component just displays a heading, a test button, 
 * and placeholders for Navbar and Footer which will be imported later 
 * when my teammate finalizes them.
 */

const About: React.FC = () => {
  // Function to handle the button click
  const handleClick = () => {
    alert("Welcome to COLTEK!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
      {/* Placeholder Navbar */}
      <header className="bg-blue-600 text-white p-4 text-center font-semibold">
        {/* I will replace this with the imported Navbar component later */}
        Navbar Placeholder
      </header>

      {/* Main content area */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6">About COLTEK</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Hi! I'm Frederick, and this is the About Us page I'm building for the COLTEK website. 
          This will later include real content like our mission, vision, and team information.
        </p>

        {/* Button test area */}
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          COLTEK
        </button>
      </main>

      {/* Placeholder Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        {/* I will replace this with the imported Footer component later */}
        Footer Placeholder
      </footer>
    </div>
  );
};

export default About;
