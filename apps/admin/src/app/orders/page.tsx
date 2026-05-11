export default function OrdersPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-boldtext-gray-800">Orders</h1>
          <p className="text-gray-500 mt-1">
            All customer orders will appear here.
          </p>
        </div>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition">
          {" "}
          + Create
        </button>
      </div>

      {/* Orders starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">1,248</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">pending</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-500">32</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Delivered</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-600">1,120</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Cancelled</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">18</h2>
        </div>
      </div>

      {/* Orders Table  */}
      <div className="bg-white rounded-2xl shadow p-6">
        {/* Table header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Recent Orders</h1>
          <input
            type="text"
            placeholder="Search Orders"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* table */}
        <div>
          <table>
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-3 text-left">Order ID</th>
                <th className="text-left">Customer</th>
                <th className="text-left">Product</th>
                <th className="text-left">Status</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Date</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {/* 1 */}
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4">#1024</td>
                <td>John Doe</td>
                <td>Wirless Headphones</td>

                <td>
                  <span className="bg-green-100 text-gray-700 px-3 py-y rounded-b-full text-xs">
                    Delivered
                  </span>
                </td>
                <td className="">$120</td>
                <td className="">May 10, 2026</td>
              </tr>
              {/* 2 */}
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4">#1025</td>
                <td>Jasmin Ara</td>
                <td>Gaming Mouse</td>

                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-y rounded-b-full text-xs">
                    pending
                  </span>
                </td>
                <td className="">$75</td>
                <td className="">May 9, 2026</td>
              </tr>
              {/* 3 */}
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-4">#1026</td>
                <td>Michael Lee</td>
                <td>Mechanical Keyboard</td>

                <td>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    Shipped
                  </span>
                </td>

                <td>$210</td>
                <td>May 8, 2026</td>
              </tr>

              {/* 4 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="py-4">#1027</td>
                <td>Emily Johnson</td>
                <td>Smart Watch</td>

                <td>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                    Cancelled
                  </span>
                </td>

                <td>$180</td>
                <td>May 7, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
