export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        🍊 진제준 밀감농장
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/images/hero.jpg"
          alt="제주 감귤"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-lg leading-9 text-gray-700">
            제주 자연의 맑은 공기와 따뜻한 햇살,
            그리고 해풍을 맞으며 자란
            신선한 노지감귤입니다.
          </p>

          <ul className="mt-8 space-y-4 text-lg">
            <li>✅ 제주 청정지역 재배</li>
            <li>✅ 산지 직송</li>
            <li>✅ 당일 수확</li>
            <li>✅ 정성껏 선별 후 발송</li>
          </ul>
        </div>

      </div>
    </section>
  );
}