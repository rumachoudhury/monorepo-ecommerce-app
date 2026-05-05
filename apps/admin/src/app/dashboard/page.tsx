export default function DashboardPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Dashboard Working</h1>
        <p style={styles.subtitle}>
          Welcome! Your admin dashboard is successfully running.
        </p>

        <div style={styles.stats}>
          <div style={styles.box}>
            <h2>Users</h2>
            <p>120</p>
          </div>

          <div style={styles.box}>
            <h2>Orders</h2>
            <p>45</p>
          </div>

          <div style={styles.box}>
            <h2>Revenue</h2>
            <p>$3,240</p>
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
    padding: "20px",
  },
  card: {
    background: "#111827",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: "20px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  box: {
    flex: 1,
    background: "#1f2937",
    padding: "15px",
    borderRadius: "8px",
  },
};
