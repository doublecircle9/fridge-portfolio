import { FOOD_LAYOUT, HOTSPOT_DEBUG, POSITION_DEBUG, STICKER_LAYOUT } from './layout.js';

const app = document.querySelector('#app');

const FRIDGE_STATE_KEY = 'fridgePortfolioV2State';
const GUEST_MESSAGE_KEY = 'fridgeGuestMessage';
const NOTE_POSITION_KEY = 'fridgeNotePosition';
const INTRO_PLAYED_KEY = 'fridgeIntroPlayed';
const FORCE_INTRO = false;
const ROOM_BACKGROUND = {
  width: 8000,
  height: 4500,
  clockCenterX: 590,
  clockCenterY: 398,
  clockSize: 552,
};
const SHUSHAN_IMAGE = new URL('../public/assets/works/brand/shushan-star-night.jpg', import.meta.url).href;
const CHUIHONG_IMAGE = new URL('../public/assets/works/brand/chuihong-cultural-block.jpg', import.meta.url).href;
const CHANGDU_IMAGE = new URL('../public/assets/works/brand/changdu-reba-art-festival.jpg', import.meta.url).href;
const JIADING_CONFUCIUS_01 = new URL('../public/assets/works/merchandise/jiading-confucius-01.jpg', import.meta.url).href;
const JIADING_CONFUCIUS_02 = new URL('../public/assets/works/merchandise/jiading-confucius-02.jpg', import.meta.url).href;
const NANTONG_PLAYING_CARDS_01 = new URL('../public/assets/works/merchandise/nantong-playing-cards-01.jpg', import.meta.url).href;
const NANTONG_PLAYING_CARDS_02 = new URL('../public/assets/works/merchandise/nantong-playing-cards-02.jpg', import.meta.url).href;
const DONOT_IMAGE = new URL('../public/assets/works/ip/donot.jpg', import.meta.url).href;
const QIUMA_BAKERY_01 = new URL('../public/assets/works/ip/qiuma-bakery-01.jpg', import.meta.url).href;
const QIUMA_BAKERY_02 = new URL('../public/assets/works/ip/qiuma-bakery-02.jpg', import.meta.url).href;
const SENYUAN_GENE_01 = new URL('../public/assets/works/book/senyuan-gene-01.jpg', import.meta.url).href;
const SENYUAN_GENE_02 = new URL('../public/assets/works/book/senyuan-gene-02.jpg', import.meta.url).href;
const ABOUT_ME_IMAGE = new URL('../public/assets/about/about-me.jpg', import.meta.url).href;
const DUANXU_PAGES = Array.from({ length: 19 }, (_, index) => {
  const page = String(index + 1).padStart(2, '0');
  return new URL(`../public/assets/works/book/duanxu-page-${page}.jpg`, import.meta.url).href;
});
const inspirationPages = (first, last) => Array.from({ length: last - first + 1 }, (_, index) => {
  const page = String(first + index).padStart(2, '0');
  return new URL(`../public/assets/works/more/page-${page}.jpg`, import.meta.url).href;
});

const routes = {
  brand: '/works/brand',
  brandShushan: '/works/brand/shushan-star-night',
  brandChuihong: '/works/brand/chuihong-cultural-block',
  brandChangdu: '/works/brand/changdu-reba-art-festival',
  merchandise: '/works/merchandise',
  merchandiseJiading: '/works/merchandise/jiading-confucius',
  merchandiseNantong: '/works/merchandise/nantong-playing-cards',
  ip: '/works/ip',
  ipDonot: '/works/ip/just-ddooonot',
  ipQiumaBakery: '/works/ip/qiuma-bakery',
  books: '/works/poster',
  bookSenyuan: '/works/poster/senyuan-gene',
  bookDuanxu: '/works/poster/duanxu',
  more: '/works/more',
  moreBrandIp: '/works/more/brand-ip-strategy',
  moreVisual: '/works/more/visual-product-planning',
  moreEvents: '/works/more/brand-events',
  skills: '/about/skills',
  about: '/about',
  selfEvaluation: '/about/profile',
  contact: '/contact',
};

const categoryTitles = {
  '/works/brand': '品牌设计',
  '/works/merchandise': '文创设计',
  '/works/ip': 'IP设计',
  '/works/poster': '书籍设计',
  '/works/more': '更多灵感',
  '/about/skills': '个人技能',
  '/about': '关于我',
  '/about/profile': '自我评价',
  '/contact': '联系方式',
};

const brandProjects = [
  {
    id: 'shushan-star-night',
    index: '01',
    title: '夜游翡翠·嗨购树山',
    meta: '活动视觉',
    preview: SHUSHAN_IMAGE,
    images: [SHUSHAN_IMAGE],
    path: routes.brandShushan,
  },
  {
    id: 'chuihong-cultural-block',
    index: '02',
    title: '垂虹文化街区',
    meta: '文旅品牌',
    preview: CHUIHONG_IMAGE,
    images: [CHUIHONG_IMAGE],
    path: routes.brandChuihong,
  },
  {
    id: 'changdu-reba-art-festival',
    index: '03',
    title: '昌都热巴艺术节',
    meta: '文化节视觉',
    preview: CHANGDU_IMAGE,
    images: [CHANGDU_IMAGE],
    path: routes.brandChangdu,
  },
];

const merchandiseProjects = [
  {
    id: 'jiading-confucius',
    index: '01',
    title: '嘉定孔庙文创',
    preview: JIADING_CONFUCIUS_01,
    images: [JIADING_CONFUCIUS_01, JIADING_CONFUCIUS_02],
    path: routes.merchandiseJiading,
  },
  {
    id: 'nantong-playing-cards',
    index: '02',
    title: '南通文旅扑克牌',
    preview: NANTONG_PLAYING_CARDS_01,
    images: [NANTONG_PLAYING_CARDS_01, NANTONG_PLAYING_CARDS_02],
    path: routes.merchandiseNantong,
  },
];

