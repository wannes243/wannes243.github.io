// Native page scrolling brings each sticky card over the preceding one.
// Measurements keep tall cards readable before they settle into the stack.
const stacks = [...document.querySelectorAll('.card-stack')];
const header = document.querySelector('.site-header');
let measureFrame;
const measureStacks = () => {
  cancelAnimationFrame(measureFrame);
  measureFrame = requestAnimationFrame(() => {
    const headerBottom = (header?.getBoundingClientRect().height || 86) + 24;
    stacks.forEach(stack => {
      const tallest = Math.max(...[...stack.children].map(card => card.getBoundingClientRect().height));
      const top = Math.min(headerBottom, window.innerHeight - tallest - 24);
      stack.style.setProperty('--stack-top', `${Math.round(top)}px`);
      stack.classList.add('is-measured');
    });
  });
};
const sizeObserver = new ResizeObserver(measureStacks);
if (header) sizeObserver.observe(header);
stacks.forEach(stack => {
  const cards = [...stack.children];
  cards.forEach(card => sizeObserver.observe(card));
  // Tabbing back to a covered card reveals its original place in the page.
  stack.addEventListener('focusin', event => {
    const card = event.target.closest('article');
    const index = cards.indexOf(card);
    if (index < 0) return;
    const next = cards[index + 1];
    const focusedBounds = event.target.getBoundingClientRect();
    if (!next || next.getBoundingClientRect().top >= focusedBounds.bottom) return;
    const gap = parseFloat(getComputedStyle(stack).rowGap) || 0;
    const originalTop = window.scrollY + stack.getBoundingClientRect().top
      + cards.slice(0, index).reduce((total, item) => total + item.offsetHeight + gap, 0);
    const headerBottom = (header?.offsetHeight || 86) + 24;
    const withinCard = focusedBounds.bottom - card.getBoundingClientRect().top;
    window.scrollTo({
      top: originalTop - headerBottom + Math.max(0, withinCard + headerBottom + 24 - window.innerHeight),
      behavior: 'instant'
    });
  });
});
window.addEventListener('resize', measureStacks, { passive: true });
measureStacks();
