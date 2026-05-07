"use client";

import { useParams } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";
import Image from "next/image";

const products = [
  { id: "1", title: "Nike Shoes", price: 150, image: "/shoe.avif" },
  { id: "2", title: "Apple Watch", price: 399, image: "/watch.avif" },
  { id: "3", title: "Headphones", price: 89, image: "/headphone.avif" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-10">
      <Image
        src={product.image}
        alt=""
        width={400}
        height={400}
        className="w-full h-80 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-cyan-800 text-white px-6 py-3 rounded"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}
