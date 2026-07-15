import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt="제주 감귤밭"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          🍊 진제준 밀감농장
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          제주 자연이 키운 달콤한 밀감을 만나보세요.
        </p>

        <a
          href="#products"
          style={{
            background: "#ff8c00",
            color: "#fff",
            padding: "18px 45px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          }}
        >
          🍊 상품 보러가기
        </a>
      </div>
    </section>
  );
}