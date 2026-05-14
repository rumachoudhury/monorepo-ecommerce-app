import React from "react";
import DashboardPage from "./dashboard/page";
import Sidebar from "@/components/Sidebar";

export default function AdminHome() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <DashboardPage />
      </div>
    </div>
  );
}
