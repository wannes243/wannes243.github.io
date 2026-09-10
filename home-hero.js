// The complete identity is available to assistive technology and without JS.
const heroRoles = [...document.querySelectorAll(".intro-role")];
const motionButton = document.querySelector(".intro-motion");
const hero = document.querySelector(".intro-hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (hero && motionButton && heroRoles.length > 1) {
  let roleIndex = 0;
  let timer;
  let paused = false;
  let inView = true;

  const syncRotation = () => {
    clearInterval(timer);
    motionButton.hidden = reducedMotion.matches;
    if (reducedMotion.matches) {
      heroRoles[roleIndex].classList.remove("is-current");
      roleIndex = 0;
      heroRoles[0].classList.add("is-current");
    }
    if (paused || reducedMotion.matches || document.hidden || !inView) return;
    timer = setInterval(() => {
      heroRoles[roleIndex].classList.remove("is-current");
      roleIndex = (roleIndex + 1) % heroRoles.length;
      heroRoles[roleIndex].classList.add("is-current");
    }, 3200);
  };

  motionButton.addEventListener("click", () => {
    paused = !paused;
    motionButton.setAttribute("aria-pressed", String(paused));
    motionButton.setAttribute("aria-label", paused ? "Resume changing title" : "Pause changing title");
    syncRotation();
  });
  reducedMotion.addEventListener("change", syncRotation);
  document.addEventListener("visibilitychange", syncRotation);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncRotation();
    }).observe(hero);
  }
  syncRotation();
}

const cvChooser = document.querySelector(".intro-cv");
if (cvChooser) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && cvChooser.open) {
      cvChooser.open = false;
      cvChooser.querySelector("summary").focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!cvChooser.contains(event.target)) cvChooser.open = false;
  });
}
