import Sidebar from "@/components/Sidebar";
import DashBoard from "./dashboard/page";

export default function AdminHome() {
  return (
    <div className="flex  bg-amber-300">
      <Sidebar />

      <DashBoard />
    </div>
  );
}
