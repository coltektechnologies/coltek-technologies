import React from "react";

/**
 * Temporary Home Page
 * -------------------
 * Hi, this is Frederick’s temporary Home component.
 * I created this just to prevent router errors while testing my About page.
 * 
 * This will be replaced later with the team’s actual Home page.
 */

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to the COLTEK Home Page (Temporary)
      </h1>
    </div>
  );
};

export default Home;
