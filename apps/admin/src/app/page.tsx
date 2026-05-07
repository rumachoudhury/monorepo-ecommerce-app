export default function AdminHome() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Dashboard Root</h1>
        <p style={styles.subtitle}>
          Welcome back! Manage your system from here.
        </p>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h3>Users</h3>
            <p>120</p>
          </div>

          <div style={styles.box}>
            <h3>Orders</h3>
            <p>45</p>
          </div>

          <div style={styles.box}>
            <h3>Revenue</h3>
            <p>$3,240</p>
          </div>

          <div style={styles.box}>
            <h3>Products</h3>
            <p>78</p>
          </div>
        </div>
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
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 700,
    background: "#111827",
    padding: 30,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 15,
  },
  box: {
    background: "#1f2937",
    padding: 15,
    borderRadius: 10,
  },
};
