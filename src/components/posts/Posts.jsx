import React, { useEffect, useState } from "react";

const SkeletonPost = () => (
    <div className="bg-white shadow rounded-lg p-4 border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-3"></div>
        <div className="flex gap-2">
            <div className="h-5 w-14 bg-gray-200 rounded"></div>
            <div className="h-5 w-10 bg-gray-200 rounded"></div>
            <div className="h-5 w-12 bg-gray-200 rounded"></div>
        </div>
    </div>
);

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/posts");
                if (!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();
                setPosts(data.posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-extrabold mb-6 text-center text-blue-700 drop-shadow">
                Posts
            </h1>

            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg shadow mb-5 text-sm">
                    Error: {error}
                </div>
            )}

            <div className="space-y-6">
                {loading
                    ? Array.from({ length: 5 }).map((_, idx) => <SkeletonPost key={idx} />)
                    : posts.map((post) => (
                          <div
                              key={post.id}
                              className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                          >
                              <h2
                                  className="text-xl font-semibold mb-2 text-gray-800"
                                  aria-label={`Post title: ${post.title}`}
                              >
                                  {post.title}
                              </h2>
                              <p className="text-gray-600 text-sm mb-3">{post.body}</p>

                              {post.tags?.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                      {post.tags.map((tag, index) => (
                                          <span
                                              key={`${tag}-${index}`}
                                              className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                                              title={`Tag: ${tag}`}
                                          >
                                              #{tag}
                                          </span>
                                      ))}
                                  </div>
                              )}
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Posts;
