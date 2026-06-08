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

function createCubeFrameAnimator() {
  const cubePath = document.querySelector("[data-cube-path]");
  if (!cubePath) return;

  const frameData = [
    { viewBox: "0 0 503 541", d: "M3.52096 210.833L15.6139 339.321C19.2533 377.99 21.073 397.324 31.6264 412.528C42.1798 427.733 59.6564 436.2 94.6094 453.134L214.004 510.977C258.917 532.736 281.373 543.616 304.098 539.444C326.822 535.273 343.95 517.127 378.207 480.836L451.148 403.561L451.149 403.561C468.095 385.608 476.568 376.632 481.468 365.569C486.369 354.506 487.324 342.199 489.234 317.586L499.224 188.872C503.571 132.859 505.745 104.852 490.981 84.0249C476.218 63.1978 449.071 55.9753 394.778 41.5304L274.466 9.52077C247.477 2.34028 233.983 -1.24996 220.469 0.393614C206.956 2.03719 194.715 8.75739 170.235 22.1978L76.1275 73.8645C36.6912 95.5158 16.9731 106.341 7.08532 124.994C-2.80246 143.647 -0.694658 166.043 3.52096 210.833Z" },
    { viewBox: "0 0 489 465", d: "M0.849847 161.1L4.23159 278.231C5.58731 325.189 6.26517 348.667 19.206 366.368C32.1468 384.069 54.3132 391.838 98.6461 407.376L220.06 449.93C250.249 460.51 265.343 465.801 280.748 464.34C296.153 462.879 309.984 454.846 337.647 438.78L415.136 393.776C448.524 374.384 465.219 364.688 474.594 348.845C483.97 333.002 484.434 313.702 485.363 275.102L488.229 155.989C489.734 93.4756 490.486 62.219 471.97 41.4228C453.455 20.6265 422.321 17.7589 360.053 12.0237L241.987 1.14918C232.603 0.284851 227.911 -0.147312 223.217 0.0456207C218.523 0.238553 213.882 1.05431 204.6 2.68583L117.516 17.9936C60.1987 28.0689 31.5401 33.1066 14.9354 53.4745C-1.6694 73.8424 -0.829652 102.928 0.849847 161.1Z" },
    { viewBox: "0 0 488 446", d: "M2.4297 284.164L9.03984 173.516C11.9369 125.022 13.3854 100.775 27.5591 83.2045C41.7328 65.6335 65.1241 59.0869 111.907 45.9937L239.1 10.3954C266.976 2.59366 280.914 -1.30721 294.895 0.393109C308.877 2.09343 321.473 9.22131 346.667 23.4771L408.74 58.6014C441.856 77.3406 458.415 86.7102 467.942 102.178C477.469 117.646 478.386 136.649 480.22 174.656L485.713 288.483C488.848 353.453 490.416 385.938 471.374 407.442C452.333 428.946 419.897 431.322 355.025 436.074L231.147 445.148L231.146 445.148C223.239 445.727 219.285 446.016 215.332 445.863C211.38 445.709 207.46 445.113 199.623 443.922L199.621 443.922L122.129 432.143C61.6298 422.947 31.38 418.349 14.1679 397.071C-3.04419 375.792 -1.21956 345.249 2.4297 284.164Z" },
    { viewBox: "0 0 505 530", d: "M5.30053 311.639L19.6047 197.92C24.0332 162.714 26.2475 145.11 35.8528 131.036C45.458 116.963 61.0438 108.485 92.2152 91.5306L200.168 32.8132C243.416 9.28975 265.04 -2.47196 287.69 0.435192C310.34 3.34234 328.293 20.1837 364.198 53.8665L438.362 123.439C456.532 140.485 465.618 149.008 471.198 159.864C476.779 170.719 478.423 183.068 481.711 207.764L497.479 326.208C504.903 381.979 508.616 409.865 494.984 431.486C481.352 453.107 454.591 461.78 401.068 479.125L285.273 516.652C256.627 525.935 242.304 530.577 227.75 529.189C213.197 527.801 200.009 520.535 173.634 506.004L77.2418 452.897L77.2416 452.897C36.6139 430.514 16.3 419.322 6.45845 399.998C-3.38311 380.673 -0.488561 357.662 5.30053 311.639Z" },
    { viewBox: "0 0 471 498", d: "M3.93169 323.484L14.7016 195.014C16.1348 177.918 16.8514 169.37 19.5492 161.316C22.247 153.261 26.8233 146.006 35.976 131.495L71.5536 75.0917C97.8727 33.3663 111.032 12.5036 132.266 3.99266C153.5 -4.51827 177.426 1.48004 225.278 13.4767L344.575 43.3849C390.403 54.8743 413.317 60.619 427.847 77.1875C442.376 93.7561 445.078 117.224 450.484 164.161L465.736 296.595C470.484 337.817 472.858 358.429 464.697 376.301C456.537 394.174 439.408 405.88 405.149 429.293L345.641 469.962L345.64 469.962C323.048 485.402 311.752 493.122 298.738 496.109C285.725 499.095 272.193 497.073 245.129 493.029L123.741 474.891C61.719 465.623 30.7083 460.99 13.3909 439.105C-3.92644 417.22 -1.30706 385.975 3.93169 323.484Z" },
    { viewBox: "0 0 408 475", d: "M1.31289 272.21L16.8947 126.186C23.2973 66.1846 26.4985 36.1839 46.6238 18.092C66.749 0 96.92 0 157.262 0H249.23C309.22 0 339.214 0 359.301 17.9433C379.388 35.8866 382.759 65.691 389.5 125.3V125.3L405.856 269.916C407.351 283.142 408.099 289.754 407.608 296.352C407.117 302.949 405.398 309.378 401.961 322.237L389.204 369.957C375.747 420.298 369.018 445.468 350.005 460.066C330.992 474.664 304.938 474.664 252.829 474.664H148.076C89.4472 474.664 60.133 474.664 40.201 457.296C20.2689 439.927 16.2588 410.888 8.23861 352.811L1.84308 306.499C0.662993 297.953 0.0729501 293.68 0.00643009 289.378C-0.0600899 285.076 0.39757 280.787 1.31289 272.21Z" },
    { viewBox: "0 0 491 532", d: "M5.29671 302.391L21.4304 184.952C26.6657 146.844 29.2833 127.791 40.3153 113.131C51.3472 98.472 68.9317 90.6814 104.101 75.1003L211.192 27.6547C259.129 6.41673 283.098 -4.20224 306.498 1.54713C329.898 7.2965 346.217 27.8139 378.854 68.8485L437.71 142.85C449.688 157.909 455.676 165.439 459.414 174.176C463.152 182.914 464.461 192.445 467.08 211.508L467.08 211.508L483.237 329.115C491.115 386.457 495.053 415.128 480.861 437.106C466.668 459.084 438.915 467.289 383.41 483.699L383.409 483.699L264.775 518.774C230.744 528.835 213.728 533.866 196.982 530.709C180.236 527.552 166.22 516.671 138.188 494.909L58.5825 433.111C27.1638 408.72 11.4544 396.524 4.31547 379.011C-2.82347 361.498 -0.116741 341.796 5.29671 302.391Z" }
  ];
  const sampleCount = 96;
  const targetWidth = 503;
  const targetHeight = 541;
  const samplerSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const samplerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

  samplerSvg.style.position = "absolute";
  samplerSvg.style.width = "0";
  samplerSvg.style.height = "0";
  samplerSvg.style.overflow = "hidden";
  samplerSvg.appendChild(samplerPath);
  document.body.appendChild(samplerSvg);

  function samplePath(frame) {
    const [, , width, height] = frame.viewBox.split(" ").map(Number);
    const scale = Math.min(targetWidth / width, targetHeight / height);
    const offsetX = (targetWidth - width * scale) / 2;
    const offsetY = (targetHeight - height * scale) / 2;

    samplerPath.setAttribute("d", frame.d);
    const length = samplerPath.getTotalLength();

    return Array.from({ length: sampleCount }, (_, index) => {
      const point = samplerPath.getPointAtLength((length * index) / sampleCount);
      return {
        x: offsetX + point.x * scale,
        y: offsetY + point.y * scale
      };
    });
  }

  function alignmentScore(source, target) {
    return source.reduce((score, point, index) => {
      const targetPoint = target[index];
      return score + Math.hypot(point.x - targetPoint.x, point.y - targetPoint.y);
    }, 0);
  }

  function shiftPoints(points, shift) {
    return points.map((_, index) => points[(index + shift) % points.length]);
  }

  function alignFrame(previous, current) {
    const candidates = [current, [...current].reverse()];
    let bestFrame = current;
    let bestScore = Infinity;

    candidates.forEach((candidate) => {
      for (let shift = 0; shift < candidate.length; shift += 1) {
        const shifted = shiftPoints(candidate, shift);
        const score = alignmentScore(previous, shifted);

        if (score < bestScore) {
          bestScore = score;
          bestFrame = shifted;
        }
      }
    });

    return bestFrame;
  }

  const sampledFrames = frameData.map(samplePath);
  function alignSequence(firstFrame) {
    return sampledFrames.reduce((alignedFrames, frame, index) => {
      if (index === 0) return [firstFrame];
      return [...alignedFrames, alignFrame(alignedFrames[index - 1], frame)];
    }, []);
  }

  let frames = alignSequence(sampledFrames[0]);
  for (let index = 0; index < 3; index += 1) {
    frames = alignSequence(alignFrame(frames[frames.length - 1], frames[0]));
  }
  samplerSvg.remove();

  function pointsToPath(points) {
    const [first, ...rest] = points;
    return `M ${first.x.toFixed(2)} ${first.y.toFixed(2)} ${rest
      .map((point) => `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
      .join(" ")} Z`;
  }

  function easeInOutCubic(value) {
    return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
  }

  let frameIndex = 0;
  let transitionStart = performance.now();
  const transitionDuration = 520;
  const pauseDuration = 90;

  cubePath.setAttribute("d", pointsToPath(frames[0]));

  function render(now) {
    if (document.hidden) {
      transitionStart = now;
      requestAnimationFrame(render);
      return;
    }

    const elapsed = now - transitionStart;
    const nextIndex = (frameIndex + 1) % frames.length;

    if (elapsed >= transitionDuration + pauseDuration) {
      frameIndex = nextIndex;
      transitionStart = now;
      cubePath.setAttribute("d", pointsToPath(frames[frameIndex]));
      requestAnimationFrame(render);
      return;
    }

    const progress = Math.min(elapsed / transitionDuration, 1);
    const easedProgress = easeInOutCubic(progress);
    const morphedPoints = frames[frameIndex].map((point, index) => {
      const nextPoint = frames[nextIndex][index];
      return {
        x: point.x + (nextPoint.x - point.x) * easedProgress,
        y: point.y + (nextPoint.y - point.y) * easedProgress
      };
    });

    cubePath.setAttribute("d", pointsToPath(morphedPoints));
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

applyLanguage(detectInitialLanguage());
createCubeFrameAnimator();
