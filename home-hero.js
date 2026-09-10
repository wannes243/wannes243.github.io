// The complete identity is available to assistive technology and without JS.
const heroRoles = [...document.querySelectorAll(".intro-role")];
const hero = document.querySelector(".intro-hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (hero && heroRoles.length > 1) {
  let roleIndex = 0;
  let timer;
  let inView = true;

  const syncRotation = () => {
    clearInterval(timer);
    if (reducedMotion.matches) {
      heroRoles[roleIndex].classList.remove("is-current");
      roleIndex = 0;
      heroRoles[0].classList.add("is-current");
    }
    if (reducedMotion.matches || document.hidden || !inView) return;
    timer = setInterval(() => {
      heroRoles[roleIndex].classList.remove("is-current");
      roleIndex = (roleIndex + 1) % heroRoles.length;
      heroRoles[roleIndex].classList.add("is-current");
    }, 3200);
  };

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
