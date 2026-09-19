// Independent moving skill rows; native scrolling is the no-JavaScript fallback.
document.querySelectorAll('.home-skills-rail').forEach(rail => {
  const track = rail.querySelector('ul');
  const items = [...track.children];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let hovered = false;
  let focused = false;
  let explicitPlay = false;
  let visible = false;
  let interacting = false;
  let drag;
  let cycle = 0;
  let frame = 0;
  let previousTime = 0;
  let position = 0;
  let interactionTimer;

  const copies = items.map(item => {
    const copy = item.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.inert = true;
    copy.dataset.loopCopy = '';
    track.append(copy);
    return copy;
  });
  track.querySelectorAll('img').forEach(img => { img.draggable = false; });
  rail.classList.add('is-moving');
  const help = document.createElement('span');
  help.id = `${rail.getAttribute('aria-labelledby')}-help`;
  help.className = 'sr-only';
  help.textContent = 'Drag or swipe to explore. Left and right arrows browse skills. Space pauses or resumes movement.';
  rail.after(help);
  rail.setAttribute('aria-describedby', help.id);

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'home-skills-next';
  next.setAttribute('aria-label', `Next ${document.getElementById(rail.getAttribute('aria-labelledby')).textContent} technologies`);
  rail.id = `${rail.getAttribute('aria-labelledby')}-rail`;
  next.setAttribute('aria-controls', rail.id);
  next.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
  rail.after(next);
  rail.parentElement.classList.add('is-navigable');

  const wrap = value => cycle ? ((value % cycle) + cycle) % cycle : 0;
  const tick = time => {
    if (previousTime) {
      position = wrap(position + Math.min(time - previousTime, 50) * 0.045);
      rail.scrollLeft = position;
    }
    previousTime = time;
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    cancelAnimationFrame(frame);
    previousTime = 0;
    const canRun = !paused && !reducedMotion.matches && !interacting && !drag
      && (!hovered && !focused || explicitPlay) && visible && !document.hidden && cycle;
    if (canRun) {
      position = wrap(rail.scrollLeft);
      frame = requestAnimationFrame(tick);
    }
  };
  const pauseInteraction = () => {
    explicitPlay = false;
    interacting = true;
    clearTimeout(interactionTimer);
    sync();
    interactionTimer = setTimeout(() => { interacting = false; sync(); }, 1800);
  };
  const measure = () => {
    const last = items[items.length - 1];
    cycle = last.offsetLeft - items[0].offsetLeft + last.getBoundingClientRect().width
      + (parseFloat(getComputedStyle(track).columnGap) || 0);
    copies.forEach(copy => { copy.hidden = reducedMotion.matches; });
    if (!reducedMotion.matches && cycle) rail.scrollLeft = wrap(rail.scrollLeft);
    sync();
  };
  next.addEventListener('click', () => {
    pauseInteraction();
    const step = items[0].getBoundingClientRect().width
      + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const destination = (Math.floor((rail.scrollLeft + 1) / step) + 1) * step;
    if (reducedMotion.matches) {
      const end = rail.scrollWidth - rail.clientWidth;
      rail.scrollLeft = rail.scrollLeft >= end - 1 ? 0 : Math.min(destination, end);
    } else rail.scrollLeft = wrap(destination);
  });
  rail.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovered = true; explicitPlay = false; sync(); }
  });
  rail.addEventListener('pointerleave', () => { hovered = false; sync(); });
  rail.addEventListener('focusin', () => { focused = true; explicitPlay = false; sync(); });
  rail.addEventListener('focusout', () => { focused = false; sync(); });
  rail.addEventListener('wheel', pauseInteraction, { passive: true });
  rail.addEventListener('touchstart', pauseInteraction, { passive: true });
  rail.addEventListener('touchend', pauseInteraction, { passive: true });
  rail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pauseInteraction();
    if (event.pointerType !== 'mouse') return;
    drag = { x: event.clientX, scroll: rail.scrollLeft };
    rail.setPointerCapture(event.pointerId);
    rail.classList.add('is-dragging');
  });
  rail.addEventListener('pointermove', event => {
    if (drag) rail.scrollLeft = drag.scroll + drag.x - event.clientX;
  });
  const endDrag = () => {
    if (!drag) return;
    drag = null;
    rail.classList.remove('is-dragging');
    pauseInteraction();
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(name => rail.addEventListener(name, endDrag));
  rail.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      event.preventDefault();
      explicitPlay = !explicitPlay;
      paused = !explicitPlay;
      sync();
      return;
    }
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    pauseInteraction();
    const step = Math.max(120, rail.clientWidth * 0.4);
    if (event.key === 'Home') rail.scrollLeft = 0;
    else if (event.key === 'End') rail.scrollLeft = Math.max(0, cycle - rail.clientWidth);
    else {
      const destination = rail.scrollLeft + (event.key === 'ArrowRight' ? step : -step);
      rail.scrollLeft = reducedMotion.matches ? destination : wrap(destination);
    }
  });
  new ResizeObserver(measure).observe(rail);
  new ResizeObserver(measure).observe(items[0]);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(rail);
  reducedMotion.addEventListener('change', () => {
    copies.forEach(copy => { copy.hidden = reducedMotion.matches; });
    if (reducedMotion.matches) { explicitPlay = false; rail.scrollLeft = 0; }
    measure();
  });
  document.addEventListener('visibilitychange', sync);
  document.fonts.ready.then(measure);
  measure();
});
