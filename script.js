const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealTargets = document.querySelectorAll(
  ".section, .video-section, .story-visual, .hero > *, .card, .tech-card, .month, .proof-card, .timeline-item, .video-card, .video-feature, .evidence-panel, .stack-card, .review-mockup, .proof-gap-copy, .proof-gap-image-wrap"
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");

  const parent = element.parentElement;
  const siblings = parent ? Array.from(parent.children).filter((child) => child.matches(".card, .tech-card, .month, .proof-card, .timeline-item, .video-card, .video-feature, .evidence-panel, .stack-card, .proof-gap-copy, .proof-gap-image-wrap")) : [];
  const siblingIndex = siblings.indexOf(element);
  const delay = siblingIndex >= 0 ? Math.min(siblingIndex * 70, 360) : Math.min(index * 35, 180);

  element.style.setProperty("--reveal-delay", `${delay}ms`);
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" })
  : null;

if (revealObserver) {
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Thanks. Your message is ready to connect to a form backend.";
    }
  });
});
