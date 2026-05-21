import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Shop Logo" width={50} height={50} />
            <h2 className="text-xl font-bold">ShopEase</h2>
          </div>

          <p className="text-gray-400 text-sm">
            A modern ecommerce platform built for smooth shopping experience,
            fast delivery, and quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/checkout" className="hover:text-white">
              Checkout
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@shopease.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
