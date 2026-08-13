/* Report-style pass: titles and figures only. */
(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const painpointsSlide = document.createElement('section');
  painpointsSlide.className = 'slide';
  slides[7]?.before(painpointsSlide);
  slides.splice(7, 0, painpointsSlide);
  const replace = (page, className, html) => {
    const slide = slides[page - 1];
    if (!slide) return;
    slide.className = `slide ${className}`;
    slide.innerHTML = html;
  };

  replace(4, 'report-number-slide', `
    <div class="report-number-pair" aria-label="8만원에서 2만원으로 가격 차이">
      <strong>80,000</strong><span>→</span><strong>20,000</strong>
    </div>
  `);

  replace(5, 'morph-grid-slide', `
    <h1>모프에 따라 다른 가격</h1>
    <img src="./assets/morph-grid-5.png" alt="서로 다른 다섯 종류의 크레스티드 게코 모프">
  `);

  replace(6, 'inheritance-slide', `
    <div class="inheritance-formula"><span>릴리화이트</span><i>×</i><span>아잔틱</span><i>→</i><strong>릴잔틱</strong></div>
    <img src="./assets/inheritance-visual.png" alt="릴리화이트와 아잔틱 부모 개체에서 릴잔틱 자손이 나오는 교배 구조 이미지">
  `);

  replace(7, 'information-slide', `
    <h1>정보의 혼재</h1>
    <div class="information-grid">
      <article><b>01</b><span>PRICE</span><strong>가격 비교</strong><i></i></article>
      <article><b>02</b><span>PLACE</span><strong>매장 탐색</strong><i></i></article>
      <article><b>03</b><span>MORPH</span><strong>모프 다양성</strong><i></i></article>
    </div>
  `);

  replace(8, 'painpoints-slide', `
    <h1>도마뱀 유저들의 페인포인트</h1>
    <div class="painpoints-grid">
      <article><b>01</b><h2>최저가를 찾기 어렵다</h2><p>우리 동네 매장 가격이 기준</p></article>
      <article><b>02</b><h2>예산 내 최적의 선택이 어렵다</h2></article>
      <article><b>03</b><h2>고퀄리티는 발품 또는 박람회</h2></article>
      <article><b>04</b><h2>카페 · 앱 · 사이트에 흩어진 정보</h2><p>정보가 복잡하다</p></article>
    </div>
  `);

replace(9, 'brand-reveal-slide', `
    <img src="./assets/site-entry-animation.gif" alt="도나와 실제 첫 진입 애니메이션">
  `);

replace(10, 'morph-search-slide', `
    <h1>이미지 기반 모프 탐색</h1>
    <img src="./assets/morph-explore-grid.png" alt="도나와 모프 탐색 카드 화면">
  `);

  replace(11, 'same-morph-price-slide', `
    <h1>동일 모프 내 가격 비교</h1>
    <img src="./assets/same-morph-price-list.png" alt="세이블 모프의 판매처별 가격 리스트">
  `);

  replace(12, 'same-morph-listings-slide', `
    <h1>동일 모프 내 가격 비교 2</h1>
    <img src="./assets/same-morph-listings-grid.png" alt="동일 모프의 카드형 매물 리스트">
  `);

  replace(13, 'price-sources-slide', `
    <h1>가격 정보 수집</h1>
    <div class="price-source-grid">
      <article><b>01</b><span>1</span><h2>앱</h2><p>피들 · 동물다락 등</p></article>
      <article><b>02</b><span>2</span><h2>네이버 카페</h2><p>파사모 등</p></article>
      <article><b>03</b><span>3</span><h2>매장 사이트</h2><p>가격을 제공하는 매장 사이트</p></article>
    </div>
  `);

  replace(14, 'automation-slide', `
    <h1>하루 2회 정보 업데이트</h1>
    <div class="automation-flow">
      <article class="automation-node scheduler-node">
        <small>CODEX SCHEDULING</small>
        <h2>Codex 스케줄링</h2>
        <div class="schedule-actions">
          <div><b>09:00</b><span>신규 매장 탐색</span></div>
          <div><b>18:00</b><span>판매 완료 물품 체크</span></div>
        </div>
      </article>
      <i>→</i>
      <article class="automation-node">
        <small>DATABASE</small>
        <h2>Supabase DB</h2>
        <p>수집 정보 저장 · 갱신</p>
      </article>
      <i>→</i>
      <article class="automation-node">
        <small>DEPLOYMENT</small>
        <h2>Vercel</h2>
        <p>웹 서비스 반영</p>
      </article>
    </div>
  `);

  replace(15, 'expo-banner-slide', `
    <h1>박람회 배너</h1>
    <p>배너 클릭 → 해당 박람회 사이트 이동</p>
    <img src="./assets/expo-banner-home.png" alt="도나와 첫 화면의 박람회 배너">
  `);

  replace(16, 'store-search-slide', `
    <h1>매장 탐색</h1>
    <p>가격 미연동 매장 포함</p>
    <img src="./assets/store-map-wide.png" alt="도나와 내 주변 파충류샵 전국 지도 화면">
  `);

  // Keep the remaining pages compact and report-like as well.
  const set = (page, selector, html) => {
    const element = slides[page - 1]?.querySelector(selector);
    if (element) element.innerHTML = html;
  };
  set(10, '.eyebrow', '가격 비교');
  set(10, '.deck-meta', '가격 비교');
  set(10, '.action-title', '모프 가격 비교');
  set(10, '.tail', '211건 · 21개 사이트 · 최저 15,000원');
  set(11, '.eyebrow', '정보 수집');
  set(11, '.deck-meta', '정보 수집');
  set(11, '.action-title', '가격 정보 수집');
  set(11, '.subhead', '파사모 · 피들 · 동물다락 · 판매처');
  set(11, '.tail', '09:00 · 18:00 자동 업데이트');
  set(14, '.eyebrow', '매장·박람회');
  set(14, '.deck-meta', '매장·박람회');
  set(14, '.action-title', '매장 탐색');
  set(14, '.subhead', '가격 미연동 매장 포함');
  set(17, '.eyebrow', '확장 계획');
  set(17, '.deck-meta', '확장 계획');
  set(17, '.action-title', '확장 계획');
  set(17, '.tail', '크레스티드 게코 → 레오파드 게코 → 비어디 드래곤');

  slides.forEach((slide, index) => {
    const page = slide.querySelector('.deck-page');
    if (page) page.innerHTML = `<b>${String(index + 1).padStart(2, '0')}</b> / ${String(slides.length).padStart(2, '0')}`;
  });
})();
