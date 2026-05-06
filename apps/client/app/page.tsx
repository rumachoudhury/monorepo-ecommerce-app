// export default function Home() {
//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Client App</h1>
//       <p>This is my public website</p>
//     </div>
//   );
// }
// -----------------
export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🛒 Client Store</h1>
      <p>Welcome to your e-commerce frontend</p>

      <section style={{ marginTop: 30 }}>
        <h2>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <ProductCard title="Nike Shoes" price="$120" />
          <ProductCard title="Apple Watch" price="$399" />
          <ProductCard title="Headphones" price="$89" />
        </div>
      </section>
    </main>
  );
}

function ProductCard({ title, price }: { title: string; price: string }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
