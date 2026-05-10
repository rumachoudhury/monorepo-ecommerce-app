"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AdminHome() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className="w-72 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold text-purple-400 mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          <Link
            href="/dashboard"
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/orders"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            📦 Orders
          </Link>

          <Link
            href="/users"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            👥 Users
          </Link>

          <Link
            href="/products"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            🛍️ Products
          </Link>

          <Link
            href="/settings"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            ⚙️ Settings
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            🚪 Login
          </Link>

          <Link
            href="/logout"
            className="px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            🚪 Logout
          </Link>
        </nav>
      </aside> */}
      <aside className="w-72 bg-gray-900 text-white p-6">
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

          {/* <Link
            href="/logout"
            className="px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
          >
            🚪 Logout
          </Link> */}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-gray-500">
              Welcome back! Here’s your store overview.
            </p>
          </div>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700">
            + Add Product
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <p className="text-gray-500">Total Orders</p>
            <h2 className="text-3xl font-bold mt-2">1,248</h2>
            <p className="text-green-600 mt-2 text-sm">+12% this week</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <p className="text-gray-500">Customers</p>
            <h2 className="text-3xl font-bold mt-2">845</h2>
            <p className="text-green-600 mt-2 text-sm">+8% this month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$12,450</h2>
            <p className="text-green-600 mt-2 text-sm">+18% this month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <p className="text-gray-500">Pending Orders</p>
            <h2 className="text-3xl font-bold mt-2">32</h2>
            <p className="text-red-500 mt-2 text-sm">Needs attention</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Orders</h2>

            <Link href="/orders" className="text-purple-600 hover:underline">
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="py-3 text-left">Order ID</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Product</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3">#1024</td>
                  <td>John Doe</td>
                  <td>Wireless Headphones</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Delivered
                    </span>
                  </td>
                  <td>$120</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3">#1025</td>
                  <td>Sarah Smith</td>
                  <td>Gaming Mouse</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                      Pending
                    </span>
                  </td>
                  <td>$75</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-3">#1026</td>
                  <td>Michael Lee</td>
                  <td>Mechanical Keyboard</td>
                  <td>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                      Shipped
                    </span>
                  </td>
                  <td>$210</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
