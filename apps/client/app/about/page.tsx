import React from "react";

export default function About() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/premium_photo-1675431443027-ad1f46c93c8d.avif')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Store</h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          We create a modern shopping experience with high-quality products,
          elegant design, and fast service for customers everywhere.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Products
        </button>
      </div>
    </div>
  );
}
