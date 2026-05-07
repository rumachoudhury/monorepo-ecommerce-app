"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";

const products = [
  { id: "1", title: "Nike Shoes", price: 150, image: "/shoe.avif" },
  { id: "2", title: "Apple Watch", price: 399, image: "/watch.avif" },
  { id: "3", title: "Headphones", price: 89, image: "/headphone.avif" },
  { id: "4", title: "Parfum", price: 89, image: "/parfum.avif" },
  { id: "5", title: "Sunglasses", price: 89, image: "/sunglass.avif" },
  { id: "6", title: "Water Bottle", price: 89, image: "/water.avif" },
];

export default function ProductPage() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === String(id));

  if (!product) {
    return <p className="p-10">Product not found ❌</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10 items-start">
      {/* IMAGE */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* INFO */}
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        <p className="text-gray-500 text-lg">
          Premium quality product for everyday use.
        </p>

        <p className="text-3xl font-bold text-cyan-800">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-cyan-800 text-white px-8 py-4 rounded-xl hover:bg-cyan-700 transition"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
