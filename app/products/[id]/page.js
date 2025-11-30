"use client";
import { useEffect, useState } from "react";

export default function SingleProduct({ id }) {
	const [product, setProduct] = useState(null);

	const fetchProduct = async () => {
		const res = await fetch("https://dummyjson.com/products/" + id, {
			next: { revalidate: 5 },
		});
		const data = await res.json();
		setProduct(data);
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	if (!product) return <p>Loading product...</p>;

	return (
		<div>
			<h1>{product.title}</h1>
			<p>Price: ${product.price}</p>

			<img
				src={product.thumbnail}
				alt={product.title}
				width="200"
			/>

			<p>{product.description}</p>

			<p>
				<strong>Brand:</strong> {product.brand}
			</p>

			<p>
				<strong>Category:</strong> {product.category}
			</p>
			<img src="/images/wallpaper.jpg" alt="image" />
		</div>
	);
}
