// import "./globals.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen  bg-[#0f172a] text-white">{children}</body>
    </html>
  );
}
