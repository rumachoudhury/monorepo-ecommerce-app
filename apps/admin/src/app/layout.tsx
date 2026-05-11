import "./globals.css";
import Providers from "./providers";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-arp="">
      <body className="" cz-shortcut-listen="true">
        {/* <Providers>
          {children}
        </Providers> */}

        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar LEFT */}
            <Sidebar />

            {/* Main Content RIGHT */}
            <main className="flex-1 bg-gray-100">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

// import "./globals.css";

// export const metadata = {
//   title: "Admin Dashboard",
//   description: "Monorepo Ecommerce Admin Panel",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen">{children}</body>
//     </html>
//   );
// }
