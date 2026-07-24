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
      {/* 어두운 오버레이 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* 내용 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          padding: "20px",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            letterSpacing: "3px",
            marginBottom: "15px",
            color: "#ffe082",
            fontWeight: "bold",
          }}
        >
          JEJU PREMIUM MANDARINS
        </p>

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "25px",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          🍊 진제준 밀감농장
        </h1>

        <h2
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            fontWeight: 600,
            lineHeight: "1.5",
          }}
        >
          제주의 햇살과 바람이 키운
          <br />
          신선한 노지감귤
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "40px",
            color: "#f5f5f5",
          }}
        >
          제주 서귀포에서 정성껏 재배한
          <br />
          노지감귤을 산지에서 직접 보내드립니다.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginBottom: "45px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <span>🍊 산지직송</span>
          <span>🚚 전국 무료배송</span>
          <span>🌿 자연 그대로 재배</span>
        </div>

        <a
          href="tel:01098403855"
          style={{
            display: "inline-block",
            background: "#f57c00",
            color: "#fff",
            padding: "18px 50px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "22px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          }}
        >
          📞 지금 전화 문의하기
        </a>
      </div>
    </section>
  );
}