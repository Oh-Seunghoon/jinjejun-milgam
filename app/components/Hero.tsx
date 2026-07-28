export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          padding: "20px",
          maxWidth: "700px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 64px)",
            fontWeight: 700,
            marginBottom: "20px",
            color: "#f57c00",
            lineHeight: 1.2,
          }}
        >
          🍊 진제준 밀감농장
        </h1>

        <p
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            lineHeight: 1.6,
            marginBottom: "60px",
            color: "#ffffff",
            fontWeight: 400,
          }}
        >
          서귀포의 햇살과 바람이 키운
          <br />
          노지감귤
        </p>

        <a
          href="tel:01098403855"
          style={{
            display: "inline-block",
            background: "#f57c00",
            color: "#fff",
            padding: "18px 48px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            transition: "0.3s",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >
          주문 및 문의
        </a>
      </div>
    </section>
  );
}