const ipProjects = [
  {
    id: 'just-ddooonot',
    index: '01',
    title: 'ddooonot',
    preview: DONOT_IMAGE,
    images: [DONOT_IMAGE],
    path: routes.ipDonot,
  },
  {
    id: 'qiuma-bakery',
    index: '02',
    title: '球妈烘焙',
    preview: QIUMA_BAKERY_01,
    images: [QIUMA_BAKERY_01, QIUMA_BAKERY_02],
    path: routes.ipQiumaBakery,
  },
];

const bookProjects = [
  {
    id: 'senyuan-gene',
    index: '01',
    title: '上海森元基因',
    preview: SENYUAN_GENE_01,
    images: [SENYUAN_GENE_01, SENYUAN_GENE_02],
    path: routes.bookSenyuan,
  },
  {
    id: 'duanxu',
    index: '02',
    title: '《断续》',
    preview: DUANXU_PAGES[0],
    images: DUANXU_PAGES,
    path: routes.bookDuanxu,
  },
];

const inspirationProjects = [
  {
    id: 'brand-ip-strategy', index: '01', title: '品牌与 IP 策略',
    meta: '南通文旅「通通」 · DDooonot',
    preview: inspirationPages(4, 4)[0], images: inspirationPages(3, 15),
    path: routes.moreBrandIp,
  },
  {
    id: 'visual-product-planning', index: '02', title: '视觉产品策划',
    meta: '歌手 IP 及周边策划',
    preview: inspirationPages(17, 17)[0], images: inspirationPages(16, 20),
    path: routes.moreVisual,
  },
  {
    id: 'brand-events', index: '03', title: '品牌活动策划',
    meta: 'Aroomoo · Morning Good',
    preview: inspirationPages(22, 22)[0], images: inspirationPages(21, 30),
    path: routes.moreEvents,
  },
];

const portfolioCategories = [
  {
    id: 'brand',
    title: '品牌设计',
    path: routes.brand,
    pageClass: 'brand-index-page',
    projects: brandProjects,
  },
  {
    id: 'merchandise',
    title: '文创设计',
    path: routes.merchandise,
    pageClass: 'merchandise-index-page',
    projects: merchandiseProjects,
    previousPrefix: '← 上一个作品：',
    nextPrefix: '下一个作品：',
  },
  {
    id: 'ip',
    title: 'IP设计',
    path: routes.ip,
    pageClass: 'ip-index-page',
    projects: ipProjects,
    previousPrefix: '← 上一个作品：',
    nextPrefix: '下一个作品：',
  },
  {
    id: 'books',
    title: '书籍设计',
    path: routes.books,
    pageClass: 'book-index-page',
    projects: bookProjects,
    previousPrefix: '← 上一个作品：',
    nextPrefix: '下一个作品：',
  },
  {
    id: 'more',
    title: '更多灵感',
    path: routes.more,
    pageClass: 'brand-index-page',
    projects: inspirationProjects,
    previousPrefix: '← 上一个类别：',
    nextPrefix: '下一个类别：',
  },
];

const foodItems = [
  { id: 'brand', label: '品牌设计', hint: '点开看看', path: routes.brand },
  { id: 'merchandise', label: '文创设计', hint: '点开看看', path: routes.merchandise },
  { id: 'ip', label: 'IP设计', hint: '点开看看', path: routes.ip },
  { id: 'books', label: '书籍设计', hint: '翻开看看', path: routes.books },
  { id: 'more', label: '更多灵感', hint: '还有更多', path: routes.more },
  { id: 'skills', label: '个人技能', hint: '点开看看', path: routes.skills },
  { id: 'about', label: '关于我', hint: '认识一下', path: routes.about },
  { id: 'selfEvaluation', label: '自我评价', hint: '点开看看', path: routes.selfEvaluation },
  { id: 'contact', label: '联系方式', hint: '来联系我', path: routes.contact },
];

const stickers = [
  { id: 'fresh', src: './public/assets/stickers/fresh.png' },
  { id: 'photo', src: './public/assets/stickers/photo.png' },
  { id: 'apple', src: './public/assets/stickers/apple.png' },
  { id: 'home', src: './public/assets/stickers/home.png' },
  { id: 'lemon', src: './public/assets/stickers/lemon.png' },
  { id: 'stamp', src: './public/assets/stickers/stamp.png' },
  { id: 'infj', src: './public/assets/stickers/infj.png' },
  { id: 'writeSomething', src: './public/assets/stickers/write something.png' },
  { id: 'star', src: './public/assets/stickers/star.png' },
  { id: 'yuanyuan', src: './public/assets/stickers/yuanyuan.png' },
];

let fridgeState = sessionStorage.getItem(FRIDGE_STATE_KEY) === 'open' ? 'open' : 'closed';
let guestMessage = readStoredGuestMessage();
let isNotePopupOpen = false;
let isNoteEditing = false;
let notePosition = readStoredNotePosition();
let starClicks = [];
let lemonClicks = [];
let lemonFollowUpOpen = false;
let easterEggMessage = '';
let easterEggTimer = null;
let lemonTimer = null;
let introPhase = 'idle';
let introTimers = [];

function readStoredGuestMessage() {
  try {
    return localStorage.getItem(GUEST_MESSAGE_KEY) || '';
  } catch {
    return '';
  }
}

