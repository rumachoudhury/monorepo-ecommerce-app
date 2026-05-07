import Link from "next/link";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";

import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white">
        <div className="flex justify-center mb-6">
          <ShoppingBagIcon size={60} />
        </div>

        <h1 className="text-5xl font-bold">Welcome to Client Store</h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Discover premium products with modern shopping experience.
        </p>

        <Link href="/products">
          <button className="mt-8 bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Now 🛒
          </button>
        </Link>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <ShoppingCartIcon className="text-cyan-700" />

          <h2 className="text-3xl font-bold">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProductCard
            id="1"
            title="Nike Shoes"
            price={150}
            image="/shoe.avif"
          />

          <ProductCard
            id="2"
            title="Apple Watch"
            price={399}
            image="/watch.avif"
          />

          <ProductCard
            id="3"
            title="Headphones"
            price={89}
            image="/headphone.avif"
          />
        </div>
      </section>
    </main>
  );
}
