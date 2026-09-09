// One entry sequence per world. The unchanged image remains the static fallback.
(() => {
  const backdrop = document.querySelector('[data-entry-motion]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!backdrop || reducedMotion.matches || !Element.prototype.animate) return;
  const original = backdrop.querySelector('img');
  const compact = matchMedia('(max-width: 600px)');
  const namespace = 'http://www.w3.org/2000/svg';
  const animations = [];
  let finished = false;

  function svgElement(tag, attributes = {}, parent) {
    const node = document.createElementNS(namespace, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    parent?.append(node);
    return node;
  }
  function animate(node, frames, options) {
    const animation = node.animate(frames, { fill: 'both', ...options });
    animations.push(animation);
    return animation;
  }

  async function start() {
    try { await original.decode(); } catch { return; }
    if (reducedMotion.matches) return;
    const scene = svgElement('svg', {
      class: 'world-entry-scene', viewBox: '0 0 1536 1024',
      'aria-hidden': 'true', focusable: 'false',
    });
    const layers = [scene];
    const framing = () => layers.forEach(layer => layer.setAttribute('preserveAspectRatio', compact.matches ? 'xMidYMid meet' : 'xMidYMid slice'));
    framing();
    const definitions = svgElement('defs', {}, scene);

    if (backdrop.dataset.entryMotion === 'hands') {
      // Split through the gap between the fingertips, preserving every source pixel.
      for (const [name, x, width, offset] of [
        ['human', 0, 755, -100], ['robot', 755, 781, 100],
      ]) {
        const clip = svgElement('clipPath', { id: `entry-${name}-clip`, clipPathUnits: 'userSpaceOnUse' }, definitions);
        svgElement('rect', { x, y: 0, width, height: 1024 }, clip);
        const fade = svgElement('linearGradient', {
          id: `entry-${name}-fade`, gradientUnits: 'userSpaceOnUse',
          x1: name === 'human' ? 685 : 755, x2: name === 'human' ? 755 : 825,
        }, definitions);
        svgElement('stop', { offset: '0%', 'stop-color': name === 'human' ? 'white' : 'black' }, fade);
        svgElement('stop', { offset: '100%', 'stop-color': name === 'human' ? 'black' : 'white' }, fade);
        const mask = svgElement('mask', { id: `entry-${name}-mask`, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 1536, height: 1024 }, definitions);
        svgElement('rect', { width: 1536, height: 1024, fill: `url(#entry-${name}-fade)` }, mask);
        const hand = svgElement('g', { 'data-motion-part': name }, scene);
        svgElement('image', {
          href: original.getAttribute('src'), width: 1536, height: 1024,
          'clip-path': `url(#entry-${name}-clip)`,
          mask: `url(#entry-${name}-mask)`,
        }, hand);
        animate(hand, [
          { transform: `translateX(${offset}px)` },
          { transform: 'translateX(0px)' },
        ], { duration: 2600, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
        animate(hand, [{ opacity: 1 }, { opacity: 1, offset: 0.72 }, { opacity: 0 }], { duration: 2800 });
      }
      animate(original, [{ opacity: 0 }, { opacity: 0, offset: 0.72 }, { opacity: 1 }], { duration: 2800 });
      const glow = svgElement('radialGradient', { id: 'entry-contact-glow' }, definitions);
      svgElement('stop', { offset: '0%', 'stop-color': '#e3ffff', 'stop-opacity': '.95' }, glow);
      svgElement('stop', { offset: '24%', 'stop-color': '#86f5ff', 'stop-opacity': '.65' }, glow);
      svgElement('stop', { offset: '100%', 'stop-color': '#56cfff', 'stop-opacity': '0' }, glow);
      const contact = svgElement('ellipse', {
        cx: 755, cy: 598, rx: 100, ry: 80, fill: 'url(#entry-contact-glow)',
      }, scene);
      animate(contact, [
        { opacity: 0 }, { opacity: 0.9, offset: 0.4 }, { opacity: 0 },
      ], { delay: 1200, duration: 1700, easing: 'ease-in-out' });
    } else {
      // Move only the hand; the brain stays anchored in the original composition.
      // Feather the dark gap between them instead of modifying the source image.
      const artwork = svgElement('svg', {
        class: 'world-entry-scene world-entry-art', viewBox: '0 0 1536 1024',
        'aria-hidden': 'true', focusable: 'false',
      });
      layers.push(artwork);
      framing();
      const artDefinitions = svgElement('defs', {}, artwork);
      for (const [name, from, to, first, last] of [
        ['hand', 699, 737, 'white', 'black'],
        ['brain', 748, 824, 'black', 'white'],
      ]) {
        const fade = svgElement('linearGradient', {
          id: `neural-${name}-fade`, gradientUnits: 'userSpaceOnUse',
          x1: from, x2: to,
        }, artDefinitions);
        svgElement('stop', { offset: '0%', 'stop-color': first }, fade);
        svgElement('stop', { offset: '100%', 'stop-color': last }, fade);
        const mask = svgElement('mask', {
          id: `neural-${name}-mask`, maskUnits: 'userSpaceOnUse',
          x: 0, y: 0, width: 1536, height: 1024,
        }, artDefinitions);
        svgElement('rect', { width: 1536, height: 1024, fill: `url(#neural-${name}-fade)` }, mask);
      }
      svgElement('image', {
        href: original.getAttribute('src'), width: 1536, height: 1024,
        mask: 'url(#neural-brain-mask)', 'data-motion-part': 'brain',
      }, artwork);
      const hand = svgElement('g', { 'data-motion-part': 'approaching-hand' }, artwork);
      svgElement('image', {
        href: original.getAttribute('src'), width: 1536, height: 1024,
        mask: 'url(#neural-hand-mask)',
      }, hand);
      animate(hand, [
        { transform: 'translate(-160px, 26px)' },
        { transform: 'translate(0px, 0px)' },
      ], { duration: 2800, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
      // Restore the exact source after the current fades, without a visible cut.
      animate(artwork, [{ opacity: 1 }, { opacity: 1, offset: 0.88 }, { opacity: 0 }], { duration: 4900 });
      animate(original, [{ opacity: 0 }, { opacity: 0, offset: 0.88 }, { opacity: 1 }], { duration: 4900 });

      const glow = svgElement('radialGradient', { id: 'neural-contact-glow' }, definitions);
      svgElement('stop', { offset: '0%', 'stop-color': '#fff4ff', 'stop-opacity': '.9' }, glow);
      svgElement('stop', { offset: '22%', 'stop-color': '#ceb2ff', 'stop-opacity': '.5' }, glow);
      svgElement('stop', { offset: '100%', 'stop-color': '#a080ff', 'stop-opacity': '0' }, glow);
      const contact = svgElement('ellipse', {
        cx: 690, cy: 510, rx: 64, ry: 44, fill: 'url(#neural-contact-glow)',
        'data-motion-part': 'contact',
      }, scene);
      animate(contact, [
        { opacity: 0 }, { opacity: 0.85, offset: 0.32 },
        { opacity: 0.4, offset: 0.7 }, { opacity: 0 },
      ], { delay: 2200, duration: 1700, easing: 'ease-in-out' });

      // Current starts only as the fingertip reaches the connection.
      const routes = [
        ['M684 511 L710 503 L727 514 L752 498 L775 507 L802 492 L831 503 L857 509 C917 502 973 464 1035 480', 2300, 850],
        ['M1035 480 C1048 431 1077 395 1092 344 S1220 344 1287 295 S1370 243 1450 250', 2930, 1350],
        ['M1035 480 C1090 479 1140 505 1190 523 S1297 457 1350 465 S1430 458 1460 438', 3020, 1350],
        ['M1035 480 C1010 511 1060 550 1108 584 S1223 587 1290 614 S1380 627 1455 630', 3100, 1350],
        ['M1035 480 C980 488 971 410 990 386 S1084 385 1117 421 S1201 430 1240 505', 2820, 1250],
        ['M1108 584 C1110 657 1180 685 1250 700 S1375 730 1460 773', 3450, 1150],
      ];
      for (const [d, delay, duration] of routes) {
        const route = svgElement('path', {
          d, fill: 'none', stroke: '#dccbff', 'stroke-width': 2.8,
          'stroke-linecap': 'round', pathLength: 1,
          'stroke-dasharray': '.13 1', 'data-motion-part': 'current',
        }, scene);
        animate(route, [
          { strokeDashoffset: '0.13', opacity: 0 },
          { strokeDashoffset: '0', opacity: 0.95, offset: 0.12 },
          { strokeDashoffset: '-0.85', opacity: 0.95, offset: 0.86 },
          { strokeDashoffset: '-1', opacity: 0 },
        ], { delay, duration, easing: 'linear' });
      }
      for (const [cx, cy, delay] of [[690, 510, 2250], [1035, 480, 2960], [1092, 344, 3340], [1108, 584, 3440], [1450, 250, 3980], [1460, 438, 4060], [1455, 630, 4140], [1460, 773, 4250]]) {
        const node = svgElement('circle', { cx, cy, r: 6, fill: '#eee6ff' }, scene);
        animate(node, [{ opacity: 0 }, { opacity: 0.95, offset: 0.35 }, { opacity: 0 }], { delay, duration: 620 });
      }
    }

    function cleanup() {
      if (finished) return;
      finished = true;
      backdrop.classList.remove('entry-motion-running');
      layers.forEach(layer => layer.remove());
      animations.forEach(animation => animation.cancel());
      document.removeEventListener('visibilitychange', visibility);
      reducedMotion.removeEventListener('change', preference);
      compact.removeEventListener('change', framing);
    }
    function visibility() {
      animations.forEach(animation => {
        if (document.hidden && animation.playState === 'running') animation.pause();
        else if (!document.hidden && animation.playState === 'paused') animation.play();
      });
    }
    function preference() { if (reducedMotion.matches) cleanup(); }

    // Insert below the existing readability overlay and remove all layers afterward.
    backdrop.append(...layers.slice().reverse());
    backdrop.classList.add('entry-motion-running');
    document.addEventListener('visibilitychange', visibility);
    reducedMotion.addEventListener('change', preference);
    compact.addEventListener('change', framing);
    visibility();
    await Promise.allSettled(animations.map(animation => animation.finished));
    cleanup();
  }
  start();
})();