function saveGuestMessage(message) {
  guestMessage = message.trim();
  try {
    if (guestMessage) {
      localStorage.setItem(GUEST_MESSAGE_KEY, guestMessage);
    } else {
      localStorage.removeItem(GUEST_MESSAGE_KEY);
    }
  } catch {
    // The note still works for the current page even if storage is unavailable.
  }
}

function readStoredNotePosition() {
  try {
    const savedPosition = JSON.parse(localStorage.getItem(NOTE_POSITION_KEY) || 'null');
    if (
      savedPosition &&
      Number.isFinite(savedPosition.x) &&
      Number.isFinite(savedPosition.y)
    ) {
      return savedPosition;
    }
  } catch {
    return null;
  }
  return null;
}

function saveNotePosition(x, y) {
  notePosition = { x, y };
  try {
    localStorage.setItem(NOTE_POSITION_KEY, JSON.stringify(notePosition));
  } catch {
    // Dragging still works for the current popup if storage is unavailable.
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isCategoryRoute() {
  return Boolean(categoryTitles[currentPath()]);
}

function currentPortfolioCategory() {
  return portfolioCategories.find((category) => category.path === currentPath());
}

function currentProject() {
  for (const category of portfolioCategories) {
    const project = category.projects.find((item) => item.path === currentPath());
    if (project) {
      return { ...project, category };
    }
  }
  return null;
}

function isProjectRoute() {
  return Boolean(currentProject());
}

function isIntroActive() {
  return introPhase === 'preparing' || introPhase === 'playing';
}

function shouldPlayIntro() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || isCategoryRoute() || isProjectRoute() || fridgeState !== 'closed') {
    return false;
  }
  return FORCE_INTRO || sessionStorage.getItem(INTRO_PLAYED_KEY) !== 'true';
}

function setFridgeState(nextState) {
  const previousState = fridgeState;
  fridgeState = nextState;
  sessionStorage.setItem(FRIDGE_STATE_KEY, nextState);
  render();
  if (previousState === 'closed' && nextState === 'open') {
    scheduleOpenWake();
  }
}

function currentPath() {
  return window.location.hash.slice(1) || '/';
}

function navigate(path) {
  window.history.pushState({}, '', '#' + path);
  render();
}

function nav() {
  return `
    <nav class="site-nav" aria-label="主导航">
      <button type="button" data-nav="${routes.about}">关于我</button>
      <button type="button" data-nav="${routes.skills}">个人技能</button>
      <button type="button" data-nav="/">作品</button>
      <button type="button" data-nav="${routes.contact}">联系我</button>
    </nav>
  `;
}

function stickerLayer() {
  return `
    <div class="sticker-layer closed-fridge-stage">
      ${stickers
        .map((sticker, index) => {
          const layout = STICKER_LAYOUT[sticker.id];
          if (sticker.id === 'writeSomething') {
            return writeNoteSticker(sticker, layout, index);
          }

          return `
            <img
              class="sticker"
              data-sticker="${sticker.id}"
              src="${sticker.src}"
              alt=""
              draggable="false"
              style="
                left:${layout.left};
                top:${layout.top};
                width:${layout.width};
                --sticker-rotate:${layout.rotate};
                --sticker-hover-rotate:${layout.hoverRotate};
                --intro-delay:${760 + index * 58}ms;
                --intro-rotate:${index % 2 === 0 ? '-3deg' : '3deg'};
              "
            />
          `;
        })
        .join('')}
    </div>
  `;
}

function writeNoteSticker(sticker, layout, index) {
  return `
    <div
      class="sticker write-note"
      data-sticker="${sticker.id}"
      role="button"
      tabindex="0"
      aria-label="写一张冰箱便签"
      style="
        left:${layout.left};
        top:${layout.top};
        width:${layout.width};
        --sticker-rotate:${layout.rotate};
        --sticker-hover-rotate:${layout.hoverRotate};
        --intro-delay:${760 + index * 58}ms;
        --intro-rotate:${index % 2 === 0 ? '-3deg' : '3deg'};
      "
    >
      <img class="write-note-image" src="${sticker.src}" alt="" draggable="false" />
    </div>
  `;
}

function notePopup() {
  if (!isNotePopupOpen || fridgeState !== 'closed' || isIntroActive()) {
    return '';
  }

  const safeMessage = escapeHtml(guestMessage);
  const positionStyle = notePosition
    ? `style="left:${notePosition.x}px; top:${notePosition.y}px;"`
    : '';
  const positionedClass = notePosition ? 'is-positioned' : '';
  const body = isNoteEditing
    ? `
      <textarea class="note-input" maxlength="80" placeholder="写点什么吧……">${safeMessage}</textarea>
      <div class="note-actions">
        <span class="note-count">${guestMessage.length} / 80</span>
        <button class="note-action note-save" type="button">保存</button>
      </div>
    `
    : `
      <div class="note-read-text">${safeMessage}</div>
      <div class="note-actions">
        <button class="note-action note-edit" type="button">编辑</button>
        <button class="note-action note-clear" type="button">清空</button>
      </div>
    `;

  return `
    <div class="note-popup-layer" aria-label="冰箱便签编辑器">
      <button class="note-scrim" type="button" aria-label="关闭便签"></button>
      <section class="note-popup ${positionedClass}" role="dialog" aria-modal="true" aria-label="写一张便签" ${positionStyle}>
        <div class="note-drag-handle" aria-hidden="true"></div>
        <span class="note-tape" aria-hidden="true"></span>
        <button class="note-close" type="button" aria-label="关闭便签">×</button>
        <div class="note-title">写张便签</div>
        ${body}
      </section>
    </div>
  `;
}

