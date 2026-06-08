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
    "nav.contact": "Связаться",
    "nav.cv": "Смотреть CV",
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

function createCubeProjectionAnimator() {
  const shape = document.querySelector("[data-cube-projection]");
  if (!shape) return;

  const vertices = [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => ({ x, y, z }))));

  function rotate(vertex, angleX, angleY) {
    const tiltZ = 0.08;
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosZ = Math.cos(tiltZ);
    const sinZ = Math.sin(tiltZ);

    const yRotated = {
      x: vertex.x * cosY + vertex.z * sinY,
      y: vertex.y,
      z: -vertex.x * sinY + vertex.z * cosY
    };
    const xRotated = {
      x: yRotated.x,
      y: yRotated.y * cosX - yRotated.z * sinX,
      z: yRotated.y * sinX + yRotated.z * cosX
    };

    return {
      x: xRotated.x * cosZ - xRotated.y * sinZ,
      y: xRotated.x * sinZ + xRotated.y * cosZ,
      z: xRotated.z
    };
  }

  function project(vertex) {
    const perspective = 4.6;
    const scale = 780 / (perspective - vertex.z);

    return {
      x: 320 + vertex.x * scale,
      y: 280 + vertex.y * scale * 1.06
    };
  }

  function cross(origin, a, b) {
    return (a.x - origin.x) * (b.y - origin.y) - (a.y - origin.y) * (b.x - origin.x);
  }

  function convexHull(points) {
    const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y);
    const lower = [];
    const upper = [];

    sorted.forEach((point) => {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
        lower.pop();
      }
      lower.push(point);
    });

    [...sorted].reverse().forEach((point) => {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
        upper.pop();
      }
      upper.push(point);
    });

    upper.pop();
    lower.pop();
    return lower.concat(upper);
  }

  function distance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  function pointToward(from, to, amount) {
    const length = distance(from, to);
    const ratio = length === 0 ? 0 : amount / length;

    return {
      x: from.x + (to.x - from.x) * ratio,
      y: from.y + (to.y - from.y) * ratio
    };
  }

  function roundedHullPath(points) {
    const radius = 36;
    const rounded = points.map((point, index) => {
      const previous = points[(index - 1 + points.length) % points.length];
      const next = points[(index + 1) % points.length];
      const cornerRadius = Math.min(radius, distance(point, previous) * 0.32, distance(point, next) * 0.32);

      return {
        point,
        start: pointToward(point, previous, cornerRadius),
        end: pointToward(point, next, cornerRadius)
      };
    });

    const first = rounded[0];
    let path = `M ${first.start.x.toFixed(1)} ${first.start.y.toFixed(1)}`;

    rounded.forEach((corner, index) => {
      path += ` Q ${corner.point.x.toFixed(1)} ${corner.point.y.toFixed(1)} ${corner.end.x.toFixed(1)} ${corner.end.y.toFixed(1)}`;
      const next = rounded[(index + 1) % rounded.length];
      path += ` L ${next.start.x.toFixed(1)} ${next.start.y.toFixed(1)}`;
    });

    return `${path} Z`;
  }

  function render(time) {
    const angleX = -0.28 + time * 0.00052;
    const angleY = time * 0.000112;
    const points = convexHull(vertices.map((vertex) => project(rotate(vertex, angleX, angleY))));

    shape.setAttribute("d", roundedHullPath(points));
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

applyLanguage(detectInitialLanguage());
createCubeProjectionAnimator();
