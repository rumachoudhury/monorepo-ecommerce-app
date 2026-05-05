// import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";

// export default async function Dashboard() {
//   const session = await auth();

//   if (!session) {
//     redirect("/login");
//   }

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, {session.user?.name}</p>
//     </div>
//   );
// }
export default function DashboardPage() {
  return <h1>Dashboard Working</h1>;
}
