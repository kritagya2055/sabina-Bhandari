export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* BRAND */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "700",
          letterSpacing: "3px",
          marginBottom: "20px",
        }}
      >
        GROWTH.
      </h1>

      {/* SUBTITLE */}
      <p
        style={{
          fontSize: "18px",
          color: "#B3B3B3",
          maxWidth: "650px",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        Predictable systems for service businesses. Build a clear strategy that
        actually brings clients — not confusion.
      </p>

      {/* CTA */}
      <div
        style={{
          padding: "14px 30px",
          border: "1px solid #2A2A2A",
          backgroundColor: "transparent",
          color: "#FFFFFF",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Reserve My Strategy Call
      </div>

      {/* SMALL TEXT */}
      <p
        style={{
          marginTop: "18px",
          fontSize: "12px",
          color: "#7A7A7A",
        }}
      >
        Only 5 spots available this week
      </p>
    </main>
  );
}
