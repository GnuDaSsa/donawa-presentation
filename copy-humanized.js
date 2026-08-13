/*
  im-not-ai / humanize-korean pass
  Keeps the original facts, numbers, product names, and conversational tone;
  replaces generic pitch phrasing with what the presenter would naturally say.
*/
const slides = Array.from(document.querySelectorAll('.slide'));
const set = (slideNo, selector, html) => {
  const node = slides[slideNo - 1]?.querySelector(selector);
  if (node) node.innerHTML = html;
};
const setAll = (slideNo, selector, html) => {
  slides[slideNo - 1]?.querySelectorAll(selector).forEach((node, index) => {
    if (html[index] !== undefined) node.innerHTML = html[index];
  });
};

const realNaumPhoto = './assets/naum-real.jpeg';
const coverPhoto = slides[0]?.querySelector('.bg-img');
const introPhoto = slides[1]?.querySelector('.side-image img');
if (coverPhoto) coverPhoto.src = realNaumPhoto;
if (introPhoto) introPhoto.src = realNaumPhoto;

set(1, '.deck-meta', '크레스티드 게코 가격 찾기');

set(2, '.deck-meta', '나움 이야기');
set(2, '.action-title', '좋아하는 친구지만,<br>가격은 <em>아쉬웠습니다.</em>');
set(2, '.tail', '나중에 공부해 보니, <b>처음 데려올 때 가격</b>이 계속 마음에 걸렸습니다.');

set(3, '.deck-meta', '가격 차이');
set(3, '.eyebrow', '처음 낸 가격과 나중에 본 시세');
set(3, '.tail', '차이는 <b>60,000원</b>. 비싸게 샀다는 사실보다, <b>그때는 비교할 방법이 없었다</b>는 게 더 아쉬웠습니다.');

set(4, '.deck-meta', '모프와 가격');
set(4, '.action-title', '같은 종이어도,<br>모프에 따라 <em>값이 다릅니다.</em>');
set(4, '.subhead', '업계에서는 외형과 유전적 특징을 ‘모프’라고 부릅니다. 같은 크레스티드 게코라도 모프에 따라 가격 차이가 큽니다.');

set(5, '.deck-meta', '교배와 확률');
set(5, '.action-title', '교배를 거듭해,<br>모프의 <em>완성도를 높입니다.</em>');
set(5, '.subhead', '우성과 열성의 조합을 보고, 원하는 특징을 가진 개체를 교배해 모프를 다듬습니다.');
setAll(5, '.gene .t', ['개체를 살피고', '다음 교배를 정하고', '모프를 다듬습니다']);
set(5, '.tail', '이런 노력에는 충분히 값이 붙을 수 있습니다. 다만 <b>그 가치를 이해할 정보</b>도 유저에게 닿아야 합니다.');

set(6, '.deck-meta', '정보를 찾는 일');
set(6, '.action-title', '가격과 매장 정보가<br>여기저기 <em>흩어져 있습니다.</em>');
setAll(6, '.pain h3', ['가격을 비교하기 어렵고', '매장 찾기도 어렵고', '모프 이름도 낯설고']);
set(6, '.tail', '입문자는 마음에 드는 아이를 먼저 보고, <b>가격 기준</b>은 나중에 알게 됩니다.');

set(7, '.deck-meta', '박람회만으로는');
set(7, '.tail', '박람회를 대신하자는 건 아닙니다. <b>가기 전에도 가격과 매물을 편하게 찾아보자</b>는 겁니다.');

set(8, '.deck-meta', '도나와');
set(8, '.subhead', '가격 정보와 매장 위치, 매물 사진을 한곳에서 찾아볼 수 있게 만들었습니다.');
set(8, '.ui h3', '어떤 <b>모프</b>를 좋아하세요?');
setAll(8, '.ui-stat b', ['가격대 보기', '판매처 모아보기']);
setAll(8, '.ui-stat small', ['모프별 시세를 한눈에', '링크와 매물 정보까지']);

set(9, '.deck-meta', '처음 보는 사람을 위해');
set(9, '.action-title', '먼저 모프를 고르고,<br>그다음 <em>가격을 봅니다.</em>');
set(9, '.feature:nth-child(2) h3', '매물 사진도 같이 봅니다');
set(9, '.tail', '처음부터 모프 이름을 알아야 하는 건 아닙니다. <b>보기 좋은 모프부터 골라도 됩니다.</b>');

