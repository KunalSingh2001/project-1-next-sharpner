"use client";
import { useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    const fetchAllRecords = async () => {
        const res = await fetch("https://dummyjson.com/products", {
            next: { revalidate: 5 },
        });
        const data = await res.json();
        setProducts(data.products);
    };

    return (
        <div>
            <button onClick={fetchAllRecords}>Fetch all products</button>

            <h1><b>Products listing</b></h1>
            <div>
                <ul>
                    {products.map((prod) => (
                        <li key={prod.id}>{prod.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
