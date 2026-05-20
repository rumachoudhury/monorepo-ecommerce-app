"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div>
          <CheckCircle className="w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Successful
        </h1>
        {/* Message */}
        <p className="text-gray-500 mb-6">
          Thank you for your purchase! Your order has been placed successfully.
        </p>
        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
