export default function Contact() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#f57c00",
          marginBottom: "30px",
        }}
      >
        📞 문의하기
      </h2>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "2",
          color: "#555",
        }}
      >
        📱 010-9840-3855
        <br />
        📍 제주특별자치도 서귀포시
      </p>

      <a
        href="tel:01098403855"
        style={{
          display: "inline-block",
          marginTop: "40px",
          background: "#f57c00",
          color: "#fff",
          padding: "16px 40px",
          borderRadius: "40px",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        📞 전화 문의하기
      </a>
    </section>
  );
}