function introOverlay() {
  if (!isIntroActive()) {
    return '';
  }

  return `
    <div class="intro-overlay" aria-hidden="true">
      <div class="intro-title">
        <span class="intro-word intro-word-one">WHAT'S IN</span>
        <span class="intro-word intro-word-two">THE FRIDGE?</span>
      </div>
    </div>
  `;
}

function hotspotLayer() {
  return `
    <div class="hotspot-layer" aria-label="作品分类">
      ${foodItems
        .map((item) => {
          const layout = FOOD_LAYOUT[item.id];
          return `
            <button
              class="food-hotspot"
              type="button"
              data-food="${item.id}"
              data-path="${item.path}"
              aria-label="${item.label}"
              style="left:${layout.left}; top:${layout.top}; width:${layout.width}; height:${layout.height};"
            >
              <span class="food-hint" aria-hidden="true">${escapeHtml(item.hint)} ↓</span>
            </button>
          `;
        })
        .join('')}
    </div>
  `;
}

function fridgeStage() {
  return `
    <section
      class="fridge-stage ${POSITION_DEBUG ? 'position-debug' : ''}"
      data-state="${fridgeState}"
      aria-label="互动冰箱"
    >
      <div class="fridge-layer closed-layer" aria-hidden="${fridgeState === 'open'}">
        <img class="fridge-image" src="./public/assets/fridge/closed-empty.png" alt="关闭的冰箱" draggable="false" />
        <div class="fridge-sunlight" aria-hidden="true"></div>
        <div class="fridge-sheen" aria-hidden="true"></div>
        ${stickerLayer()}
        ${fridgeState === 'closed' ? `<button class="open-handle-hotspot ${HOTSPOT_DEBUG ? 'hotspot-debug' : ''}" type="button" aria-label="打开冰箱"></button>` : ''}
      </div>
      <div class="fridge-layer open-layer" aria-hidden="${fridgeState === 'closed'}">
        <img class="fridge-image" src="./public/assets/fridge/open-full.png" alt="打开的冰箱" draggable="false" />
        <div class="fridge-sunlight" aria-hidden="true"></div>
        ${fridgeState === 'open' ? hotspotLayer() : ''}
      </div>
      ${fridgeState === 'open' ? '<button class="close-fridge-button" type="button">关闭冰箱门</button>' : ''}
    </section>
  `;
}

function homePage() {
  const introClass = isIntroActive()
    ? `is-intro-active ${introPhase === 'preparing' ? 'intro-preparing' : 'intro-playing'}`
    : introPhase === 'complete'
      ? 'intro-complete'
      : '';
  const stateClass = fridgeState === 'open' ? 'fridge-open' : 'fridge-closed';

  return `
    <main class="home-page ${stateClass} ${introClass}">
      <div class="page-background" aria-hidden="true"></div>
      <div class="sunlight-scene" aria-hidden="true">
        <div class="sunlight-beam sunlight-beam-main"></div>
        <div class="sunlight-beam sunlight-beam-floor"></div>
        <div class="sun-shadow"></div>
        <div class="clock-overlay">
          <span class="clock-face-cover"></span>
          <span class="clock-hand hour-hand"></span>
          <span class="clock-hand minute-hand"></span>
          <span class="clock-center"></span>
        </div>
      </div>
      <div class="home-content">
        ${nav()}
        <section class="hero">
          ${fridgeStage()}
          ${fridgeState === 'closed' ? '<h1 class="fridge-title">WHAT&#39;S IN THE FRIDGE</h1>' : ''}
        </section>
      </div>
      ${notePopup()}
      ${introOverlay()}
      ${easterEggMessage ? `<div class="easter-egg-note">${escapeHtml(easterEggMessage)}</div>` : ''}
    </main>
  `;
}

function categoryPage() {
  if (currentPath() === routes.about) {
    return aboutPage();
  }
  if (currentPath() === routes.skills) {
    return skillsPage();
  }
  if (currentPath() === routes.contact) {
    return contactPage();
  }
  if (currentPath() === routes.selfEvaluation) {
    return profilePage();
  }

  const portfolioCategory = currentPortfolioCategory();
  if (portfolioCategory) {
    return portfolioCategoryPage(portfolioCategory);
  }

  return `
    <main class="category-page">
      ${nav()}
      <section class="category-panel">
        <h1>${categoryTitles[currentPath()]}</h1>
        <button class="back-to-fridge" type="button">返回冰箱</button>
      </section>
    </main>
  `;
}

function skillsPage() {
  return `
    <main class="info-page skills-page">
      ${nav()}
      <section class="info-shell" aria-labelledby="skills-title">
        <header class="info-heading">
          <p class="info-kicker">01 / 我的能力</p>
          <h1 id="skills-title">个人技能<span>我的能力</span></h1>
          <p class="info-intro">从前期调研和创意构思，到视觉呈现与制作落地。</p>
        </header>
        <div class="skills-grid">
          <article class="skill-item">
            <span class="skill-index">01</span>
            <div><h2>视觉设计</h2><p class="skill-en">视觉设计</p></div>
            <p>使用 Photoshop、Illustrator 完成品牌视觉、活动主视觉及系列物料设计。</p>
          </article>
          <article class="skill-item">
            <span class="skill-index">02</span>
            <div><h2>调研与提案</h2><p class="skill-en">调研与提案</p></div>
            <p>梳理项目资料与创意方向，使用 WPS、PowerPoint、飞书制作调研及策划提案。</p>
          </article>
          <article class="skill-item">
            <span class="skill-index">03</span>
            <div><h2>AI 辅助创意</h2><p class="skill-en">AI辅助创意</p></div>
            <p>使用 ChatGPT、Claude、Kimi 辅助创意发散、提示词编写和视觉概念探索。</p>
          </article>
          <article class="skill-item">
            <span class="skill-index">04</span>
            <div><h2>语言能力</h2><p class="skill-en">语言能力</p></div>
            <p>英语六级。</p>
          </article>
        </div>
        <footer class="info-footer"><button class="back-to-fridge" type="button">← 返回冰箱</button></footer>
      </section>
    </main>
  `;
}

