// "use client";

// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   Home,
//   ShoppingCart,
//   Users,
//   Settings,
//   LogOut,
// } from "lucide-react";

// export default function Sidebar() {
//   const [expanded, setExpanded] = useState(true);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: Home },
//     { name: "Orders", icon: ShoppingCart },
//     { name: "Users", icon: Users },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <>
//       {/* MOBILE TOP BAR */}
//       <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between p-4 bg-[#0f172a] border-b border-white/10">
//         <h1 className="text-white font-semibold">Admin</h1>

//         <button onClick={() => setMobileOpen(true)}>
//           <Menu className="text-white" />
//         </button>
//       </div>

//       {/* OVERLAY */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 md:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* SIDEBAR (IMPORTANT CHANGE HERE) */}
//       <aside
//         className={`
//           bg-[#0F172A] border-r border-white/10
//           h-screen
//           flex flex-col
//           transition-all duration-300

//           ${expanded ? "w-64" : "w-20"}

//           /* mobile behavior */
//           fixed md:relative top-0 left-0 z-50
//           ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//         `}
//       >
//         {/* TOP */}
//         <div className="flex items-center justify-between p-4 border-b border-white/10">
//           <span className="text-white font-bold">
//             {expanded ? "Admin Panel" : "A"}
//           </span>

//           <div className="flex gap-2">
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="hidden md:block text-white p-2 hover:bg-white/10 rounded-lg"
//             >
//               <Menu size={20} />
//             </button>

//             <button
//               onClick={() => setMobileOpen(false)}
//               className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* MENU */}
//         <nav className="flex-1 px-3 py-4 space-y-2">
//           {menuItems.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <button
//                 key={i}
//                 className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition"
//               >
//                 <Icon size={20} className="text-white" />

//                 <span
//                   className={`
//                     text-white text-sm whitespace-nowrap transition-all
//                     ${expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
//                   `}
//                 >
//                   {item.name}
//                 </span>
//               </button>
//             );
//           })}
//         </nav>

//         {/* BOTTOM */}
//         <div className="p-3 border-t border-white/10">
//           <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-500/20 transition">
//             <LogOut size={20} className="text-red-400" />

//             <span
//               className={`text-red-400 text-sm ${
//                 expanded ? "block" : "hidden"
//               }`}
//             >
//               Logout
//             </span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";
import Link from "next/link";
import React from "react";

import { HomeIcon } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="">
        {/* <h1 className="text-2xl">Admin DashBoard</h1> */}
        <Link href="/dashboard" className="text-2x text-white underline">
          Go to Dashboard
        </Link>
      </div>

      <ul>
        <li>
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
