import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 20,
        }}
      >
        <ProductCard title="Nike Shoes" price="$150" />
        <ProductCard title="Apple Watch" price="$399" />
        <ProductCard title="Headphones" price="$89" />
      </div>
    </main>
  );
}
