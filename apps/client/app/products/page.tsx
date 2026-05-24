import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <ProductCard id="1" title="Nike Shoes" price={120} image="/shoe.avif" />
        <ProductCard
          id="2"
          title="Apple Watch"
          price={399}
          image="/watch.avif"
        />
        <ProductCard
          id="3"
          title="Headphones"
          price={89}
          image="/headphone.avif"
        />
        <ProductCard id="4" title="Parfum" price={90} image="/parfum.avif" />
        <ProductCard
          id="5"
          title="Sunglasses"
          price={20}
          image="/sunglass.avif"
        />
        <ProductCard
          id="6"
          title="Water Bottle"
          price={30}
          image="/water.avif"
        />
      </div>
    </main>
  );
}
