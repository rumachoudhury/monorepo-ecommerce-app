"use client";

import { SearchIcon, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(handleSearch);
    setSearch(""); //clear input
  };
  return (
    <div className="w-full h-20 bg-gray-900 text-white flex items-center justify-center">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src="/woliul-hasan-BfPkm4ptlsI-unsplash.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex items-center w-96 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2">
        <SearchIcon
          onClick={handleSearch}
          className="text-gray-400 w-4 h-4 mr-2"
        />

        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          type="text"
          value={search}
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-white"
        />

        <User className="w-5 h-5 text-gray-300" />
      </div>
    </div>
  );
}
