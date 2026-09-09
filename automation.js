// Native horizontal scrolling stays available without JavaScript.
const aiRail = document.querySelector('.ai-technology-rail');
if (aiRail) {
  const track = aiRail.querySelector('ul');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const originals = [...track.children];
  let paused = reducedMotion.matches;
  let hovered = false;
  let focused = false;
  let visible = false;
  let frame = 0;
  let previousTime = 0;
  let position = 0;
  let cycleWidth = 0;
  let drag = null;
  let interacting = false;
  let interactionTimer;

  originals.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.append(clone);
  });
  track.querySelectorAll('img').forEach(img => { img.draggable = false; });
  aiRail.classList.add('is-enhanced');

  function tick(time) {
    if (previousTime) {
      position = (position + Math.min(time - previousTime, 50) * 0.035) % cycleWidth;
      aiRail.scrollLeft = position;
    }
    previousTime = time;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    previousTime = 0;
    if (!paused && !interacting && !hovered && !focused && !drag && visible && !document.hidden && cycleWidth) {
      position = aiRail.scrollLeft % cycleWidth;
      frame = requestAnimationFrame(tick);
    }
  }
  function pause() {
    interacting = true;
    clearTimeout(interactionTimer);
    sync();
    interactionTimer = setTimeout(() => { interacting = false; sync(); }, 1200);
  }
  function step(direction) {
    pause();
    const distance = originals[0].getBoundingClientRect().width;
    aiRail.scrollLeft = (aiRail.scrollLeft + direction * distance + cycleWidth) % cycleWidth;
  }
  aiRail.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      event.preventDefault();
      paused = !paused;
      sync();
      return;
    }
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key.startsWith('Arrow')) step(event.key === 'ArrowRight' ? 1 : -1);
    else {
      pause();
      aiRail.scrollLeft = event.key === 'Home' ? 0 : cycleWidth - aiRail.clientWidth;
    }
  });
  aiRail.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovered = true; sync(); }
  });
  aiRail.addEventListener('pointerleave', () => { hovered = false; sync(); });
  aiRail.addEventListener('focusin', () => { focused = true; sync(); });
  aiRail.addEventListener('focusout', () => { focused = false; sync(); });
  aiRail.addEventListener('wheel', pause, { passive: true });
  aiRail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pause();
    // Touch keeps native momentum and vertical page scrolling.
    if (event.pointerType !== 'mouse') return;
    drag = { x: event.clientX, scroll: aiRail.scrollLeft };
    aiRail.setPointerCapture(event.pointerId);
    aiRail.classList.add('is-dragging');
  });
  aiRail.addEventListener('pointermove', event => {
    if (drag) aiRail.scrollLeft = drag.scroll + drag.x - event.clientX;
  });
  function endDrag() {
    drag = null;
    aiRail.classList.remove('is-dragging');
    pause();
  }
  aiRail.addEventListener('pointerup', endDrag);
  aiRail.addEventListener('pointercancel', endDrag);
  aiRail.addEventListener('lostpointercapture', endDrag);
  new ResizeObserver(() => {
    cycleWidth = originals[0].getBoundingClientRect().width * originals.length;
    sync();
  }).observe(aiRail);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    sync();
  }).observe(aiRail);
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
}
