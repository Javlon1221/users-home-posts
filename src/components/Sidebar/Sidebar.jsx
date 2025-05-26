// components/Sidebar/Sidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-blue-700 transition text-white text-left w-full";

  const activeClass = "bg-blue-600";

  return (
    <div className="bg-blue-600 h-full w-48 flex flex-col py-6 text-white fixed top-0 left-0">
      <h2 className="text-xl font-bold px-4 mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Home
        </NavLink>
        <NavLink to="/group" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Group
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Users
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
