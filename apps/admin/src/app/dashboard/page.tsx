// export default function DashBoard() {
//   return (
//     <div className="flex  text-white">
//       {/* MAIN CONTENT */}

//       <main className="flex-1 p-6 md:p-10">
//         {/* HEADER */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>

//           <p className="text-gray-400 mt-2">
//             Welcome back! Manage your system from here.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//           {/* USERS */}
//           <div className=" border border-white/10 rounded-2xl p-6 hover:bg-[#1a2235] transition">
//             <h3 className="text-gray-400 text-sm mb-2">Users</h3>

//             <p className="text-3xl font-bold">120</p>
//           </div>

//           {/* ORDERS */}
//           <div className=" border border-white/10 rounded-2xl p-6 hover:bg-[#1a2235] transition">
//             <h3 className="text-gray-400 text-sm mb-2">Orders</h3>

//             <p className="text-3xl font-bold">45</p>
//           </div>

//           {/* REVENUE */}
//           <div className=" border border-white/10 rounded-2xl p-6 hover:bg-[#1a2235] transition">
//             <h3 className="text-gray-400 text-sm mb-2">Revenue</h3>

//             <p className="text-3xl font-bold">$3,240</p>
//           </div>

//           {/* PRODUCTS */}
//           <div className=" border border-white/10 rounded-2xl p-6 hover:bg-[#1a2235] transition">
//             <h3 className="text-gray-400 text-sm mb-2">Products</h3>

//             <p className="text-3xl font-bold">78</p>
//           </div>
//         </div>

//         {/* EXTRA SECTION */}
//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* RECENT ACTIVITY */}
//           <div className="lg:col-span-2  border border-white/10 rounded-2xl p-6">
//             <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

//             <div className="space-y-4 text-sm text-gray-300">
//               <div className="flex items-center justify-between">
//                 <span>New user registered</span>
//                 <span className="text-gray-500">2m ago</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span>Order #1234 placed</span>
//                 <span className="text-gray-500">10m ago</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span>Payment received</span>
//                 <span className="text-gray-500">1h ago</span>
//               </div>
//             </div>
//           </div>

//           {/* SYSTEM STATUS */}
//           <div className="border border-white/10 rounded-2xl p-6">
//             <h2 className="text-xl font-semibold mb-4">System Status</h2>

//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-green-400" />

//               <p className="text-green-400 text-sm">All systems operational</p>
//             </div>

//             <p className="text-gray-400 text-sm mt-4">
//               No issues detected in the last 24 hours.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// ------------------
import DashBoard from "@/components/Dashboard";

export default function Page() {
  return <DashBoard />;
}
