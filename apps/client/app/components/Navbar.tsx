import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: 15,
        display: "flex",
        justifyContent: "space-between",
        background: "#111",
        color: "white",
      }}
    >
      <Link href="/" style={{ color: "white" }}>
        Home
      </Link>

      <div>
        <a href="/products" style={{ color: "white", marginRight: 10 }}>
          Products
        </a>
        <a href="/cart" style={{ color: "white" }}>
          Cart
        </a>
      </div>
    </nav>
  );
}
