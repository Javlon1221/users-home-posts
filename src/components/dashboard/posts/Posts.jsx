import React, { useEffect, useState } from "react";

const SkeletonCard = () => (
    <div className="bg-white rounded shadow p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
);

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/posts?limit=6")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                    ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
                    : posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded shadow p-4 hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-2">{post.body}</p>
                            <div className="text-sm text-gray-500">Tags: {post.tags.join(", ")}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Posts;