import Image from "next/image";

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: "#fff8ef",
        padding: "110px 20px 120px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* 상품 사진 */}
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto 60px",
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="서귀포 노지감귤 10kg"
            width={850}
            height={560}
            style={{
              display: "block",
              width: "100%",
              height: "560px",
              objectFit: "cover",
              borderRadius: "24px",
            }}
          />
        </div>

        {/* 상품명과 가격 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              color: "#f57c00",
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.35,
              fontWeight: 700,
              letterSpacing: "-1.5px",
            }}
          >
            서귀포 노지감귤 10kg
          </h2>

          <p
            style={{
              margin: 0,
              color: "#e65100",
              fontSize: "clamp(34px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            35,000원
          </p>
        </div>

        {/* 주문 버튼 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
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
            }}
          >
            📞 주문 및 문의
          </a>
        </div>

        {/* 상품정보 */}
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "24px",
            padding: "40px 35px",
          }}
        >
          <h3
            style={{
              margin: "0 0 30px",
              color: "#f57c00",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            🍊 상품정보
          </h3>

          <div
            style={{
              fontSize: "19px",
              lineHeight: 2,
              color: "#555555",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong
                style={{
                  display: "inline-block",
                  width: "80px",
                }}
              >
                원산지
              </strong>
              서귀포시 토평동
            </p>

            <p style={{ margin: 0 }}>
              <strong
                style={{
                  display: "inline-block",
                  width: "80px",
                }}
              >
                상품명
              </strong>
              서귀포 노지감귤
            </p>

            <p style={{ margin: 0 }}>
              <strong
                style={{
                  display: "inline-block",
                  width: "80px",
                }}
              >
                중량
              </strong>
              10kg
            </p>

            <p style={{ margin: 0 }}>
              <strong
                style={{
                  display: "inline-block",
                  width: "80px",
                }}
              >
                배송
              </strong>
              전국 무료배송
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}