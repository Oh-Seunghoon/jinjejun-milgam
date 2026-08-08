export default function Footer() {
  return (
    <footer
      style={{
        background: "#2e7d32",
        color: "#ffffff",
        padding: "60px 20px 30px",
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
            margin: "0 0 20px",
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          🍊 진제준 밀감농장
        </h2>

        {/* 브랜드 메시지 */}
        <p
          style={{
            margin: "0 0 30px",
            fontSize: "clamp(18px, 2.5vw, 23px)",
            lineHeight: 1.8,
            fontWeight: 500,
          }}
        >
          서귀포의 정성을 담아
          <br />
          신선한 노지감귤을 보내드립니다.
        </p>

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