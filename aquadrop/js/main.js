// ── SCROLL REVEAL — runs on every page ──
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    obs.observe(el);
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', initReveal);
