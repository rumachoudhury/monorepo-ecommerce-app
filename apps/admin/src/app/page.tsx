import Sidebar from "@/components/Sidebar";
import DashBoard from "@/components/Dashboard";

export default function AdminHome() {
  return (
    <div className="flex">
      <Sidebar />

      <DashBoard />
    </div>
  );
}
