export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#ffffff",
        padding: "110px 20px 120px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: "0 0 25px",
            color: "#f57c00",
            fontSize: "clamp(34px, 5vw, 52px)",
            lineHeight: 1.4,
            fontWeight: 700,
            letterSpacing: "-1.5px",
          }}
        >
          궁금한 점이 있으시면
          <br />
          편하게 연락주세요.
        </h2>

        <p
          style={{
            margin: "0 0 45px",
            color: "#666666",
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.8,
          }}
        >
          진제준 밀감농장이 정성껏 안내해 드리겠습니다.
        </p>

        <a
          href="tel:01098403855"
          style={{
            display: "inline-block",
            background: "#f57c00",
            color: "#ffffff",
            padding: "18px 55px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: 700,
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            marginBottom: "45px",
          }}
        >
          📞 전화 주문 및 문의
        </a>

        <div
          style={{
            paddingTop: "40px",
            borderTop: "1px solid #eeeeee",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#333333",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            📞 010-9840-3855
          </p>

          <p
            style={{
              margin: 0,
              color: "#777777",
              fontSize: "17px",
            }}
          >
            서귀포시 토평동
          </p>
        </div>

        <div
          style={{
            marginTop: "75px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#555555",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            감사합니다.
          </p>

          <p
            style={{
              margin: 0,
              color: "#f57c00",
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: 1.8,
            }}
          >
            앞으로도 좋은 감귤로 보답하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}