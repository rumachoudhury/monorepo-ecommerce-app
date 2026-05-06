export default function ProductCard({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
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
