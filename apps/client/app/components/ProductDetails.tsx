// "use client";

// import { useParams } from "next/navigation";
// import { useCartStore } from "@/app/store/cartStore";
// import Image from "next/image";

// const products = [
//   { id: "1", title: "Nike Shoes", price: 150, image: "/shoe.avif" },
//   { id: "2", title: "Apple Watch", price: 399, image: "/watch.avif" },
//   { id: "3", title: "Headphones", price: 89, image: "/headphone.avif" },
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const addToCart = useCartStore((state) => state.addToCart);

//   const product = products.find((p) => p.id === id);

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-10">
//       <Image
//         src={product.image}
//         alt=""
//         width={400}
//         height={400}
//         className="w-full h-80 object-cover rounded"
//       />

//       <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
//       <p className="text-xl mt-2">${product.price}</p>

//       <button
//         onClick={() => addToCart(product)}
//         className="mt-6 bg-cyan-800 text-white px-6 py-3 rounded"
//       >
//         Add to Cart 🛒
//       </button>
//     </div>
//   );
// }

// -----------------
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

  // fake discount logic
  const originalPrice = (product.price + 35).toFixed(2);
  const saveAmount = 35;

  return (
    <div className="max-w-3xl mx-auto p-10">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="w-full h-80 object-cover rounded"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>

      {/* PRICE SECTION (NEW ADDED) */}
      <div className="mt-4 space-y-1">
        <p className="text-green-600 text-xl font-bold">
          Now ${product.price.toFixed(2)}
        </p>

        <p className="text-gray-400 line-through">Was ${originalPrice}</p>

        <p className="text-red-500">You save ${saveAmount.toFixed(2)}</p>

        <p className="text-sm text-gray-500">Price when purchased online</p>
      </div>

      {/* CASHBACK */}
      <p className="text-sm text-gray-500 mt-3">
        Earn up to 5% cash back with OnePay CashRewards.{" "}
        <span className="text-blue-600 underline cursor-pointer">
          Learn how
        </span>
      </p>

      {/* PRICE (simple old display if needed) */}
      <p className="text-xl mt-2">${product.price}</p>

      {/* ADD TO CART */}
      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-cyan-800 text-white px-6 py-3 rounded"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}
