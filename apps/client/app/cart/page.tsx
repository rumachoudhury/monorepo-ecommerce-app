"use client";

import { useCartStore } from "@/app/store/cartStore";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-20 flex flex-col items-center mt-24 justify-center text-center shadow-lg shadow-fuchsia-300 mx-auto ">
      <h1 className=" flex gap-4 not-only:text-3xl font-bold mb-6">
        Cart{" "}
        <span className="p-2 text-red-400">
          <ShoppingCart />
        </span>
      </h1>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4 gap-4"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
          <button>
            <Link
              href="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Go to Checkout
            </Link>
          </button>
        </div>
      ))}

      <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>
    </div>
  );
}
