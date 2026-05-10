"use client";
import React from "react";
import Link from "next/link";

import {
  // LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  BarChart3,
} from "lucide-react";

function Sidebar() {
  return (
    <aside>
      <div className="w-64 fixed left-0 top-0 h-screen bg-amber-600 p-6 border-r shadow-md">
        <div className="text-3xl font-semibold">
          <Link href="/dashboard" className=" text-white no-underline  block">
            Go to Dashboard
          </Link>
        </div>

        <ul className="list-none space-y-4">
          <li>
            <Link
              href="/orders"
              className="flex items-center gap-2 no-underline text-white"
            >
              <ShoppingCart size={18} />
              Orders
            </Link>
          </li>

          <li>
            <Link
              href="/customers"
              className="flex items-center gap-2 no-underline text-white"
            >
              <Users size={18} />
              Customers
            </Link>
          </li>

          <li>
            <Link
              href="/analytics"
              className="flex items-center gap-2 no-underline text-white"
            >
              <BarChart3 size={18} />
              Analytics
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className="flex items-center gap-2 no-underline text-white"
            >
              <Settings size={18} />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
