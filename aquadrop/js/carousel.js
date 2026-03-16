// ── CAROUSEL — only loaded on index.html ──
document.addEventListener('DOMContentLoaded', () => {
  let current = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const total = slides.length;
  const inner = document.getElementById('carousel-inner');
  const dotsEl = document.getElementById('dots');

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    dotsEl.appendChild(d);
  });

  function goTo(n) {
    current = (n + total) % total;
    inner.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
  }

  // Expose moveCarousel globally for HTML onclick buttons
  window.moveCarousel = (dir) => goTo(current + dir);

  // Auto-advance every 4 seconds
  setInterval(() => window.moveCarousel(1), 4000);
});
