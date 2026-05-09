"use client";
import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 fixed left-0 top-0 h-screen bg-amber-600 p-6">
      <div className="text-3xl font-semibold">
        <Link href="/dashboard" className=" text-white no-underline  block">
          Go to Dashboard
        </Link>
      </div>

      <ul className="list-none">
        <li>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>

        <li>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>

        <li>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>

        <li>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>

        <li>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <HomeIcon size={18} className="inline-block w-6 h-6" />
            home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
