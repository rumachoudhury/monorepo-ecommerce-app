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
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Login 🔐</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button onClick={handleLogin} style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    background: "#111827",
    padding: 30,
    borderRadius: 12,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    border: "1px solid #374151",
    background: "#1f2937",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: 10,
    background: "#3b82f6",
    border: "none",
    borderRadius: 6,
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "#f87171",
    marginBottom: 10,
  },
};
