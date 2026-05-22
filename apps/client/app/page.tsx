import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";

import ProductCard from "./components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-linear-to-r from-cyan-700 to-cyan-500 text-white">
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
          {/* <ShoppingCartIcon className="text-cyan-700" /> */}

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

      {/* ⭐ FEATURES SECTION */}

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-6 rounded-2xl shadow text-center border-b-2">
            <h3 className="text-xl font-bold mb-3">🚚 Free Shipping</h3>
            <p className="text-gray-600">
              Fast and free delivery on all orders.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow text-center border-b-2">
            <h3 className="text-xl font-bold mb-3">🔒 Secure Payment</h3>
            <p className="text-gray-600">Safe and trusted payment methods.</p>
          </div>

          <div className="p-6 rounded-2xl shadow text-center border-b-2">
            <h3 className="text-xl font-bold mb-3">💎 Premium Quality</h3>
            <p className="text-gray-600">
              Carefully selected high-quality products.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold">👟 Fashion</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold">⌚ Electronics</h3>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold">🎧 Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BANNER SECTION*/}
      <section className="bg-cyan-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">Summer Sale 50% OFF</h2>

        <p className="mt-4 text-lg">Limited-time deals on selected products.</p>

        <button className="mt-8 bg-white text-cyan-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
          Shop Deals
        </button>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            😊 What Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  border-b-cyan-400">
            <div className="p-6 shadow rounded-2xl">
              <Image
                src="/photo-1580489944761-15a19d654956.avif"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full object-cover mb-6"
              />
              <p>&quot;Amazing products and fast shipping!&quot;</p>
              <h4 className="mt-4 font-bold">— Sarah</h4>
            </div>

            <div className="p-6 shadow rounded-2xl">
              <Image
                src="/photo-1539571696357-5a69c17a67c6.avif"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full object-cover mb-6"
              />
              <p>&quot;Best ecommerce experience I&apos;ve had.&quot;</p>
              <h4 className="mt-4 font-bold">— John</h4>
            </div>

            <div className="p-6 shadow rounded-2xl">
              <Image
                src="/photo-1546961329-78bef0414d7c.avif"
                alt="Customer"
                width={100}
                height={100}
                className="rounded-full object-cover mb-6"
              />
              <p>&quot;Great quality and customer service.&quot;</p>
              <h4 className="mt-4 font-bold">— Emma</h4>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20   text-center">
        <h2 className="text-4xl font-bold">Join Our Newsletter</h2>

        <p className="mt-4 text-gray-500">
          Get updates about new products and special offers.
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-15 py-3 rounded-full w-80"
          />

          <button className="bg-cyan-600 px-8 py-3 rounded-full hover:bg-cyan-500 transition">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
