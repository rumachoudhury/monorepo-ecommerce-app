import React from "react";
import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside
        className="w-72 min-h-screen bg-blue-700 border-r shadow-md p-6"
        style={{
          backgroundColor: "grey",
          color: "white",
          padding: "50px",
          paddingTop: "10px",
        }}
      >
        <h2 className="text-3xl font-bold text-purple-600 mb-10">
          Admin Panel
        </h2>

        <nav className="flex flex-col space-y-5 text-lg font-medium underline-none">
          <Link
            href="/admin"
            className="bg-purple-100 text-purple-700 px-4 py-3 rounded-xl hover:bg-purple-200 transition"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/orders"
            className="hover:bg-gray-100 px-4 py-3 rounded-xl transition"
          >
            📦 Orders
          </Link>

          <Link
            href="/users"
            className="hover:bg-gray-100 px-4 py-3 rounded-xl transition"
          >
            👥 Users
          </Link>

          <Link
            href="/products"
            className="hover:bg-gray-100 px-4 py-3 rounded-xl transition"
          >
            🛍️ Products
          </Link>

          <Link
            href="/settings"
            className="hover:bg-gray-100 px-4 py-3 rounded-xl transition"
          >
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      {/* <main className="flex-1 p-8 "> */}
      <main
        className="flex-1 p-8 bg-gray-500 text-white"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "50px",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back! Here’s your store overview.
            </p>
          </div>

          <button className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition">
            + Add Product
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Orders */}
          <div
            className=" p-6 rounded-2xl shadow-2xl border"
            style={{
              // backgroundColor: "cornsilk",
              backgroundColor: "grey",
              textAlign: "center",
              margin: "0 10px 10px 0",
              color: "white",
            }}
          >
            <p className="text-gray-500">Total Orders</p>

            <h2 className="text-3xl font-bold mt-2">1,248</h2>

            <p className="text-green-600 mt-2">+12% this week</p>
          </div>

          {/* Customers */}
          <div
            className="bg-white p-6 rounded-2xl shadow border"
            style={{
              // backgroundColor: "cornsilk",
              backgroundColor: "grey",
              textAlign: "center",
              margin: "0 10px 10px 0",
              color: "white",
            }}
          >
            <p className="text-gray-500">Customers</p>

            <h2 className="text-3xl font-bold mt-2">845</h2>

            <p className="text-green-600 mt-2">+8% this month</p>
          </div>

          {/* Revenue */}
          <div
            className="bg-white p-6 rounded-2xl shadow border"
            style={{
              // backgroundColor: "cornsilk",
              backgroundColor: "grey",
              textAlign: "center",
              margin: "0 10px 10px 0",
              color: "white",
            }}
          >
            <p className="text-gray-500">Revenue</p>

            <h2 className="text-3xl font-bold mt-2">$12,450</h2>

            <p className="text-green-600 mt-2">+18% this month</p>
          </div>

          {/* Pending */}
          <div
            className="bg-white p-6 rounded-2xl shadow border "
            style={{
              // backgroundColor: "cornsilk",
              backgroundColor: "grey",
              textAlign: "center",
              margin: "0 10px 10px 0",
              color: "white",
            }}
          >
            <p className="text-gray-500">Pending Orders</p>

            <h2 className="text-3xl font-bold mt-2">32</h2>

            <p className="text-red-500 mt-2">Needs attention</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Orders</h2>

            <Link
              href="/orders"
              className="text-purple-600 font-medium hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="py-3">Order ID</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Product</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4">#1024</td>
                  <td>John Doe</td>
                  <td>Wireless Headphones</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Delivered
                    </span>
                  </td>
                  <td>$120</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4">#1025</td>
                  <td>Sarah Smith</td>
                  <td>Gaming Mouse</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                  <td>$75</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4">#1026</td>
                  <td>Michael Lee</td>
                  <td>Mechanical Keyboard</td>
                  <td>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
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
