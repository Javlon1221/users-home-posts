// components/Header/Header.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  if (location.pathname === "/login") return null;

const isRecipes = location.pathname === "/recipes";
return (
    <header
        className={`py-4 shadow ${
            isRecipes
                ? "bg-yellow-500 text-red-700"
                : location.pathname === "/users"
                ? "bg-purple-600 text-yellow-100"
                : "bg-blue-600 text-white"
        }`}
    >
        <nav className="container mx-auto flex justify-between px-4">
            <h1 className="text-xl font-bold">My Website</h1>
            <ul className="flex gap-4">
                <li>
                    <Link
                        to="/"
                        className={`hover:underline ${
                            location.pathname === "/" ? "text-green-500 font-semibold" : ""
                        }`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/recipes"
                        className={`hover:underline ${
                            location.pathname === "/recipes" ? "text-green-500 font-semibold" : ""
                        }`}
                    >
                        Recipes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/users"
                        className={`hover:underline ${
                            location.pathname === "/users" ? "text-green-500 font-semibold" : ""
                        }`}
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        to="/post"
                        className={`hover:underline ${
                            location.pathname === "/post" ? "text-green-500 font-semibold" : ""
                        }`}
                    >
                        Posts
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className={`hover:underline ${
                            location.pathname === "/login" ? "text-green-500 font-semibold" : ""
                        }`}
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);
};

export default Header;
