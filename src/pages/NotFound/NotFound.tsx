import React from "react";

/**
 * Not Found Page
 * ---------------
 * Hi, this is Frederick’s Not Found component.
 * It shows up when a user visits a route that doesn’t exist.
 */

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-600">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg">Oops! The page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default NotFound;
