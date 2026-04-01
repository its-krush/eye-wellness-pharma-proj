// 1. EXTENDED PRODUCT DATA
const productData = {
  'hytears': {
    name: 'AquaDrop Classic',
    price: '$18.00',
    angles: ['images/hytears.png', 'images/hytears_angle2.png', 'images/hytears_box.png'], 
    desc: 'Indicated for mild digital eye strain and environmental dryness. Features a balanced electrolyte formula that mimics natural tears.'
  },
  'moseye': {
    name: 'HydraRelief',
    price: '$24.00',
    angles: ['images/moseye.jpeg', 'images/moseye_side.png'],
    desc: 'Preservative-free solution for chronic dry eye and post-operative care. Advanced Hyaluronic Acid base for 8-hour retention.'
  },
  'motoeye': {
    name: 'AllergyCalm',
    price: '$21.00',
    angles: ['images/motoeye.png', 'images/motoeye_label.png'],
    desc: 'Triple-action antihistamine formula. Targeted relief for redness and itching caused by pollen, pet dander, and dust.'
  },
  'pegeye': {
    name: 'ReliefPlus',
    price: '$21.00',
    angles: ['images/pegeye.png'],
    desc: 'High-viscosity formula for severe dryness. Provides a long-lasting protective shield for the corneal surface.'
  },
  'tobeye': {
    name: 'NightGuard',
    price: '$21.00',
    angles: ['images/tobeye.jpeg'],
    desc: 'Intensive overnight relief. Designed to be applied before sleep to prevent morning dryness and irritation.'
  }
};

// 2. SHOWCASE LOGIC
function showProductDetails(key) {
  const data = productData[key];
  const section = document.getElementById('product-showcase');
  
  // Update Content
  document.getElementById('detail-name').innerText = data.name;
  document.getElementById('detail-price').innerText = data.price;
  document.getElementById('detail-desc').innerText = data.desc;
  
  // Set Main Image
  const mainImg = document.getElementById('detail-main-img');
  mainImg.src = data.angles[0];

  // Generate Thumbnails
  const thumbContainer = document.getElementById('detail-thumbnails');
  thumbContainer.innerHTML = '';
  data.angles.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => { mainImg.src = src; };
    thumbContainer.appendChild(img);
  });

  // Smooth Scroll to Showcase
  window.scrollTo({
    top: section.offsetTop - 80,
    behavior: 'smooth'
  });
}

// 3. CAROUSEL MOVEMENT
let currentIndex = 0;
function moveCarousel(direction) {
  const inner = document.getElementById('carousel-inner');
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
