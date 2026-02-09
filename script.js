/* =========================
   MOBILE NAV
   ========================= */
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primaryNav');

navBtn?.addEventListener('click', () => {
  const open = navBtn.getAttribute('aria-expanded') === 'true';
  navBtn.setAttribute('aria-expanded', !open);
  nav.setAttribute('aria-expanded', !open);
});

/* =========================
   FOOTER YEAR
   ========================= */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* =========================
   TYPEWRITER EFFECT
   ========================= */
const phrases = [
  'Data Analyst',
  'Business Intelligence',
  'Product Management',
  'Coffee connoisseur'
];

const typeEl = document.getElementById('type');
let i = 0, j = 0, deleting = false;

function typeLoop(){
  const word = phrases[i];
  if (!deleting) {
    typeEl.textContent = word.slice(0, ++j);
    if (j === word.length) return setTimeout(() => deleting = true, 900);
  } else {
    typeEl.textContent = word.slice(0, --j);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 55 : 85);
}

typeLoop();