set(10, '.deck-meta', '정보 업데이트');
set(10, '.eyebrow', '정보는 어떻게 모았나');
set(10, '.action-title', '가격 정보는 매일<br>다시 <em>확인합니다.</em>');
set(10, '.tail', '<b>정해둔 사이트만 훑는 방식</b>으로는 새 매장, 새 가격, 판매완료를 놓치기 쉽습니다. 그래서 Codex 스케줄러를 사용했습니다.');
set(10, '.sched-top span:first-child', '자동 업데이트');
set(10, '.schedule h3', '하루 두 번,<br>정보를 다시 확인합니다.');
setAll(10, '.sched-row b', ['오전 업데이트', '저녁 업데이트']);

set(11, '.deck-meta', '지도와 박람회');
set(11, '.action-title', '가격이 없는 매장도,<br>지도에서 <em>찾을 수 있습니다.</em>');
set(11, '.subhead', '위치 기반 검색에서는 가격을 올리지 않은 매장까지 보여줍니다. 직접 발품을 팔고 싶은 사람을 위한 기능입니다.');

set(12, '.deck-meta', '다음 계획');
set(12, '.action-title', '먼저 크레스티드 게코부터<br><em>제대로 만들겠습니다.</em>');
set(12, '.tail', '좋아하는 도마뱀을, <b>납득할 수 있는 가격에</b> 만날 수 있으면 좋겠습니다. 감사합니다.');

const insertSiteShot = (slideNo, selector, src, alt, className) => {
  const node = slides[slideNo - 1]?.querySelector(selector);
  if (!node) return;
  node.innerHTML = `<img src="${src}" alt="${alt}">`;
  node.classList.add('site-shot', className);
};

set(8, '.subhead', '실제 홈 화면에서 모프 카드를 보고, 마음에 드는 특징부터 탐색할 수 있게 했습니다.');
insertSiteShot(8, '.browser', './assets/site-home.png', '도나와 홈 화면', 'site-home-shot');

set(9, '.action-title', '모프를 고르면,<br><em>가격을 비교합니다.</em>');
set(9, '.tail', '릴리화이트 화면에서는 캡처 시점 기준 <b>211건의 매물</b>, <b>21개 사이트</b>, 최저 호가 <b>15,000원</b>을 바로 볼 수 있습니다.');
insertSiteShot(9, '.feature-cols', './assets/site-lilly-white.png', '릴리화이트 가격 비교 화면', 'site-detail-shot');

set(11, '.subhead', '가격을 올리지 않은 매장까지 포함해, 지역과 주소로 파충류샵을 찾을 수 있게 했습니다.');
set(11, '.expo b', '박람회 정보도 첫 화면에서');
set(11, '.expo span', '포스터를 누르면 해당 박람회 사이트로 이동합니다.');
insertSiteShot(11, '.map', './assets/site-nearby.png', '도나와 내 주변 파충류샵 화면', 'site-map-shot');

// New opening sequence: first a pause, then the question, then Naum alone.
slides[0]?.classList.add('black-intro');
slides[0]?.querySelector('.bg')?.replaceChildren();
slides[0]?.querySelector('.frame')?.replaceChildren();

slides[1]?.classList.remove('image-slide');
slides[1]?.classList.add('question-slide');
slides[1]?.querySelector('.side-image')?.remove();
slides[1]?.querySelector('.frame')?.replaceChildren(
  Object.assign(document.createElement('h1'), {
    className: 'question-type',
    innerHTML: '생명의 가치를<br>돈으로 매길 수 있을까?'
  })
);

// The photo-only Naum slide shifts the original story forward by one page.
set(4, '.deck-meta', '가격 차이');
set(4, '.eyebrow', '처음 낸 가격과 나중에 본 시세');
set(4, '.action-title', '저는 나움을<br><span class="price">8만원</span>에 샀습니다.');
set(4, '.tail', '차이는 <b>60,000원</b>. 비싸게 샀다는 사실보다, <b>그때는 비교할 방법이 없었다</b>는 게 더 아쉬웠습니다.');

set(5, '.deck-meta', '모프와 가격');
set(5, '.action-title', '같은 종이어도,<br>모프에 따라 <em>가격이 다릅니다.</em>');
set(5, '.subhead', '모프는 색·무늬·등 라인처럼 유전되는 외형 특징을 가리키는 말입니다. 같은 크레스티드 게코라도 특징의 희소성과 완성도에 따라 가격이 달라집니다.');

