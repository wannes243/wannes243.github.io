// The worlds are real pages: navigation, projects and CVs also work without JavaScript.
const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
if (copyButton && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("wannesfrajj@gmail.com");
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent =
        "Select the email address to copy it, or click it to open your email app.";
    }
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Seeded atmosphere, redrawn only on resize; no perpetual render loop.
const stars = document.querySelector(".star-field");
if (stars) {
  const context = stars.getContext("2d");
  if (context) {
    const drawStars = () => {
      const bounds = stars.getBoundingClientRect();
      const density = Math.min(window.devicePixelRatio || 1, 1.5);
      stars.width = Math.round(bounds.width * density);
      stars.height = Math.round(bounds.height * density);
      context.setTransform(density, 0, 0, density, 0, 0);
      context.clearRect(0, 0, bounds.width, bounds.height);
      let seed = 243;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const count = Math.min(110, Math.floor(bounds.width / 12));
      for (let index = 0; index < count; index++) {
        const x = random() * bounds.width;
        const y = random() * bounds.height;
        const radius = 0.35 + random() * 0.7;
        context.fillStyle =
          "rgba(171, 194, 238, " + (0.12 + random() * 0.38) + ")";
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    };
    new ResizeObserver(drawStars).observe(stars.parentElement);
  }
}
