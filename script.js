// NAVBAR

gsap.registerPlugin(ScrollTrigger);

//  <!-- DROPDOWN JS FOR HOME -->
const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

// Initial state
gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

// <!-- DROPDOWN JS FOR HOME in mobile-->
const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

// Initial state
gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

// Close on outside click
document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

// <!-- ROUNDED NAVBAR ANIMATION JS -->
const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

/* ---------- INITIAL STYLE ---------- */
gsap.set(navbar, {
  margin: "1rem",
  borderRadius: "10px",
});

/* ---------- SCROLL DIRECTION ---------- */
window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.to(navbar, { y: 0, duration: 1.3, ease: "power2.out" });
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(navbar, { y: 0, duration: 1.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

/* ---------- HOME SECTION STYLE CHANGE ---------- */
ScrollTrigger.create({
  trigger: "#home",
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      margin: 0,
      borderRadius: 0,
      //   color: "black",
      //   backgroundColor: "white",
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      margin: "1rem",
      borderRadius: "10px",
      duration: 0.5,
    });
  },
});

// <!-- MOBILE MENU JS WITH JQUERY -->
// initial state (important)
gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  // show menu
  $(".mobile-menu").removeClass("translate-x-full").addClass("translate-x-0");

  // animate links one by one
  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  // hide links first
  gsap.to(".menu-link", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  // hide menu after animation
  setTimeout(() => {
    $(".mobile-menu").removeClass("translate-x-0").addClass("translate-x-full");
  }, 400);
});

// NAV HOVER
document.querySelectorAll(".nav-hover").forEach((link) => {
  let text = link.querySelector("span");

  link.addEventListener("mouseenter", () => {
    gsap.to(text, { y: "-100%", duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(text, { y: "0%", duration: 0.3 });
  });
});

// HOME

window.addEventListener("load", () => {
  /* initial state */
  gsap.set(".stackly-text span", { y: 80, opacity: 0 });
  gsap.set(".stackly-bar", { width: "0%" });

  const tl = gsap.timeline();

  /* letters rise */
  tl.to(".stackly-text span", {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.9,
    ease: "power3.out",
  })

    /* glow pulse */
    .to(
      ".stackly-text span",
      {
        color: "#A5C89E",
        stagger: 0.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      },
      "-=.4",
    )

    /* loading bar */
    .to(
      ".stackly-bar",
      {
        width: "100%",
        duration: 1.2,
        ease: "power2.out",
      },
      "-=.3",
    )

    /* slight pause */
    .to({}, { duration: 0.3 })

    /* exit animation */
    .to(
      ".stackly-text span",
      {
        y: -100,
        opacity: 0,
        color: "#A5C89E",
        stagger: 0.05,
        duration: 0.3,
      },
      "-=.4",
    )

    /* loading bar */
    .to(
      ".stackly-bar",
      {
        width: "0%",
        opacity: 0,
        duration: 1.0,
        ease: "power2.out",
      },
      "-=.3",
    )

    .to("#stack-loader", {
      scaleY: 0,
      opacity: 0,
      duration: 1.6,
      ease: "power2.inOut",
    })

    .set("#stack-loader", { display: "none" });

  /* call your hero animation here if needed */
  gsap.timeline({
    delay: 3.9,
    onComplete: startPageAnimations, // ← runs everything after loader
  });
});

function startPageAnimations() {
  /* Card Entrance */
  gsap.from(".profile-card", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".profile-wrapper",
      start: "top 85%",
    },
  });

  /* Image subtle zoom */
  gsap.from(".profile-image", {
    scale: 1.1,
    duration: 1.5,
    ease: "power3.out",
  });

  /* Bottom content fade up */
  gsap.from(".profile-content", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  /* Floating social micro motion */
  gsap.to(".card-social", {
    y: -6,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut",
    stagger: 0.2,
  });

  /* Hero Badge */
  gsap.from(".hero-badge", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".creative-top",
      start: "top 80%",
    },
  });

  /* Heading reveal */
  gsap.from(".creative-heading", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".creative-section",
      start: "top 80%",
    },
  });

  /* Stats stagger */
  gsap.from(".creative-stats .stats", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".creative-stats",
      start: "top 85%",
    },
  });

  /* rotating text */
  gsap.to(".round-text svg", {
    rotate: 360,
    duration: 12,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%",
  });
}

//ABOUT

/* Heading Reveal */
gsap.from(".about-heading", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
  },
});

/* Paragraph */
gsap.from(".about-desc", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
  },
});

/* Features Stagger */
gsap.from(".feature-item", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-features",
    start: "top 85%",
  },
});

/* Image Animation */
gsap.from(".about-image", {
  scale: 1.1,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-image",
    start: "top 80%",
  },
});

/* Floating Tags Smooth Motion */
gsap.to(".floating-tag", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
});

gsap.to(".floating-tag2", {
  y: -12,
  repeat: -1,
  yoyo: true,
  duration: 2.5,
  ease: "sine.inOut",
});

//EXPERIENCE

/* HEADER ANIMATION */
gsap.from(".exp-header", {
  scrollTrigger: { trigger: ".experience-section", start: "top 80%" },
  y: 60,
  opacity: 0,
  duration: 1,
});

/* CARD STAGGER */
gsap.from(".exp-card", {
  scrollTrigger: { trigger: ".exp-grid", start: "top 85%" },
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

// PROGRESS

// Smooth reveal animation
gsap.from(".skill-card", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section",
    start: "top 80%",
  },
});

