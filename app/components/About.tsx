import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* 사진 */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="진제준 밀감농장"
            width={600}
            height={450}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            }}
          />
        </div>

        {/* 소개 */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <h2
            style={{
              color: "#f57c00",
              fontSize: "46px",
              marginBottom: "20px",
            }}
          >
            🍊 진제준 밀감농장
          </h2>

          <h3
            style={{
              fontSize: "30px",
              color: "#333",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            서귀포의 햇살과 바람이 키운
            <br />
            자연 그대로의 노지감귤
          </h3>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "2",
              color: "#555",
              marginBottom: "35px",
            }}
          >
            진제준 밀감농장은
            <strong style={{ color: "#f57c00" }}> 서귀포시 토평동</strong>에서
            노지감귤을 정성껏 재배하고 있습니다.
            <br />
            자연이 키운 감귤을 산지에서 직접 보내드립니다.
          </p>

          <div
            style={{
              background: "#fff8ef",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                marginBottom: "20px",
                color: "#f57c00",
                fontSize: "28px",
              }}
            >
              🍊 농장 정보
            </h4>

            <p
              style={{
                margin: 0,
                fontSize: "19px",
                lineHeight: "2",
                color: "#444",
              }}
            >
              📍 위치 : 서귀포시 토평동
              <br />
              🌿 재배 : 노지감귤
              <br />
              🚚 배송 : 전국 무료배송
              <br />
              📞 문의 : 010-9840-3855
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}