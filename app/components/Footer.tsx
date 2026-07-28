export default function Footer() {
  return (
    <footer
      style={{
        background: "#2e7d32",
        color: "#fff",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h3
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        🍊 진제준 밀감농장
      </h3>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "25px",
        }}
      >
        서귀포의 정성을 담아
        <br />
        신선한 노지감귤을 보내드립니다.
      </p>

      <p
        style={{
          fontSize: "15px",
          opacity: 0.9,
        }}
      >
        © 2025 진제준 밀감농장
        <br />
        All Rights Reserved.
      </p>
    </footer>
  );
}