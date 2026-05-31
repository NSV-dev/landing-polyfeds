const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cv": "View CV",
    "hero.role": "Senior Designer",
    "hero.name": "POLINA<br />FEDOSOVA",
    "hero.cta": "Get in touch",
    "hero.discipline": "Graphics /<br />Communication",
    "projects.title": "Selected projects",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.reg.title": "Reg.ru: expanding<br />the brand identity challenge",
    "projects.reg.problem": "As Reg.ru expanded its services, the brand's visual communication system became inconsistent across touchpoints.",
    "projects.reg.solution": "We built a flexible identity toolkit with modular graphics, clear hierarchy, and reusable layouts for social and product communication.",
    "projects.day.title": "Entrepreneur's Day:<br />special campaign for Reg.solutions challenge",
    "projects.day.problem": "The campaign needed to connect with entrepreneurs using a bold, digital-first voice.",
    "projects.day.solution": "We created a bright campaign system for landing pages, banners, social media and CRM communication.",
    "projects.barcelona.title": "Barcelona<br />Visual Diary",
    "projects.barcelona.problem": "A personal travel research needed a visual language that could hold observation, printed matter and urban rhythm together.",
    "projects.barcelona.solution": "I turned city fragments into a layered diary with posters, spreads and image systems.",
    "projects.fedosov.title": "FEDOSOV:<br />Branding & Visual System",
    "projects.fedosov.problem": "The brand needed a coherent identity for premium products across different formats and environments.",
    "projects.fedosov.solution": "I created a tactile visual system with packaging, labels and adaptable brand graphics.",
    "about.title": "Concept-driven clarity",
    "about.body": "I turn complex tasks into strong visual ideas that communicate clearly without unnecessary noise. I always start with meaning first, then build the design around it.",
    "about.hierarchy": "Hierarchy",
    "about.hierarchyBody": "I create visual systems with clear hierarchy, where primary and secondary elements are instantly recognizable.",
    "about.systems": "Systems thinking",
    "about.systemsBody": "I approach design decisions through logic, context and business goals.",
    "experience.title": "Experience",
    "experience.item1.title": "Communication Designer",
    "experience.item1.body": "Working with the brand's visual language across digital, merchandise, and event communication.",
    "experience.item2.title": "Multidisciplinary Designer",
    "experience.item2.body": "Taking care of identity, landing pages, presentations and complete visual systems.",
    "experience.item3.title": "Graphic / Communication Designer",
    "experience.item3.body": "Focused on external brand communication across digital platforms and social media.",
    "experience.cta": "View full experience in CV →",
    "contact.title": "Let's work<br />together ;)",
    "contact.cta": "Contact me"
  },
  ru: {
    "nav.projects": "Проекты",
    "nav.about": "Обо мне",
    "nav.contact": "Контакты",
    "nav.cv": "CV",
    "hero.role": "Senior дизайнер",
    "hero.name": "ПОЛИНА<br />ФЕДОСОВА",
    "hero.cta": "Написать",
    "hero.discipline": "Графика /<br />коммуникация",
    "projects.title": "Избранные проекты",
    "projects.problem": "Задача",
    "projects.solution": "Решение",
    "projects.reg.title": "Reg.ru: новая айдентика —<br />развитие системы",
    "projects.reg.problem": "При расширении сервисов Reg.ru визуальная коммуникация бренда стала выглядеть неоднородно на разных носителях.",
    "projects.reg.solution": "Мы собрали гибкую систему с модульной графикой, понятной иерархией и шаблонами для продукта и коммуникаций.",
    "projects.day.title": "День предпринимателя:<br />спецпроект для Reg.solutions",
    "projects.day.problem": "Кампании нужно было говорить с предпринимателями ярко, понятно и в digital-среде.",
    "projects.day.solution": "Мы сделали визуальную систему для лендинга, баннеров, соцсетей и CRM-коммуникаций.",
    "projects.barcelona.title": "Визуальный<br />дневник Барселоны",
    "projects.barcelona.problem": "Личному исследованию города нужен был язык, объединяющий наблюдения, печатную графику и ритм улиц.",
    "projects.barcelona.solution": "Я превратила городские фрагменты в многослойный дневник с постерами, разворотами и визуальными системами.",
    "projects.fedosov.title": "FEDOSOV:<br />брендинг и система",
    "projects.fedosov.problem": "Бренду премиальных продуктов требовалась целостная айдентика для разных форматов и сред.",
    "projects.fedosov.solution": "Я создала тактильную визуальную систему с упаковкой, этикетками и адаптивной бренд-графикой.",
    "about.title": "Дизайнер с ясной идеей",
    "about.body": "Я превращаю сложные задачи в сильные визуальные решения без лишнего шума. Сначала формулирую смысл, потом строю вокруг него дизайн.",
    "about.hierarchy": "Иерархия",
    "about.hierarchyBody": "Создаю визуальные системы, где главное и второстепенное считываются быстро и уверенно.",
    "about.systems": "Системное мышление",
    "about.systemsBody": "Смотрю на дизайн через логику, контекст и бизнес-задачи.",
    "experience.title": "Опыт работы",
    "experience.item1.title": "Communication Designer",
    "experience.item1.body": "Работаю с визуальным языком бренда в digital, мерче и event-коммуникациях.",
    "experience.item2.title": "Мультидисциплинарный дизайнер",
    "experience.item2.body": "Разрабатываю айдентику, лендинги, презентации и цельные визуальные системы.",
    "experience.item3.title": "Graphic / Communication Designer",
    "experience.item3.body": "Фокус на внешней бренд-коммуникации для digital-платформ и социальных сетей.",
    "experience.cta": "Ознакомиться с опытом детальнее в CV →",
    "contact.title": "Давайте работать<br />вместе ;)",
    "contact.cta": "Связаться"
  }
};

