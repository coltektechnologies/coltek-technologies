import React from "react";

/**
 * 404 Not Found Page
 * -------------------
 * Hi, this is Frederick’s 404 page.
 * This appears when a user visits a route that does not exist.
 */

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-600">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg">Oops! This page does not exist.</p>
    </div>
  );
};

export default NotFound;
