import React from "react";
import Image from "next/image";
import { ChevronFirst } from "lucide-react";

function Sidebar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <button>
            <ChevronFirst />
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