function contactPage() {
  return `
    <main class="info-page contact-page">
      ${nav()}
      <section class="info-shell contact-shell" aria-labelledby="contact-title">
        <header class="info-heading">
          <p class="info-kicker">02 / 与我联系</p>
          <h1 id="contact-title">联系我<span>联系方式</span></h1>
          <p class="info-intro">关于工作机会或项目合作，欢迎联系。</p>
        </header>
        <div class="contact-list">
          <div class="contact-row"><span>邮箱</span><a href="mailto:2019347727@qq.com">2019347727@qq.com ↗</a></div>
          <div class="contact-row"><span>电话</span><a href="tel:+8619552755119">195 5275 5119 ↗</a></div>
          <div class="contact-row"><span>微信</span><p>w6x62607015</p></div>
          <div class="contact-row"><span>常住地</span><p>苏州 / 南通</p></div>
        </div>
        <footer class="info-footer"><button class="back-to-fridge" type="button">← 返回冰箱</button></footer>
      </section>
    </main>
  `;
}

function profilePage() {
  return `
    <main class="info-page profile-page">
      ${nav()}
      <section class="info-shell profile-shell" aria-labelledby="profile-title">
        <header class="info-heading">
          <p class="info-kicker">03 / 多了解我一点</p>
          <h1 id="profile-title">自我评价<span>兴趣与特长</span></h1>
        </header>
        <div class="profile-layout">
          <section class="profile-intro" aria-labelledby="self-evaluation-title">
            <p class="profile-label">自我评价</p>
            <h2 id="self-evaluation-title">喜欢想点子，<br />也喜欢把它做出来。</h2>
            <p>做项目时，我习惯先弄清楚内容和受众，再去找合适的表达方式。比起只完成一张好看的图，我更在意创意能不能用于不同场景，最后能不能顺利落地。</p>
            <p>我对新的品牌活动、消费者需求和流行趋势很感兴趣，也愿意在团队里沟通、尝试和反复打磨想法。</p>
          </section>
          <div class="profile-details">
            <section class="profile-detail" aria-labelledby="strengths-title">
              <p class="profile-label">01 / 特长</p>
              <h3 id="strengths-title">特长</h3>
              <p>视觉设计、内容创意、手绘插画。</p>
            </section>
            <section class="profile-detail" aria-labelledby="interests-title">
              <p class="profile-label">02 / 兴趣爱好</p>
              <h3 id="interests-title">兴趣爱好</h3>
              <p>摄影、逛展、旅行、音乐。</p>
            </section>
          </div>
        </div>
        <footer class="info-footer"><button class="back-to-fridge" type="button">← 返回冰箱</button></footer>
      </section>
    </main>
  `;
}

function aboutPage() {
  return `
    <main class="about-page">
      ${nav()}
      <section class="about-shell" aria-label="关于我">
        <header class="about-hero-copy">
          <p class="about-kicker">关于我</p>
          <h1>关于我</h1>
          <p class="about-lede">用设计让想法落地，<br />把复杂的思考变成看得见的表达。</p>
        </header>

        <div class="about-layout">
          <aside class="about-column about-left-column">
            <section class="about-section about-section-education">
              <div class="about-section-heading">
                <h2>教育经历</h2>
                <p>教育经历</p>
              </div>
              <div class="about-entry">
                <h3>南通大学 / 硕士</h3>
                <p>设计专业（视觉传达方向）</p>
                <p>2024 - 2027</p>
              </div>
              <div class="about-entry">
                <h3>南通理工学院 / 本科</h3>
                <p>视觉传达设计专业</p>
              </div>
            </section>

            <section class="about-section about-section-awards">
              <div class="about-section-heading">
                <h2>荣誉奖项</h2>
                <p>荣誉奖项</p>
              </div>
              <div class="about-entry">
                <p>中国研究生“文化中国”两创大赛</p>
                <p>国家三等奖</p>
              </div>
              <div class="about-entry">
                <p>ODA东方设计奖</p>
                <p>国家三等奖</p>
              </div>
            </section>
          </aside>

          <section class="about-column about-work-column">
            <div class="about-section-heading">
              <h2>工作经历</h2>
              <p>工作经历</p>
            </div>
            <article class="about-entry about-work-entry">
              <h3>苏州高新公共文化服务有限公司 - 平面设计</h3>
              <p class="about-date">2026.06 - 2026.09</p>
              <p>参与文旅活动、青少年文化中心及美术馆等项目的视觉设计，负责根据活动主题梳理视觉方向，完成主视觉设计与系列物料延展，包括活动海报、画册、舞台背景、展架及现场导视等。配合项目进度进行设计修改、文件整理和制作稿校对，并与项目及执行人员沟通落地要求，跟进物料制作与现场呈现。</p>
            </article>
            <article class="about-entry about-work-entry">
              <h3>上海吾所谓文化科技发展有限公司 - 品牌助理</h3>
              <p class="about-date">2025.09 - 2026.05</p>
              <p>参与品牌策划、IP形象策划、展厅陈列策划、空间规划及视觉设计项目，协助完成从前期调研、创意概念、方案撰写到视觉落地的完整流程；参与品牌手册、插画视觉、展览空间方案、活动传播物料等内容输出，并协助推进客户沟通、方案修改、物料整理和落地对接。</p>
            </article>
          </section>

          <aside class="about-column about-profile-column">
            <figure class="about-photo">
              <img src="${ABOUT_ME_IMAGE}" alt="个人照片" draggable="false" />
            </figure>
            <div class="about-profile-copy">
              <h2>南通大学 27届设计硕士研究生在读</h2>
              <p>擅长品牌策划、内容创意与视觉设计，关注设计背后的逻辑与传播价值。</p>
              <p>擅长从调研分析到创意构思，再到视觉落地的完整思考过程，相信设计不仅是表达，更是解决问题的方式。</p>
            </div>
          </aside>
        </div>

        <footer class="about-footer">
          <button class="back-to-fridge about-back" type="button">返回冰箱</button>
        </footer>
      </section>
    </main>
  `;
}

