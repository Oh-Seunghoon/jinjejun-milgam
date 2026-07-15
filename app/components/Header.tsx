export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.95)",
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
            color: "#f57c00",
            margin: 0,
          }}
        >
          🍊 진제준 밀감농장
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <a href="#home">홈</a>
          <a href="#about">농장소개</a>
          <a href="#products">노지감귤 10kg</a>
          <a href="#contact">문의하기</a>
        </div>
      </nav>
    </header>
  );
}