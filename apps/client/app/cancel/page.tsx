import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment process was cancelled. You can return and try again
          anytime.
        </p>

        <div className=" flex gap-2">
          <Link
            href="/checkout"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Checkout
          </Link>

          <Link
            href="/products"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
