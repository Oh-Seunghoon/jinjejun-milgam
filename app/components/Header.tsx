export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#f57c00",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          🍊 진제준 밀감농장
        </h2>

        <div
          style={{
            display: "flex",
            gap: "35px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          <a
            href="#home"
            style={{ textDecoration: "none", color: "#333" }}
          >
            홈
          </a>

          <a
            href="#about"
            style={{ textDecoration: "none", color: "#333" }}
          >
            농장소개
          </a>

          <a
            href="#products"
            style={{ textDecoration: "none", color: "#333" }}
          >
            노지감귤 10kg
          </a>

          <a
            href="#contact"
            style={{ textDecoration: "none", color: "#333" }}
          >
            문의하기
          </a>
        </div>
      </nav>
    </header>
  );
}