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
    </main>
  );
}
