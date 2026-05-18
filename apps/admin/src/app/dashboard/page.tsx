"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";
//
function DashboardPage() {
  const pathname = usePathname();
  return (
    <div>
      <main className="flex-1 p-8">
        {/* show link ONLY when NOT on admin home */}
        {pathname !== "/" && (
          <Link
            href="/"
            className="text-green-600 text-2xl flex items-center gap-2 mb-4"
          >
            <ArrowLeft />
            Go to admin home
          </Link>
        )}

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
        {/* Card section */}
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

        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Orders</h2>

            <Link href="/orders" className="text-purple-600 hover:underline">
              View All
            </Link>
          </div>

          {/* Table section  */}
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
      ;
    </div>
  );
}

export default DashboardPage;
