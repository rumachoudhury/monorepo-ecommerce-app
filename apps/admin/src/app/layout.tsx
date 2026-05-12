import "./globals.css";
import Providers from "./providers";
// import Sidebar from "../components/Sidebar";
// import AnimatedHUDLogin from "@/components/AnimatedHUDLogin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-arp="">
      <body className="" cz-shortcut-listen="true">
        {/* <AnimatedHUDLogin> */}
        <Providers>
          <div className="flex min-h-screen">
            {/* <Sidebar /> */}

            {/* Main Content RIGHT */}
            <main className="flex-1 bg-gray-100">{children}</main>
          </div>
        </Providers>
        {/* </AnimatedHUDLogin> */}
      </body>
    </html>
  );
}
