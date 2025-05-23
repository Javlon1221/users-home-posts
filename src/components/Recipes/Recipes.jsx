import React, { useEffect, useState } from "react";

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

    const displayedRecipes = showAll ? recipes : recipes.slice(0, 6);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="p-6 w-full max-w-6xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Recipes</h2>
                <div className="flex flex-wrap gap-5 justify-center">
                    {loading
                        ? Array.from({ length: 6 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="w-64 h-80 bg-gray-200 rounded-lg p-4 flex flex-col justify-center items-center animate-pulse"
                            >
                                <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
                                <div className="w-3/4 h-5 bg-gray-400 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
                            </div>
                        ))
                        : displayedRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="w-64 border border-gray-200 rounded-lg p-4 bg-white flex flex-col items-center shadow"
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-full h-40 object-cover rounded-lg mb-3"
                                />
                                <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
                                <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                            </div>
                        ))}
                </div>
                {!showAll && !loading && recipes.length > 6 && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="mt-8 px-6 py-2 text-base rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Recipes;