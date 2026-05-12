"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Login 🔐</h1>

          <p className="text-gray-400 mt-2">Sign in to access your dashboard</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Error */}
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-medium py-3 rounded-xl"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </main>
  );
}
