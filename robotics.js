// Native links remain usable without JavaScript. Enhance supplied project photos with a dialog.
const photoDialog = document.querySelector(".photo-dialog");
if (photoDialog && typeof photoDialog.showModal === "function") {
  const image = photoDialog.querySelector(".lightbox-stage img");
  const stage = photoDialog.querySelector(".lightbox-stage");
  const caption = photoDialog.querySelector(".photo-caption");
  let opener;
  document.querySelectorAll(".gallery-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.dataset.caption;
      caption.textContent = link.dataset.caption;
      stage.classList.toggle("is-rotated", link.dataset.rotate === "true");
      photoDialog.showModal();
      photoDialog.querySelector(".photo-close").focus();
    });
  });
  photoDialog
    .querySelector(".photo-close")
    .addEventListener("click", () => photoDialog.close());
  photoDialog.addEventListener("click", (event) => {
    const bounds = photoDialog.getBoundingClientRect();
    if (
      event.target === photoDialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      photoDialog.close();
  });
  photoDialog.addEventListener("close", () => {
    if (opener) opener.focus();
  });
}

// Seamless one-direction loop, with hover/focus pause, keyboard browsing and reduced-motion fallback.
const technologyRail = document.querySelector(".technology-rail");
if (technologyRail) {
  const track = technologyRail.querySelector(".technology-grid");
  const originalItems = [...track.children];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animation;
  let hovered = false;
  let focused = false;
  let visible = false;
  const itemDuration = 1400;
  const duration = originalItems.length * itemDuration;
  function syncPlayback() {
    if (!animation) return;
    if (hovered || focused || !visible || document.hidden) animation.pause();
    else animation.play();
  }
  function configureLoop() {
    const time = animation ? Number(animation.currentTime || 0) % duration : 0;
    animation?.cancel();
    animation = undefined;
    track.querySelectorAll("[data-loop-copy]").forEach((item) => item.remove());
    const count = Number(
      getComputedStyle(technologyRail).getPropertyValue("--visible-tech"),
    );
    const itemWidth = technologyRail.clientWidth / count;
    technologyRail.style.setProperty("--tech-width", itemWidth + "px");
    technologyRail.classList.toggle("is-looping", !reduceMotion.matches);
    if (reduceMotion.matches) return;
    technologyRail.scrollLeft = 0;
    for (const item of originalItems) {
      const clone = item.cloneNode(true);
      clone.dataset.loopCopy = "";
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
      });
      track.append(clone);
    }
    originalItems.forEach((item) =>
      item.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
      }),
    );
    animation = track.animate(
      [
        { transform: "translateX(0)" },
        {
          transform: "translateX(-" + itemWidth * originalItems.length + "px)",
        },
      ],
      { duration, iterations: Infinity, easing: "linear" },
    );
    animation.currentTime = time;
    syncPlayback();
  }
  technologyRail.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      hovered = true;
      syncPlayback();
    }
  });
  technologyRail.addEventListener("pointerleave", () => {
    hovered = false;
    syncPlayback();
  });
  technologyRail.addEventListener("focusin", () => {
    focused = true;
    syncPlayback();
  });
  technologyRail.addEventListener("focusout", () => {
    focused = false;
    syncPlayback();
  });
  technologyRail.addEventListener("keydown", (event) => {
    if (!animation || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? itemDuration : -itemDuration;
    animation.currentTime =
      (Number(animation.currentTime || 0) + delta + duration) % duration;
  });
  new ResizeObserver(configureLoop).observe(technologyRail);
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    syncPlayback();
  }).observe(technologyRail);
  reduceMotion.addEventListener("change", configureLoop);
  document.addEventListener("visibilitychange", syncPlayback);
}
