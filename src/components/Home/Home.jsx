// components/Home/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Xush kelibsiz!</h1>
      <p className="text-lg text-gray-600 mb-4">
        Bu sizning React loyihangizning bosh sahifasidir.
      </p>
      <Link
        to="/login"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Kirish
      </Link>
    </div>
  );
};

export default Home;