// Progress Fill Animations
gsap.to(".progress-65", {
  width: "65%",
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section",
    start: "top 75%",
  },
});

gsap.to(".progress-82", {
  width: "82%",
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section",
    start: "top 75%",
  },
});

gsap.to(".progress-72", {
  width: "72%",
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section",
    start: "top 75%",
  },
});

gsap.to(".progress-90", {
  width: "90%",
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section",
    start: "top 75%",
  },
});

//SERVICES

/* Heading Animation */
gsap.from(".services-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 80%",
  },
});

/* Stagger Cards */
gsap.from(".service-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 85%",
  },
});

// BLOGS

/* Heading Animation */
gsap.from(".blog-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 80%",
  },
});

/* Stagger Cards */
gsap.from(".blog-card", {
  y: 100,
  opacity: 0,
  stagger: 0.25,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".blog-grid",
    start: "top 85%",
  },
});

// FAQ

/* INITIAL COLLAPSE */
document.querySelectorAll(".faq-content").forEach((el) => {
  gsap.set(el, { height: 0 });
});

/* ACCORDION */
document.querySelectorAll(".faq-row").forEach((row) => {
  row.addEventListener("click", () => {
    let content = row.querySelector(".faq-content");
    let icon = row.querySelector(".faq-icon");

    document.querySelectorAll(".faq-content").forEach((el) => {
      if (el !== content) {
        gsap.to(el, { height: 0, duration: 0.3 });
      }
    });

    document.querySelectorAll(".faq-icon").forEach((ic) => {
      if (ic !== icon) {
        ic.classList.remove("rotate");
      }
    });

    if (content.offsetHeight === 0) {
      gsap.to(content, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      });
      icon.classList.add("rotate");
    } else {
      gsap.to(content, {
        height: 0,
        duration: 0.3,
      });
      icon.classList.remove("rotate");
    }
  });
});

gsap.set(document.querySelector(".faq-row:first-child .faq-content"), {
  height: "auto",
});

/* SCROLL ANIMATION */
gsap.from(".faq-left", {
  scrollTrigger: { trigger: ".faq-wrapper", start: "top 80%" },
  y: 80,
  opacity: 0,
  duration: 1,
});

gsap.from(".faq-row", {
  scrollTrigger: { trigger: ".faq-right", start: "top 85%" },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
});

// CONTACT

/* initial */
gsap.set(".contact-left, .form-group, .form-submit", { opacity: 0, y: 50 });

/* animate left */
gsap.to(".contact-left", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: { trigger: ".contact-section", start: "top 75%" },
});

/* animate form */
gsap.to(".form-group", {
  opacity: 1,
  y: 0,
  stagger: 0.15,
  duration: 0.9,
  scrollTrigger: { trigger: ".contact-form-wrap", start: "top 80%" },
});

gsap.to(".form-submit", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  scrollTrigger: { trigger: ".contact-form-wrap", start: "top 80%" },
});

// FOR< VALIDATION

const form = document.getElementById("contactForm");
const emailField = document.getElementById("emailField");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = emailField.value.trim().toLowerCase();
  const parts = value.split("@");

  /* gmail validation */
  if (parts.length !== 2 || parts[0] === "" || parts[1] !== "gmail.com") {
    emailError.classList.remove("hidden");
    return;
  }

  /* hide error if valid */
  emailError.classList.add("hidden");

  /* clear fields */
  form.reset();

  /* redirect */
  window.location.href = "./404.html";
});

// PORTFOLIO

/* HEADER ANIMATION */
gsap.from(".portfolio-header", {
  scrollTrigger: { trigger: ".portfolio-section", start: "top 80%" },
  y: 50,
  opacity: 0,
  duration: 1,
});

/* GRID STAGGER */
gsap.from(".project-card", {
  scrollTrigger: { trigger: ".portfolio-grid", start: "top 85%" },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

// FOOTER

/* initial states */
gsap.set([".footer-logo", ".footer-nav", ".footer-social"], {
  opacity: 0,
  y: 40,
});

/* master footer reveal */
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".footer-start",
      start: "top 95%",
    },
  })

  .to(".footer-logo", { opacity: 1, y: 0, duration: 0.8 })
  .to(".footer-nav", { opacity: 1, y: 0, duration: 0.8 }, "-=.5")
  .to(".footer-social", { opacity: 1, y: 0, duration: 0.8 }, "-=.5");

// SCROLL TOP

const scrollBtn = document.querySelector(".scroll-wrapper");
const progressCircle = document.querySelector(".progress-circle");

const circumference = 2 * Math.PI * 24;
progressCircle.style.strokeDasharray = circumference;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  const offset = circumference - scrollPercent * circumference;
  progressCircle.style.strokeDashoffset = offset;

  // Show button
  if (scrollTop > 300) {
    gsap.to(scrollBtn, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  } else {
    gsap.to(scrollBtn, {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  }
});

// Scroll to top smooth
document.querySelector(".scroll-top-btn").addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1,
    ease: "power3.inOut",
  });
});

// ===============================
// LENIS SETUP (SMOOTH + CONTROLLED)
// ===============================
const lenis = new Lenis({
  duration: 1, // 1.2–1.4 = best for UI-heavy sites
  easing: (t) => 1 - Math.pow(1 - t, 4), // smooth, natural
  smoothWheel: true,
  smoothTouch: false, // keep mobile native
});

// ===============================
// SYNC WITH SCROLLTRIGGER
// ===============================
lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// ===============================
// RAF LOOP (CORRECT WAY)
// ===============================
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===============================
// REFRESH FIX
// ===============================
ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();
