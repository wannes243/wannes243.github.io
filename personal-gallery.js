// Real image links remain the fallback when dialog support is unavailable.
(() => {
  if (typeof HTMLDialogElement === "undefined") return;
  const links = document.querySelectorAll(".life-gallery .life-photo");
  if (!links.length) return;

  const viewer = document.createElement("dialog");
  viewer.className = "photo-viewer";
  viewer.setAttribute("aria-labelledby", "photo-viewer-title");
  viewer.innerHTML = `
    <div class="photo-viewer-shell">
      <div class="photo-viewer-toolbar">
        <h2 id="photo-viewer-title">Photo gallery</h2>
        <button type="button" class="photo-viewer-close" aria-label="Close photo viewer" autofocus>Close <span aria-hidden="true">×</span></button>
      </div>
      <figure>
        <img class="photo-viewer-image" alt="" />
        <figcaption aria-live="polite"></figcaption>
      </figure>
      <div class="photo-viewer-footer">
        <a class="photo-viewer-original" target="_blank" rel="noopener noreferrer">Open original ↗</a>
        <div class="photo-viewer-navigation">
          <button type="button" class="photo-viewer-prev" aria-label="Previous photo">←</button>
          <span class="photo-viewer-count"></span>
          <button type="button" class="photo-viewer-next" aria-label="Next photo">→</button>
        </div>
      </div>
    </div>`;
  document.body.append(viewer);

  const photo = viewer.querySelector("img");
  const caption = viewer.querySelector("figcaption");
  const counter = viewer.querySelector(".photo-viewer-count");
  const title = viewer.querySelector("h2");
  const original = viewer.querySelector(".photo-viewer-original");
  let group = [];
  let active = 0;
  let trigger;

  const showPhoto = (index) => {
    active = (index + group.length) % group.length;
    const source = group[active];
    photo.alt = source.querySelector("img").alt;
    caption.textContent = photo.alt;
    counter.textContent = `${active + 1} / ${group.length}`;
    original.href = source.href;
    photo.src = source.href;
  };
  photo.addEventListener("error", () => {
    caption.textContent = "This photo could not load. Try opening the original.";
  });

  links.forEach((link) => {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      const gallery = link.closest(".life-gallery");
      group = [...gallery.querySelectorAll(".life-photo")];
      title.textContent = gallery.getAttribute("aria-label");
      showPhoto(group.indexOf(link));
      viewer.showModal();
      document.body.classList.add("is-viewing-photo");
    });
  });
  viewer.querySelector(".photo-viewer-close").addEventListener("click", () => viewer.close());
  viewer.querySelector(".photo-viewer-prev").addEventListener("click", () => showPhoto(active - 1));
  viewer.querySelector(".photo-viewer-next").addEventListener("click", () => showPhoto(active + 1));
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(active + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", () => {
    document.body.classList.remove("is-viewing-photo");
    trigger?.focus({ preventScroll: true });
  });
})();
