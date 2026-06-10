// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  highlightNav();
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── ACTIVE NAV LINK ──
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}

// ── TYPEWRITER ──
const phrases = [
  'Industrial Computer Engineering Student 🎓',
  'AI & Machine Learning Engineer 🧠',
  'Robotics & Autonomous Systems 🤖',
  'Embedded Systems & IoT Developer ⚙️',
  'LLM Orchestration & Agentic AI 🤖',
  'IEEE Webmaster · ENET\'Com ⚡',
];
let pIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');
function typeWrite() {
  const phrase = phrases[pIdx];
  if (!deleting) {
    tw.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) { deleting = true; setTimeout(typeWrite, 2200); return; }
  } else {
    tw.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
  }
  setTimeout(typeWrite, deleting ? 35 : 75);
}
typeWrite();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.skill-category, .project-card, .contact-item, .highlight-item, .edu-card, .hero-stats'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
  { threshold: 0.1 }
);
revealEls.forEach(el => observer.observe(el));

// ── CONTACT FORM ──
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const success = document.getElementById('form-success');
  btn.disabled = true;
  btn.querySelector('.btn-text').textContent = 'Sending…';
  setTimeout(() => {
    btn.disabled = false;
    btn.querySelector('.btn-text').textContent = 'Send Message';
    success.classList.add('show');
    this.reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }, 1200);
});

// ── FOOTER YEAR ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── WELCOME MODAL ──
const welcomeModal = document.getElementById('welcome-modal');
const modalClose = document.getElementById('modal-close');
const cvDropdownBtn = document.getElementById('cv-dropdown-btn');
const cvDropdownMenu = document.getElementById('cv-dropdown-menu');
const modalWorkLink = document.getElementById('modal-work-link');

// Show modal on load (with slight delay)
setTimeout(() => {
  welcomeModal.classList.add('show');
}, 1000);

// Close modal
modalClose.addEventListener('click', () => welcomeModal.classList.remove('show'));
welcomeModal.addEventListener('click', (e) => {
  if (e.target === welcomeModal) welcomeModal.classList.remove('show');
});
if (modalWorkLink) {
  modalWorkLink.addEventListener('click', () => welcomeModal.classList.remove('show'));
}

// CV Dropdown logic
cvDropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  cvDropdownMenu.classList.toggle('show');
});
document.addEventListener('click', () => {
  cvDropdownMenu.classList.remove('show');
});
