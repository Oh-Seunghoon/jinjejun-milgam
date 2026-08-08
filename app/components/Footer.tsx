export default function Footer() {
  return (
    <footer
      style={{
        background: "#2e7d32",
        color: "#ffffff",
        padding: "55px 20px 30px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* 농장 이름 */}
        <h2
          style={{
            margin: "0 0 30px",
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          🍊 진제준 밀감농장
        </h2>

        {/* 구분선 */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.3)",
            marginBottom: "25px",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            opacity: 0.75,
          }}
        >
          © 진제준 밀감농장. All rights reserved.
        </p>
      </div>
    </footer>
  );
}