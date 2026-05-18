import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <Link
        href="/"
        className="text-green-600 text-2xl flex items-center gap-2 mb-4"
      >
        <ArrowLeft />
        Go to admin home
      </Link>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>

          <p className="text-gray-500 mt-2">Manage your all store products</p>
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl transition-colors">
          + Add Product
        </button>
      </div>

      {/* Product Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10 mt-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Products</p>

          <h2 className="text-3xl font-bold mt-2">248</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">In Stock</p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">210</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Out of Stock</p>

          <h2 className="text-3xl font-bold mt-2 text-red-500">18</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Categories</p>

          <h2 className="text-3xl font-bold mt-2 text-purple-600">12</h2>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        {/* Table Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Product List</h2>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* Table Head */}
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-3 text-left">Product</th>
                <th className="text-left">Category</th>
                <th className="text-left">Price</th>
                <th className="text-left">Stock</th>
                <th className="text-left">Status</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Wireless Headphones</td>

                <td>Electronics</td>

                <td>$120</td>

                <td>35</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>
                </td>

                <td>
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>

                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Gaming Mouse</td>

                <td>Accessories</td>

                <td>$75</td>

                <td>12</td>

                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                    Low Stock
                  </span>
                </td>

                <td>
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>

                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Mechanical Keyboard</td>

                <td>Electronics</td>

                <td>$210</td>

                <td>0</td>

                <td>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                    Out of Stock
                  </span>
                </td>

                <td>
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>

                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition">
                <td className="py-4 font-medium">Smart Watch</td>

                <td>Wearables</td>

                <td>$180</td>

                <td>24</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>
                </td>

                <td>
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>

                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
