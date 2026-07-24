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
          fontWeight: "bold",
        }}
      >
        🍊 제주 노지감귤 10kg
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "60px",
          lineHeight: "1.8",
        }}
      >
        제주 서귀포에서 정성껏 재배한
        <br />
        신선한 노지감귤을 산지에서 직접 보내드립니다.
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
          src="/images/hero.jpg"
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
            🍊 제주 노지감귤 (10kg)
          </h3>

          <p>✅ 제주 서귀포 산지직송</p>
          <p>✅ 자연 그대로 자란 노지감귤</p>
          <p>✅ 수확 후 당일 선별</p>
          <p>✅ 신선하게 포장하여 발송</p>
          <p>✅ 전국 무료배송</p>

          <div
            style={{
              background: "#fff3e0",
              color: "#e65100",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
              margin: "30px 0",
            }}
          >
            🍊 제철 감귤의 신선함을 그대로 전해드립니다.
          </div>

          <div
            style={{
              fontSize: "42px",
              color: "#f57c00",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            45,000원
          </div>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              marginBottom: "35px",
            }}
          >
            ※ 수확 시기와 작황에 따라 가격이 변동될 수 있습니다.
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
              marginBottom: "20px",
            }}
          >
            📞 전화 문의하기
          </a>

          <br />

          <a
            href="https://open.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#FEE500",
              color: "#000",
              padding: "18px 45px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            💬 카카오톡 문의
          </a>
        </div>
      </div>
    </section>
  );
}