import React, { useEffect, useState } from "react";

const SkeletonRow = () => (
    <tr className="animate-pulse">
        {[...Array(6)].map((_, idx) => (
            <td key={idx} className="py-2 px-4 border-b">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
            </td>
        ))}
    </tr>
);

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Products</h2>

            <div className="overflow-auto max-h-[700px] border rounded-lg shadow">
                <table className="min-w-full bg-white">
                    <thead className="sticky top-0 bg-gray-100 z-10">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Brand</th>
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading
                            ? [...Array(10)].map((_, i) => <SkeletonRow key={i} />)
                            : products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{product.id}</td>
                                    <td className="py-2 px-4 border-b">{product.title}</td>
                                    <td className="py-2 px-4 border-b">${product.price}</td>
                                    <td className="py-2 px-4 border-b">{product.brand}</td>
                                    <td className="py-2 px-4 border-b">{product.category}</td>
                                    <td className="py-2 px-4 border-b">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
