"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/app/store/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center p-2 bg-black">
      <h1 className="font-bold text-xl">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Shop Logo"
            width={150}
            height={200}
            className="object-contain"
          />
        </Link>
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-5 text-white text-sm font-medium">
        <Link href="/" className="hover:text-cyan-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-cyan-400 transition">
          About
        </Link>
        <Link href="/products" className="hover:text-cyan-400 transition">
          Products
        </Link>
      </div>

      {/* CART */}
      <Link href="/cart" className="relative">
        <ShoppingCart className="text-gray-50 text-center" />

        {/* BADGE */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
}