const langToggle = document.querySelector("[data-lang-toggle]");
const currentLang = document.querySelector("[data-current-lang]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function detectInitialLanguage() {
  const saved = localStorage.getItem("language");
  if (saved === "ru" || saved === "en") return saved;

  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const isRussianLocale = browserLangs.some((lang) => /^ru\b/i.test(lang));
  return isRussianLocale ? "ru" : "en";
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
  currentLang.textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = dictionary[node.dataset.i18n] || "";
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = dictionary[node.dataset.i18nHtml] || "";
  });
}

langToggle.addEventListener("click", () => {
  const nextLang = document.documentElement.lang === "ru" ? "en" : "ru";
  applyLanguage(nextLang);
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
});

function createBlobAnimator() {
  const path = document.querySelector("[data-blob-path]");
  if (!path) return;

  const shapes = [
    [
      [344, 14],
      [420, 42],
      [516, 124],
      [582, 214],
      [596, 350],
      [552, 428],
      [418, 474],
      [302, 526],
      [226, 500],
      [92, 420],
      [82, 336],
      [102, 176],
      [126, 126],
      [254, 58]
    ],
    [
      [326, 30],
      [406, 38],
      [520, 104],
      [588, 196],
      [600, 336],
      [566, 420],
      [430, 486],
      [320, 516],
      [220, 486],
      [102, 432],
      [76, 350],
      [92, 162],
      [138, 100],
      [248, 72]
    ],
    [
      [370, 18],
      [448, 72],
      [526, 148],
      [574, 234],
      [604, 358],
      [540, 430],
      [426, 468],
      [286, 512],
      [210, 486],
      [84, 406],
      [86, 320],
      [100, 180],
      [150, 112],
      [278, 50]
    ],
    [
      [360, 6],
      [434, 56],
      [504, 132],
      [568, 220],
      [590, 362],
      [532, 438],
      [398, 486],
      [300, 532],
      [230, 502],
      [96, 426],
      [70, 342],
      [98, 188],
      [160, 106],
      [290, 32]
    ]
  ];

  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (t) => 0.5 - Math.cos(t * Math.PI) / 2;

  function pointsToPath(points) {
    const size = points.length;
    const smoothing = 0.18;
    let d = `M ${points[0][0]} ${points[0][1]}`;

    for (let i = 0; i < size; i += 1) {
      const current = points[i];
      const next = points[(i + 1) % size];
      const previous = points[(i - 1 + size) % size];
      const afterNext = points[(i + 2) % size];

      const cp1 = [
        current[0] + (next[0] - previous[0]) * smoothing,
        current[1] + (next[1] - previous[1]) * smoothing
      ];
      const cp2 = [
        next[0] - (afterNext[0] - current[0]) * smoothing,
        next[1] - (afterNext[1] - current[1]) * smoothing
      ];

      d += ` C ${cp1[0]} ${cp1[1]}, ${cp2[0]} ${cp2[1]}, ${next[0]} ${next[1]}`;
    }

    return `${d} Z`;
  }

  function render(time) {
    const duration = 1900;
    const progress = (time % duration) / duration;
    const fromIndex = Math.floor(time / duration) % shapes.length;
    const toIndex = (fromIndex + 1) % shapes.length;
    const amount = ease(progress);

    const points = shapes[fromIndex].map((point, index) => [
      lerp(point[0], shapes[toIndex][index][0], amount),
      lerp(point[1], shapes[toIndex][index][1], amount)
    ]);

    path.setAttribute("d", pointsToPath(points));
    requestAnimationFrame(render);
  }

  path.setAttribute("d", pointsToPath(shapes[0]));
  requestAnimationFrame(render);
}

applyLanguage(detectInitialLanguage());
createBlobAnimator();
