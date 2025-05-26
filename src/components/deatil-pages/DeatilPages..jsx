import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Flame, Users } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar"; // import sidebar

const DetailPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="text-lg font-semibold animate-pulse">Loading...</span>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="text-lg text-red-500">Recipe not found.</span>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex justify-center items-center w-full p-6">
                <div className="max-w-2xl w-full">
                    <Link
                        to="/"
                        className="inline-block mb-4 text-blue-600 hover:underline font-medium"
                    >
                        ← Ortga
                    </Link>
                    <h1 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow-sm">{recipe.name}</h1>
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-72 object-cover rounded-xl mb-6 shadow-md ring-2 ring-gray-100"
                    />
                    <div className="mb-4">
                        <span className="inline-block bg-green-200 text-green-900 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                            {recipe.cuisine}
                        </span>
                    </div>
                    <p className="mb-6 text-gray-700 leading-relaxed">{recipe.instructions}</p>
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ingredients:</h2>
                    <ul className="flex flex-wrap gap-2 mb-6">
                        {recipe.ingredients.map((ing, idx) => (
                            <li
                                key={idx}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm"
                            >
                                {ing}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm">
                            <Clock className="w-4 h-4" />
                            <span>Prep: {recipe.prepTimeMinutes} min</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm">
                            <Flame className="w-4 h-4" />
                            <span>Cook: {recipe.cookTimeMinutes} min</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm">
                            <Users className="w-4 h-4" />
                            <span>Servings: {recipe.servings}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
