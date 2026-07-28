export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          color: "#f57c00",
          marginBottom: "20px",
        }}
      >
        📞 문의하기
      </h2>

      <p
        style={{
          fontSize: "30px",
          color: "#f57c00",
          fontWeight: "bold",
          marginBottom: "35px",
        }}
      >
        🍊 진제준 밀감농장
      </p>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          lineHeight: "2",
          marginBottom: "40px",
        }}
      >
        📍 서귀포시 토평동
        <br />
        📞 010-9840-3855
        <br />
        문의는 언제든지 편하게 연락 주세요.
      </p>

      <a
        href="tel:01098403855"
        style={{
          display: "inline-block",
          background: "#f57c00",
          color: "#fff",
          padding: "18px 55px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "22px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        📞 지금 전화하기
      </a>
    </section>
  );
}