set(6, '.deck-meta', '우성·열성과 교배');
set(6, '.eyebrow', '생물학적으로 보면');
set(6, '.action-title', '우성과 열성은,<br>다음 세대의 <em>모습을 가늠하는 법</em>입니다.');
set(6, '.subhead', '각 형질은 부모에게서 한 쌍의 유전 정보를 받습니다. 우성 형질은 한 쪽만 있어도 겉으로 드러날 수 있고, 열성 형질은 두 쪽 모두 있어야 드러나는 경우가 많습니다.');
setAll(6, '.gene .t', ['부모의 형질을 확인하고', '나올 조합을 계산하고', '원하는 특징을 선별합니다']);
setAll(6, '.gene .d', [
  '겉으로 보이는 모프와 보유한 유전 형질을 함께 확인합니다.',
  '부모가 가진 유전 정보에 따라 다음 세대에 나타날 가능성이 달라집니다.',
  '여러 세대를 거치며 색·패턴·라인이 또렷한 개체를 선별합니다.'
]);
set(6, '.tail', '그래서 모프 가격에는 외형뿐 아니라, <b>교배와 선별에 쌓인 시간</b>도 함께 담깁니다.');

set(7, '.deck-meta', '정보를 찾는 일');
set(7, '.action-title', '가격과 매장 정보가<br>여기저기 <em>흩어져 있습니다.</em>');
setAll(7, '.pain h3', ['가격을 비교하기 어렵고', '매장 찾기도 어렵고', '모프 이름도 낯설고']);
set(7, '.tail', '입문자는 마음에 드는 아이를 먼저 보고, <b>가격 기준</b>은 나중에 알게 됩니다.');

set(8, '.deck-meta', '박람회만으로는');
set(8, '.tail', '박람회를 대신하자는 건 아닙니다. <b>가기 전에도 가격과 매물을 편하게 찾아보자</b>는 겁니다.');

set(9, '.deck-meta', '도나와');
set(9, '.subhead', '실제 홈 화면에서 모프 카드를 보고, 마음에 드는 특징부터 탐색할 수 있게 했습니다.');
insertSiteShot(9, '.browser', './assets/site-home.png', '도나와 홈 화면', 'site-home-shot');

set(10, '.deck-meta', '처음 보는 사람을 위해');
set(10, '.eyebrow', '처음 보는 사람을 위해');
set(10, '.action-title', '모프를 고르면,<br><em>가격을 비교합니다.</em>');
set(10, '.tail', '릴리화이트 화면에서는 캡처 시점 기준 <b>211건의 매물</b>, <b>21개 사이트</b>, 최저 호가 <b>15,000원</b>을 바로 볼 수 있습니다.');
insertSiteShot(10, '.feature-cols', './assets/site-lilly-white.png', '릴리화이트 가격 비교 화면', 'site-detail-shot');

set(11, '.deck-meta', '정보 업데이트');
set(11, '.eyebrow', '정보는 어떻게 모았나');
set(11, '.action-title', '가격 정보는 매일<br>다시 <em>확인합니다.</em>');
set(11, '.tail', '<b>정해둔 사이트만 훑는 방식</b>으로는 새 매장, 새 가격, 판매완료를 놓치기 쉽습니다. 그래서 Codex 스케줄러를 사용했습니다.');
set(11, '.sched-top span:first-child', '자동 업데이트');
set(11, '.schedule h3', '하루 두 번,<br>정보를 다시 확인합니다.');
setAll(11, '.sched-row b', ['오전 업데이트', '저녁 업데이트']);

set(12, '.deck-meta', '지도와 박람회');
set(12, '.action-title', '가격이 없는 매장도,<br>지도에서 <em>찾을 수 있습니다.</em>');
set(12, '.subhead', '가격을 올리지 않은 매장까지 포함해, 지역과 주소로 파충류샵을 찾을 수 있게 했습니다.');
set(12, '.expo b', '박람회 정보도 첫 화면에서');
set(12, '.expo span', '포스터를 누르면 해당 박람회 사이트로 이동합니다.');
insertSiteShot(12, '.map', './assets/site-nearby.png', '도나와 내 주변 파충류샵 화면', 'site-map-shot');

set(13, '.deck-meta', '다음 계획');
set(13, '.action-title', '먼저 크레스티드 게코부터<br><em>제대로 만들겠습니다.</em>');
set(13, '.tail', '좋아하는 도마뱀을, <b>납득할 수 있는 가격에</b> 만날 수 있으면 좋겠습니다. 감사합니다.');

insertSiteShot(13, '.map', './assets/site-nearby.png', '도나와 내 주변 파충류샵 화면', 'site-map-shot');

slides.forEach((slide, index) => {
  const page = slide.querySelector('.deck-page');
  if (page) page.innerHTML = `<b>${String(index + 1).padStart(2, '0')}</b> / ${String(slides.length).padStart(2, '0')}`;
});
