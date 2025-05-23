// components/Home/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("https://dummyjson.com/recipes?limit=4").then(res => res.json()),
      fetch("https://dummyjson.com/users?limit=4").then(res => res.json()),
    ]).then(([recipesData, usersData]) => {
      setRecipes(recipesData.recipes || []);
      setUsers(usersData.users || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Xush kelibsiz!</h1>
      
      <Link
        to="/login"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-8"
      >
        Kirish
      </Link>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Retseptlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-100 rounded-lg p-4">
                    <div className="h-32 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))
              : recipes.map(recipe => (
                  <div key={recipe.id} className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-32 w-full object-cover rounded mb-3"
                    />
                    <div className="text-lg font-medium text-gray-800 mb-1">{recipe.name}</div>
                    <div className="text-sm text-gray-500">{recipe.cuisine}</div>
                  </div>
                ))}
          </div>
        </div>
        {/* Users */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Foydalanuvchilar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                    <div className="h-20 w-20 bg-gray-300 rounded-full mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))
              : users.map(user => (
                  <div key={user.id} className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
                    <img
                      src={user.image}
                      alt={user.firstName}
                      className="h-20 w-20 object-cover rounded-full mb-3"
                    />
                    <div className="text-lg font-medium text-gray-800 mb-1">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
