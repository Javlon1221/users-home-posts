// components/Footer/Footer.jsx

import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/login") return null;

  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-8">
      <p>&copy; {new Date().getFullYear()} My Website. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
};

export default Footer;
