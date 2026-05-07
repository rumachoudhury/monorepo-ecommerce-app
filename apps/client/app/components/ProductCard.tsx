//

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  return (
    <Link href={`/products/${id}`}>
      <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white">
        {/* IMAGE */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold group-hover:text-cyan-700 transition">
            {title}
          </h2>

          <p className="text-gray-500 text-sm">Premium quality product</p>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-900">${price}</p>

            <button className="text-sm bg-cyan-800 text-white px-3 py-1 rounded-full hover:bg-cyan-700 transition">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
