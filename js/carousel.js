// 1. PRODUCT DATA (JSON)
const productData = {
  'hytears': {
    name: 'AquaDrop Classic',
    price: '$18.00',
    img: 'images/hytears.png',
    desc: 'Indicated for mild digital eye strain and environmental dryness. Features a balanced electrolyte formula that mimics natural tears.'
  },
  'moseye': {
    name: 'HydraRelief',
    price: '$24.00',
    img: 'images/moseye.jpeg',
    desc: 'Preservative-free solution for chronic dry eye and post-operative care. Advanced Hyaluronic Acid base for 8-hour retention.'
  },
  'motoeye': {
    name: 'AllergyCalm',
    price: '$21.00',
    img: 'images/motoeye.png',
    desc: 'Triple-action antihistamine formula. Targeted relief for redness and itching caused by pollen, pet dander, and dust.'
  },
  'pegeye': {
    name: 'ReliefPlus',
    price: '$21.00',
    img: 'images/pegeye.png',
    desc: 'Enhanced moisture lock technology. Specifically formulated for those living in high-altitude or low-humidity environments.'
  },
  'tobeye': {
    name: 'NightGuard Gel',
    price: '$21.00',
    img: 'images/tobeye.jpeg',
    desc: 'Intensive overnight therapy. A thicker gel consistency that provides a protective shield while you sleep.'
  }
};

// 2. MODAL LOGIC (Global Functions)
window.openProduct = function(key) {
  const data = productData[key];
  if(!data) return;

  document.getElementById('modal-name').innerText = data.name;
  document.getElementById('modal-price').innerText = data.price;
  document.getElementById('modal-desc').innerText = data.desc;
  document.getElementById('modal-img').src = data.img;
  
  document.getElementById('product-modal').style.display = 'block';
  document.body.style.overflow = 'hidden'; 
};

window.closeProduct = function() {
  document.getElementById('product-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
};

// 3. SMOOTH CAROUSEL LOGIC
document.addEventListener('DOMContentLoaded', () => {
  let current = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const total = slides.length;
  const inner = document.getElementById('carousel-inner');
  const dotsEl = document.getElementById('dots');

  if (!inner || total === 0) return;

  // Build dots dynamically based on number of slides
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });

  function goTo(n) {
    current = (n + total) % total;
    inner.style.transform = `translateX(-${current * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
  }

  // Globalize move function for HTML buttons
  window.moveCarousel = (dir) => goTo(current + dir);

  // Auto-advance every 4 seconds
  let autoSlide = setInterval(() => window.moveCarousel(1), 4000);

  // Pause auto-slide when user interacts
  inner.addEventListener('mouseenter', () => clearInterval(autoSlide));
  inner.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => window.moveCarousel(1), 4000);
  });
});
