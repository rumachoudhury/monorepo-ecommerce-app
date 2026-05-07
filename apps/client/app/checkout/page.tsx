"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cartStore";

export default function CheckoutPage() {
  const { items } = useCartStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Cart is empty");
      return;
    }

    console.log("ORDER DATA:", {
      user: form,
      items,
      total,
    });

    alert("Order placed successfully");
  };

  return (
    <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-10">
      {/* LEFT - FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="address"
          placeholder="Address"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>

      {/* RIGHT - SUMMARY */}
      <div className="border rounded p-5">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
