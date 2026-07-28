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
        {/* 농장 사진 */}
        <div
          style={{
            flex: "1 1 450px",
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
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* 소개글 */}
        <div
          style={{
            flex: "1 1 450px",
          }}
        >
          <h2
            style={{
              fontSize: "46px",
              color: "#f57c00",
              marginBottom: "30px",
            }}
          >
            🍊 진제준 밀감농장
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "2",
              color: "#555",
              marginBottom: "25px",
            }}
          >
            서귀포의 자연 속에서
            <br />
            정성껏 노지감귤을 키우고 있습니다.
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "2",
              color: "#666",
              marginBottom: "25px",
            }}
          >
            자연의 햇살과 바람을 그대로 담아
            건강하게 재배하고,
            <br />
            수확한 감귤은 정성껏 선별하여
            산지에서 직접 보내드립니다.
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "2",
              color: "#666",
              fontWeight: "bold",
            }}
          >
            언제나 믿고 드실 수 있는 감귤을
            <br />
            보내드리겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}