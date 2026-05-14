"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function StripePage() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    alert("Stripe loaded successfully!");

    console.log(stripe);
  };

  return (
    <div className="p-10">
      <button
        onClick={handleCheckout}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Test Stripe
      </button>
    </div>
  );
}
