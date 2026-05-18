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
        <h1></h1>
        <p></p>
        <Link href="/"></Link>
      </div>
    </div>
  );
}
