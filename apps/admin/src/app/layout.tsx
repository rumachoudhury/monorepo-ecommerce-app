import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-arp="">
      <body className="" cz-shortcut-listen="true">
        <Providers>{children}</Providers>
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
