import Image from "next/image";

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "100px 20px",
        background: "#fff8ef",
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
        🍊 제주 노지감귤 10kg
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "60px",
        }}
      >
        정직한 농부의 마음으로,
        <br />
        가장 맛있는 제주 노지감귤을 전해드립니다.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src="/images/home.jpg"
          alt="제주 노지감귤"
          width={700}
          height={450}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "34px",
              marginBottom: "25px",
            }}
          >
            🍊 제주 노지감귤 10kg
          </h3>

          <p>✔ 제주 서귀포 산지직송</p>
          <p>✔ 자연에서 자란 노지감귤</p>
          <p>✔ 수확 후 당일 선별</p>
          <p>✔ 신선하게 포장하여 발송</p>

          <div
            style={{
              color: "#ff9900",
              fontSize: "26px",
              margin: "25px 0",
            }}
          >
            ★★★★★
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            가격은 시기에 따라 달라질 수 있으므로
            <br />
            전화로 문의해 주세요.
          </p>

          <a
            href="tel:01098403855"
            style={{
              display: "inline-block",
              background: "#f57c00",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            📞 전화 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}