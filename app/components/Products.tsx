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
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            color: "#f57c00",
            marginBottom: "15px",
          }}
        >
          🍊 서귀포 노지감귤 10kg
        </h2>

        <div
          style={{
            fontSize: "54px",
            fontWeight: "bold",
            color: "#e65100",
            marginBottom: "40px",
          }}
        >
          35,000원
        </div>

        <Image
          src="/images/hero.jpg"
          alt="서귀포 노지감귤"
          width={700}
          height={450}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            borderRadius: "24px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            marginBottom: "45px",
          }}
        />

        <div
          style={{
            fontSize: "24px",
            lineHeight: "2",
            color: "#444",
            marginBottom: "40px",
          }}
        >
          <p>✅ 서귀포 산지직송</p>
          <p>✅ 자연 그대로 재배</p>
          <p>✅ 수확 후 정성껏 선별</p>
          <p>✅ 전국 무료배송</p>
        </div>

        <a
          href="tel:01098403855"
          style={{
            display: "inline-block",
            background: "#f57c00",
            color: "#fff",
            padding: "18px 60px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "24px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          📞 전화 주문하기
        </a>

        <div
          style={{
            marginTop: "50px",
            padding: "30px",
            background: "#ffffff",
            border: "2px solid #ffe0b2",
            borderRadius: "20px",
            textAlign: "left",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              color: "#f57c00",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            🍊 상품정보
          </h3>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "2",
              color: "#555",
              margin: 0,
            }}
          >
            <strong>원산지</strong> : 서귀포시 토평동
            <br />
            <strong>상품명</strong> : 서귀포 노지감귤
            <br />
            <strong>중량</strong> : 10kg
            <br />
            <strong>배송</strong> : 전국 무료배송
            <br />
          </p>
        </div>

        <p
          style={{
            marginTop: "35px",
            fontSize: "16px",
            color: "#777",
            lineHeight: "1.8",
          }}
        >
          ※ 수확 시기에 따라 감귤의 크기와 색상은 조금씩 달라질 수
          있습니다.
        </p>
      </div>
    </section>
  );
}