"use client";
import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <aside className="w-72 min-h-screen bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold text-purple-400 mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          <Link
            href="/dashboard"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/orders"
            className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            📦 Orders
          </Link>

          <Link
            href="/users"
            className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            👥 Users
          </Link>

          <Link
            href="/products"
            className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            🛍️ Products
          </Link>

          <Link
            href="/settings"
            className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            ⚙️ Settings
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            🚪 Login
          </Link>

          {/* <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
          >
            🚪 Logout
          </button> */}

          <button
            onClick={() => {
              // Clear any stored authentication data
              localStorage.removeItem("authToken");
              sessionStorage.clear(); // if used, clear session data

              // Redirect to login page
              window.location.href = "/login"; // adjust route as needed
            }}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
