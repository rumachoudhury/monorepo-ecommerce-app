// import React from "react";
// import Image from "next/image";
// import { ChevronFirst } from "lucide-react";

// function Sidebar() {
//   return (
//     <aside className="h-screen">
//       <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <Image src="/logo.png" alt="Logo" width={40} height={40} />

//           <button>
//             <ChevronFirst />
//           </button>
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;

// ----------------------
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronFirst,
  Home,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Orders", icon: ShoppingCart },
    { name: "Users", icon: Users },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`h-screen border-r bg-white shadow-sm transition-all duration-300 ${expanded ? "w-64" : "w-20"}`}
    >
      <nav className="h-full flex flex-col">
        {/* Top */}
        <div className="p-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />

          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <ChevronFirst
              className={`transition-transform ${!expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 px-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              >
                <Icon size={20} />
                {expanded && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="p-3 border-t">
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
            <LogOut size={20} />
            {expanded && <span className="text-sm font-medium">Logout</span>}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
