// PRODUCT DATA WITH MULTIPLE IMAGES
const productData = {
  'hytears': {
    name: 'Hytears Eye Drop',
    displayName: 'AquaDrop Classic',
    price: '$18.00',
    images: [
      'images/hytears.png',
      'images/hytears.png', // In production, these would be different angles
      'images/hytears.png'
    ],
    shortDesc: 'Indicated for mild digital eye strain and environmental dryness.',
    desc: 'Indicated for mild digital eye strain and environmental dryness. Features a balanced electrolyte formula that mimics natural tears.',
    fullDesc: 'AquaDrop Classic is specifically formulated for individuals experiencing mild to moderate digital eye strain, environmental dryness, and occasional discomfort. The balanced electrolyte formula closely mimics the natural composition of human tears, providing immediate relief and long-lasting comfort.',
    ingredients: ['Sodium Hyaluronate', 'Electrolyte Complex', 'Purified Water', 'pH Buffers'],
    benefits: [
      'Provides immediate relief from dryness',
      'Safe for daily use',
      'Compatible with contact lenses',
      'Preservative-free formula'
    ]
  },
  'moseye': {
    name: 'Moseye Eye Drop',
    displayName: 'HydraRelief Premium',
    price: '$24.00',
    images: [
      'images/moseye.jpeg',
      'images/moseye.jpeg',
      'images/moseye.jpeg'
    ],
    shortDesc: 'Preservative-free solution for chronic dry eye and post-operative care.',
    desc: 'Preservative-free solution for chronic dry eye and post-operative care. Advanced Hyaluronic Acid base for 8-hour retention.',
    fullDesc: 'HydraRelief Premium features an advanced Hyaluronic Acid matrix that provides extended moisture retention for up to 8 hours. Ideal for chronic dry eye sufferers and post-operative patients requiring intensive lubrication without preservatives.',
    ingredients: ['High-Molecular HA', 'Electrolytes', 'Osmoprotectants', 'Sterile Water'],
    benefits: [
      'Extended 8-hour moisture retention',
      'Preservative-free for sensitive eyes',
      'Ideal for post-LASIK recovery',
      'Reduces inflammation'
    ]
  },
  'motoeye': {
    name: 'Motoeye Eye Drop',
    displayName: 'AllergyCalm Pro',
    price: '$21.00',
    images: [
      'images/motoeye.png',
      'images/motoeye.png',
      'images/motoeye.png'
    ],
    shortDesc: 'Triple-action antihistamine formula for allergy relief.',
    desc: 'Triple-action antihistamine formula. Targeted relief for redness and itching caused by pollen, pet dander, and dust.',
    fullDesc: 'AllergyCalm Pro delivers triple-action relief through advanced antihistamine technology. Specifically formulated to combat seasonal and environmental allergens including pollen, pet dander, dust mites, and airborne irritants.',
    ingredients: ['Antihistamine Complex', 'Anti-inflammatory Agents', 'Soothing Botanicals', 'Isotonic Base'],
    benefits: [
      'Fast-acting allergy relief within minutes',
      'Reduces redness and itching',
      'Long-lasting protection',
      'Non-drowsy formula'
    ]
  },
  'pegeye': {
    name: 'Pegeye Eye Drop',
    displayName: 'VisionClear',
    price: '$21.00',
    images: [
      'images/pegeye.png',
      'images/pegeye.png',
      'images/pegeye.png'
    ],
    shortDesc: 'Advanced formula for optimal vision clarity.',
    desc: 'Advanced multi-purpose formula designed to maintain optimal vision clarity and eye health throughout the day.',
    fullDesc: 'VisionClear combines cutting-edge ophthalmic science with natural ingredients to support long-term eye health. Perfect for professionals, students, and anyone seeking to maintain crystal-clear vision in demanding visual environments.',
    ingredients: ['Carboxymethylcellulose', 'Glycerin', 'Vitamin B12', 'Antioxidants'],
    benefits: [
      'Enhances visual clarity',
      'Protects against blue light damage',
      'Suitable for extended screen time',
      'Supports overall eye health'
    ]
  },
  'tobeye': {
    name: 'Tobeye Eye Drop',
    displayName: 'NightTime Restore',
    price: '$21.00',
    images: [
      'images/tobeye.jpeg',
      'images/tobeye.jpeg',
      'images/tobeye.jpeg'
    ],
    shortDesc: 'Overnight recovery and rejuvenation formula.',
    desc: 'Specialized overnight formula that works while you sleep to restore and rejuvenate tired eyes.',
    fullDesc: 'NightTime Restore is uniquely formulated for overnight application, allowing your eyes to recover from daily stress while you rest. The sustained-release formula ensures continuous lubrication and healing throughout the night.',
    ingredients: ['Extended-Release HA', 'Vitamins A & E', 'Melatonin', 'Restorative Peptides'],
    benefits: [
      'Overnight restoration and repair',
      'Reduces morning eye fatigue',
      'Intensive moisture therapy',
      'Promotes cellular regeneration'
    ]
  }
};

// CAROUSEL MOVEMENT
let currentIndex = 0;

function moveCarousel(direction) {
  const inner = document.getElementById('carousel-inner');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  // Calculate slides per view based on screen size
  let slidesPerView = 3;
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    slidesPerView = 2;
  } else if (window.innerWidth <= 768) {
    slidesPerView = 1;
  }
  
  currentIndex = currentIndex + direction;
  
  // Wrap around
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesPerView;
  } else if (currentIndex > totalSlides - slidesPerView) {
    currentIndex = 0;
  }
  
  const slideWidth = 100 / slidesPerView;
  inner.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// MODAL LOGIC - PREVIEW ON HOME PAGE
function openProduct(key) {
  const data = productData[key];
  
  document.getElementById('modal-name').innerText = data.displayName;
  document.getElementById('modal-price').innerText = data.price;
  document.getElementById('modal-desc').innerText = data.desc;
  document.getElementById('modal-img').src = data.images[0];
  
  // Set data attribute for linking to products page
  const viewDetailsBtn = document.getElementById('view-full-details');
  viewDetailsBtn.setAttribute('data-product', key);
  
  document.getElementById('product-modal').style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}

function closeProduct() {
  document.getElementById('product-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// VIEW FULL DETAILS - REDIRECT TO PRODUCTS PAGE
function viewFullDetails() {
  const productKey = document.getElementById('view-full-details').getAttribute('data-product');
  // Redirect to products page with hash
  window.location.href = `products.html#${productKey}`;
}

// CLOSE MODAL ON OUTSIDE CLICK
window.addEventListener('click', function(event) {
  const modal = document.getElementById('product-modal');
  if (event.target === modal) {
    closeProduct();
  }
});

// KEYBOARD NAVIGATION
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('product-modal');
  if (modal && modal.style.display === 'block') {
    if (event.key === 'Escape') {
      closeProduct();
    }
  }
});

// AUTO-ADVANCE CAROUSEL (Optional - uncomment if desired)

let autoAdvanceInterval;

function startAutoAdvance() {
  autoAdvanceInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);
}

function stopAutoAdvance() {
  clearInterval(autoAdvanceInterval);
}

// Start auto-advance on page load
window.addEventListener('load', startAutoAdvance);

// Stop on user interaction
document.querySelector('.carousel-wrap').addEventListener('mouseenter', stopAutoAdvance);
document.querySelector('.carousel-wrap').addEventListener('mouseleave', startAutoAdvance);
