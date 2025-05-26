import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data.recipes || []);
                setLoading(false);
            });
    }, []);

    const displayedRecipes = showAll ? recipes : recipes.slice(0, 8);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="p-6 w-full max-w-7xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading
                        ? Array.from({ length: 8 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="w-full h-80 bg-gray-200 rounded-xl p-4 flex flex-col justify-center items-center animate-pulse"
                            >
                                <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
                                <div className="w-3/4 h-5 bg-gray-400 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
                            </div>
                        ))
                        : displayedRecipes.map((recipe) => (
                            <Link
                                to={`/recipes/${recipe.id}`}
                                key={recipe.id}
                                className="border border-gray-200 rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-700">{recipe.name}</h3>
                                <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                            </Link>
                        ))}
                </div>
                {!showAll && !loading && recipes.length > 8 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 text-base font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recipes;
