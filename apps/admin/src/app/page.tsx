"use client";

import React from "react";
// import Link from "next/link";
import DashboardPage from "./dashboard/page";
import Sidebar from "@/components/Sidebar";

export default function AdminHome() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}

      <DashboardPage />
    </div>
  );
}
