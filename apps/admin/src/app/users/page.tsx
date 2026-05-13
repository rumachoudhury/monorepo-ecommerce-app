// export default function UsersPage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gray-100">
//       {/* Animated Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />

//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl animate-pulse" />
//       </div>

//       {/* Main Content */}
//       <main className="relative z-10 p-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">Users</h1>

//             <p className="text-gray-500 mt-2">
//               Manage all registered users and permissions
//             </p>
//           </div>

//           <button className="bg-purple-600 hover:bg-purple-700 transition-all hover:scale-[1.03] active:scale-95 text-white px-5 py-3 rounded-xl">
//             + Add User
//           </button>
//         </div>

//         {/* User Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
//           <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl hover:-translate-y-1">
//             <p className="text-gray-500">Total Users</p>

//             <h2 className="text-3xl font-bold mt-2">1,248</h2>

//             <p className="text-green-600 text-sm mt-2">+12% this month</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl hover:-translate-y-1">
//             <p className="text-gray-500">Active Users</p>

//             <h2 className="text-3xl font-bold mt-2 text-green-600">1,120</h2>

//             <p className="text-gray-500 text-sm mt-2">Currently active</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl hover:-translate-y-1">
//             <p className="text-gray-500">Admins</p>

//             <h2 className="text-3xl font-bold mt-2 text-purple-600">12</h2>

//             <p className="text-gray-500 text-sm mt-2">System administrators</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl hover:-translate-y-1">
//             <p className="text-gray-500">Blocked Users</p>

//             <h2 className="text-3xl font-bold mt-2 text-red-500">18</h2>

//             <p className="text-gray-500 text-sm mt-2">Restricted accounts</p>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl">
//           {/* Table Header */}
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-bold text-gray-800">User List</h2>

//             <input
//               type="text"
//               placeholder="Search users..."
//               className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               {/* Table Head */}
//               <thead>
//                 <tr className="border-b text-gray-500">
//                   <th className="py-3 text-left">Name</th>

//                   <th className="text-left">Email</th>

//                   <th className="text-left">Role</th>

//                   <th className="text-left">Status</th>

//                   <th className="text-left">Joined</th>

//                   <th className="text-left">Actions</th>
//                 </tr>
//               </thead>

//               {/* Table Body */}
//               <tbody className="text-gray-700">
//                 <tr className="border-b transition hover:bg-gray-50">
//                   <td className="py-4 font-medium">John Doe</td>

//                   <td>john@example.com</td>

//                   <td>
//                     <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
//                       Admin
//                     </span>
//                   </td>

//                   <td>
//                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
//                       Active
//                     </span>
//                   </td>

//                   <td>May 12, 2026</td>

//                   <td>
//                     <button className="text-blue-600 hover:underline mr-3">
//                       Edit
//                     </button>

//                     <button className="text-red-500 hover:underline">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>

//                 <tr className="border-b transition hover:bg-gray-50">
//                   <td className="py-4 font-medium">Sarah Smith</td>

//                   <td>sarah@example.com</td>

//                   <td>
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
//                       User
//                     </span>
//                   </td>

//                   <td>
//                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
//                       Active
//                     </span>
//                   </td>

//                   <td>May 10, 2026</td>

//                   <td>
//                     <button className="text-blue-600 hover:underline mr-3">
//                       Edit
//                     </button>

//                     <button className="text-red-500 hover:underline">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>

//                 <tr className="border-b transition hover:bg-gray-50">
//                   <td className="py-4 font-medium">Michael Lee</td>

//                   <td>michael@example.com</td>

//                   <td>
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
//                       User
//                     </span>
//                   </td>

//                   <td>
//                     <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
//                       Pending
//                     </span>
//                   </td>

//                   <td>May 8, 2026</td>

//                   <td>
//                     <button className="text-blue-600 hover:underline mr-3">
//                       Edit
//                     </button>

//                     <button className="text-red-500 hover:underline">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>

//                 <tr className="transition hover:bg-gray-50">
//                   <td className="py-4 font-medium">Emma Watson</td>

//                   <td>emma@example.com</td>

//                   <td>
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
//                       User
//                     </span>
//                   </td>

//                   <td>
//                     <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
//                       Blocked
//                     </span>
//                   </td>

//                   <td>May 5, 2026</td>

//                   <td>
//                     <button className="text-blue-600 hover:underline mr-3">
//                       Edit
//                     </button>

//                     <button className="text-red-500 hover:underline">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// -----------------
import React from "react";

function UsersPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Animated Bacground Glow */}
      <div className="absolute insert-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-300/20 animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-300/20 animate-pulse" />
      </div>

      {/* Main content */}
      <main className="relative z-10 p-10">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Users</h1>

            <p className="text-gray-500 mt-2">
              Mannage all registered users and permissions
            </p>
          </div>

          <button> + Add User</button>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 transition hover:shadow-xl hover:translate-1">
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-3xl font-bold mt-2">1,248</h2>
            <p className="text-gray-600 text-sm mt-2">+12% this month</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 transition hover:shadow-xl hover:translate-1">
            <p className="text-gray-500">Active Users</p>
            <h2 className="text-3xl font-bold mt-2 text-gray-600">1,120</h2>
            <p className="text-gray-500">Currently active</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
