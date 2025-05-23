import React from "react";
import { Link } from "react-router-dom";

const notFoundGif = "https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <img src={notFoundGif} alt="" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sahifa topilmadi</h2>
      <p className="text-gray-600 mb-6">
        Siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan bo'lishi mumkin.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