function portfolioCategoryPage(category) {
  return `
    <main class="category-page brand-category-page">
      ${nav()}
      <section class="brand-projects ${category.pageClass}">
        <div class="brand-index-layout">
          <aside class="brand-index-list">
            <div class="brand-projects-header">
              <h1>${escapeHtml(category.title)}</h1>
              <button class="back-to-fridge" type="button">返回冰箱</button>
            </div>
            <div class="brand-project-list" aria-label="${escapeHtml(category.title)}的作品">
              ${category.projects
                .map((project) => `
                  <button
                    class="brand-project-link"
                    type="button"
                    data-project-id="${project.id}"
                    data-project-path="${project.path}"
                    aria-label="查看${escapeHtml(project.title)}"
                  >
                    <span class="brand-project-index">${project.index}</span>
                    <span class="brand-project-copy">
                      <span class="brand-project-name">${escapeHtml(project.title)}</span>
                      ${project.meta ? `<span class="brand-project-meta">${escapeHtml(project.meta)}</span>` : ''}
                    </span>
                    <span class="brand-project-view">查看 ↓</span>
                  </button>
                `)
                .join('')}
            </div>
          </aside>
          <div class="brand-preview" aria-label="当前作品预览">
            ${category.projects
              .map((project, index) => `
                <figure class="brand-preview-image ${index === 0 ? 'is-default-preview' : ''}" data-project-id="${project.id}">
                  <img src="${project.preview}" alt="${escapeHtml(project.title)}预览" draggable="false" />
                </figure>
              `)
              .join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}

function projectDetailPage(project) {
  const { category } = project;
  const index = category.projects.findIndex((item) => item.id === project.id);
  const previousProject = category.projects[index - 1];
  const nextProject = category.projects[index + 1];
  const previousLabel = previousProject
    ? `${category.previousPrefix || '← '}${escapeHtml(previousProject.title)}`
    : '';
  const nextLabel = nextProject
    ? `${category.nextPrefix || ''}${escapeHtml(nextProject.title)}${category.nextPrefix ? '' : ' →'}`
    : '';

  return `
    <main class="project-detail-page">
      <header class="project-detail-header">
        <button class="back-to-project-category back-to-brand" type="button" data-category-path="${category.path}">← ${escapeHtml(category.title)}</button>
        <h1>${escapeHtml(project.title)}</h1>
      </header>
      <section class="project-image-container" aria-label="${escapeHtml(project.title)}">
        ${project.images
          .map((image, imageIndex) => `
            <img
              class="project-full-image"
              src="${image}"
              alt="${escapeHtml(project.title)} ${imageIndex + 1}"
              draggable="false"
            />
          `)
          .join('')}
      </section>
      <footer class="project-detail-footer">
        <div class="project-nav-row">
          ${previousProject ? `<button class="project-nav-link project-nav-prev" type="button" data-project-path="${previousProject.path}">${previousLabel}</button>` : '<span class="project-nav-spacer"></span>'}
          <button class="back-to-project-category back-to-brand" type="button" data-category-path="${category.path}">返回${escapeHtml(category.title)}</button>
          ${nextProject ? `<button class="project-nav-link project-nav-next" type="button" data-project-path="${nextProject.path}">${nextLabel}</button>` : '<span class="project-nav-spacer"></span>'}
        </div>
      </footer>
    </main>
  `;
}

function bindEvents() {
  app.querySelector('.open-handle-hotspot')?.addEventListener('click', () => setFridgeState('open'));
  app.querySelector('.close-fridge-button')?.addEventListener('click', () => closeFridge());
  app.querySelector('.back-to-fridge')?.addEventListener('click', () => {
    fridgeState = 'open';
    sessionStorage.setItem(FRIDGE_STATE_KEY, 'open');
    window.history.pushState({}, '', '#/');
    render();
  });

  app.querySelectorAll('.back-to-project-category').forEach((button) => {
    button.addEventListener('click', () => {
      fridgeState = 'open';
      sessionStorage.setItem(FRIDGE_STATE_KEY, 'open');
      navigate(button.dataset.categoryPath);
    });
  });

  app.querySelectorAll('.brand-project-link, .project-nav-link').forEach((button) => {
    button.addEventListener('click', () => {
      fridgeState = 'open';
      sessionStorage.setItem(FRIDGE_STATE_KEY, 'open');
      navigate(button.dataset.projectPath);
    });
  });

  app.querySelectorAll('[data-nav]').forEach((button) => {
    button.addEventListener('click', () => {
      fridgeState = 'open';
      sessionStorage.setItem(FRIDGE_STATE_KEY, 'open');
      navigate(button.dataset.nav);
    });
  });

  app.querySelectorAll('.food-hotspot').forEach((button) => {
    button.addEventListener('click', () => {
      fridgeState = 'open';
      sessionStorage.setItem(FRIDGE_STATE_KEY, 'open');
      navigate(button.dataset.path);
    });
  });

  const writeNote = app.querySelector('.write-note');
  const noteInput = app.querySelector('.note-input');

  bindStickerMagnetism();
  bindFridgeSheen();
  bindStickerEasterEggs();
  bindNoteDrag();

  writeNote?.addEventListener('click', (event) => {
    event.stopPropagation();
    isNotePopupOpen = true;
    isNoteEditing = !guestMessage;
    render();
  });

  writeNote?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      isNotePopupOpen = true;
      isNoteEditing = !guestMessage;
      render();
    }
  });

  noteInput?.addEventListener('click', (event) => event.stopPropagation());
  noteInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      isNotePopupOpen = false;
      isNoteEditing = false;
      render();
      return;
    }
    event.stopPropagation();
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      saveGuestMessage(noteInput.value);
      isNoteEditing = false;
      render();
    }
  });
  noteInput?.addEventListener('input', () => {
    const count = app.querySelector('.note-count');
    if (count) {
      count.textContent = `${noteInput.value.length} / 80`;
    }
  });

  app.querySelector('.note-save')?.addEventListener('click', (event) => {
    event.stopPropagation();
    saveGuestMessage(app.querySelector('.note-input')?.value || '');
    isNoteEditing = false;
    render();
  });

  app.querySelector('.note-clear')?.addEventListener('click', (event) => {
    event.stopPropagation();
    saveGuestMessage('');
    isNoteEditing = true;
    isNotePopupOpen = true;
    render();
  });

  app.querySelector('.note-edit')?.addEventListener('click', (event) => {
    event.stopPropagation();
    isNoteEditing = true;
    render();
  });

  app.querySelector('.note-close')?.addEventListener('click', (event) => {
    event.stopPropagation();
    isNotePopupOpen = false;
    isNoteEditing = false;
    render();
  });

  app.querySelector('.note-scrim')?.addEventListener('click', () => {
    isNotePopupOpen = false;
    isNoteEditing = false;
    render();
  });
}

function render() {
  const project = currentProject();
  app.innerHTML = project ? projectDetailPage(project) : isCategoryRoute() ? categoryPage() : homePage();
  bindEvents();
  updateClockOverlayPosition();
  if (isNoteEditing) {
    requestAnimationFrame(() => {
      const input = app.querySelector('.note-input');
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  }
}

function updateClockOverlayPosition() {
  const overlay = app.querySelector('.clock-overlay');
  if (!overlay) {
    return;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scale = Math.max(
    viewportWidth / ROOM_BACKGROUND.width,
    viewportHeight / ROOM_BACKGROUND.height,
  );
  const renderedWidth = ROOM_BACKGROUND.width * scale;
  const renderedHeight = ROOM_BACKGROUND.height * scale;
  const offsetX = (viewportWidth - renderedWidth) / 2;
  const offsetY = (viewportHeight - renderedHeight) / 2;
  const size = ROOM_BACKGROUND.clockSize * scale;

  overlay.style.setProperty('--clock-left', `${offsetX + ROOM_BACKGROUND.clockCenterX * scale - size / 2}px`);
  overlay.style.setProperty('--clock-top', `${offsetY + ROOM_BACKGROUND.clockCenterY * scale - size / 2}px`);
  overlay.style.setProperty('--clock-size', `${size}px`);
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });
}

function preloadIntroAssets() {
  const assets = [
    './public/assets/fridge/closed-empty.png',
    ...stickers.map((sticker) => sticker.src),
  ];
  return Promise.race([
    Promise.all(assets.map((src) => preloadImage(src))),
    new Promise((resolve) => setTimeout(resolve, 800)),
  ]);
}

function clearIntroTimers() {
  introTimers.forEach((timer) => clearTimeout(timer));
  introTimers = [];
}

function beginIntro() {
  if (introPhase !== 'preparing') {
    return;
  }
  introPhase = 'playing';
  render();
  introTimers.push(setTimeout(finishIntro, 2200));
}

function finishIntro() {
  if (!isIntroActive()) {
    return;
  }
  clearIntroTimers();
  sessionStorage.setItem(INTRO_PLAYED_KEY, 'true');
  introPhase = 'complete';
  render();
  introTimers.push(setTimeout(() => {
    if (introPhase === 'complete') {
      introPhase = 'idle';
      render();
    }
  }, 720));
}

function skipIntro(event) {
  if (!isIntroActive()) {
    return;
  }
  event?.preventDefault();
  event?.stopPropagation();
  clearIntroTimers();
  sessionStorage.setItem(INTRO_PLAYED_KEY, 'true');
  introPhase = 'idle';
  render();
}

function startApp() {
  if (shouldPlayIntro()) {
    isNotePopupOpen = false;
    isNoteEditing = false;
    introPhase = 'preparing';
    render();
    preloadIntroAssets().then(() => {
      introTimers.push(setTimeout(beginIntro, 180));
    });
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sessionStorage.setItem(INTRO_PLAYED_KEY, 'true');
  }
  render();
}

function bindStickerMagnetism() {
  app.querySelectorAll('.sticker').forEach((sticker, index) => {
    const resetSticker = () => {
      sticker.style.setProperty('--magnet-x', '0px');
      sticker.style.setProperty('--magnet-y', '0px');
      sticker.style.setProperty('--magnet-rotate', '0deg');
      sticker.style.setProperty('--sticker-scale', '1');
    };

    sticker.addEventListener('pointermove', (event) => {
      const rect = sticker.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const personality = 0.72 + (index % 4) * 0.08;
      sticker.style.setProperty('--magnet-x', `${(x * 3.2 * personality).toFixed(2)}px`);
      sticker.style.setProperty('--magnet-y', `${(y * 2.4 * personality).toFixed(2)}px`);
      sticker.style.setProperty('--magnet-rotate', `${(x * 4 * personality).toFixed(2)}deg`);
      sticker.style.setProperty('--sticker-scale', '1.012');
    });

    sticker.addEventListener('pointerleave', resetSticker);
  });
}

function bindFridgeSheen() {
  const closedLayer = app.querySelector('.closed-layer');
  if (!closedLayer || fridgeState !== 'closed') {
    return;
  }

  closedLayer.addEventListener('pointerenter', () => {
    closedLayer.style.setProperty('--sheen-opacity', '1');
  });

  closedLayer.addEventListener('pointermove', (event) => {
    const rect = closedLayer.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    closedLayer.style.setProperty('--sheen-shift', `${(x * 72).toFixed(1)}px`);
  });

  closedLayer.addEventListener('pointerleave', () => {
    closedLayer.style.setProperty('--sheen-opacity', '0');
  });
}

function bindStickerEasterEggs() {
  app.querySelector('[data-sticker="star"]')?.addEventListener('click', () => {
    const now = Date.now();
    starClicks = [...starClicks.filter((time) => now - time < 2000), now];
    if (starClicks.length >= 3) {
      starClicks = [];
      showEasterEgg('好啦，我看到你了。', 1800);
    }
  });

  app.querySelector('[data-sticker="lemon"]')?.addEventListener('click', () => {
    const now = Date.now();
    if (lemonFollowUpOpen) {
      lemonFollowUpOpen = false;
      lemonClicks = [];
      clearTimeout(lemonTimer);
      showEasterEgg('把它们放进冰箱吧。', 2000);
      return;
    }

    lemonClicks = [...lemonClicks.filter((time) => now - time < 2000), now];
    if (lemonClicks.length >= 2) {
      lemonClicks = [];
      lemonFollowUpOpen = true;
      showEasterEgg('生活给了你柠檬……', 1200, false);
      clearTimeout(lemonTimer);
      lemonTimer = setTimeout(() => {
        lemonFollowUpOpen = false;
      }, 3000);
    }
  });
}

function bindNoteDrag() {
  const popup = app.querySelector('.note-popup');
  const handle = app.querySelector('.note-drag-handle');
  if (!popup || !handle || window.matchMedia('(max-width: 900px)').matches) {
    return;
  }

  handle.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const rect = popup.getBoundingClientRect();
    const shiftX = event.clientX - rect.left;
    const shiftY = event.clientY - rect.top;
    popup.classList.add('is-positioned', 'is-dragging');
    popup.style.left = `${rect.left}px`;
    popup.style.top = `${rect.top}px`;
    handle.setPointerCapture?.(event.pointerId);

    const movePopup = (moveEvent) => {
      const maxX = window.innerWidth - 40;
      const maxY = window.innerHeight - 40;
      const minX = 40 - rect.width;
      const minY = 40 - rect.height;
      const x = Math.min(maxX, Math.max(minX, moveEvent.clientX - shiftX));
      const y = Math.min(maxY, Math.max(minY, moveEvent.clientY - shiftY));
      popup.style.left = `${x}px`;
      popup.style.top = `${y}px`;
    };

    const dropPopup = () => {
      document.removeEventListener('pointermove', movePopup);
      document.removeEventListener('pointerup', dropPopup);
      popup.classList.remove('is-dragging');
      popup.classList.add('just-dropped');
      saveNotePosition(parseFloat(popup.style.left), parseFloat(popup.style.top));
      setTimeout(() => popup.classList.remove('just-dropped'), 220);
    };

    document.addEventListener('pointermove', movePopup);
    document.addEventListener('pointerup', dropPopup);
  });
}

function scheduleOpenWake() {
  setTimeout(() => {
    if (fridgeState !== 'open') {
      return;
    }
    const stage = app.querySelector('.fridge-stage');
    stage?.classList.add('is-waking');
    setTimeout(() => stage?.classList.remove('is-waking'), 520);
  }, 780);
}

function closeFridge() {
  setFridgeState('closed');
  setTimeout(() => {
    if (fridgeState !== 'closed') {
      return;
    }
    const options = ['star', 'yuanyuan', 'lemon'];
    const stickerId = options[Math.floor(Math.random() * options.length)];
    const sticker = app.querySelector(`[data-sticker="${stickerId}"]`);
    sticker?.classList.add(`close-feedback-${stickerId}`);
    setTimeout(() => sticker?.classList.remove(`close-feedback-${stickerId}`), 780);
  }, 680);
}

function showEasterEgg(message, duration, autoClear = true) {
  easterEggMessage = message;
  clearTimeout(easterEggTimer);
  render();
  if (autoClear) {
    easterEggTimer = setTimeout(() => {
      easterEggMessage = '';
      render();
    }, duration);
  } else {
    easterEggTimer = setTimeout(() => {
      if (easterEggMessage === message) {
        easterEggMessage = '';
        render();
      }
    }, duration);
  }
}

window.addEventListener('popstate', render);
window.addEventListener('hashchange', render);
window.addEventListener('resize', updateClockOverlayPosition);
window.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && isIntroActive()) {
    skipIntro(event);
    return;
  }
  if (event.key === 'Escape' && isNotePopupOpen) {
    isNotePopupOpen = false;
    isNoteEditing = false;
    render();
  }
});
window.addEventListener('pointerdown', skipIntro, { capture: true });
startApp();
