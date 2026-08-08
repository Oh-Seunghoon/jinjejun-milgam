export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#ffffff",
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/farm.jpg"
          alt="진제준 밀감농장"
          style={{
            display: "block",
            width: "100%",
            height: "520px",
            objectFit: "cover",
            borderRadius: "24px",
            marginBottom: "80px",
          }}
        />

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 35px",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.35,
              fontWeight: 700,
              color: "#222222",
              letterSpacing: "-1.5px",
            }}
          >
            좋은 감귤은
            <br />
            좋은 땅에서 시작됩니다.
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(18px, 2.2vw, 24px)",
              lineHeight: 1.9,
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "-0.3px",
            }}
          >
            서귀포의 햇살과 바람,
            <br />
            그리고 정성을 담아
            <br />
            노지감귤을 키우고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}