// PRODUCT DATA WITH MULTIPLE IMAGES
const productData = {
  'hytears': {
    name: 'Hytears Eye Drop',
    displayName: 'Hytears Eye Drop',
    price: '₹430.00',
    images: [
      'images/Eye Drops/HYTEARS/20260331_092915.jpg',
      'images/Eye Drops/HYTEARS/20260331_092924.jpg',
      'images/Eye Drops/HYTEARS/20260331_092932.jpg'
    ],
    shortDesc: 'Sodium hyaluronate eye drops formulated to support ocular lubrication.',
    desc: 'Sodium hyaluronate eye drops formulated to support tear-film stability and help relieve dryness.',
    fullDesc: 'Hytears is a sodium hyaluronate ophthalmic lubricant formulated to support tear-film stability and relieve dryness. The pack lists sodium hyaluronate 0.3% w/v with stabilized oxychloro complex 0.005% w/v in a sterile aqueous base.',
    ingredients: ['Sodium Hyaluronate 0.3% w/v', 'Stabilized Oxychloro Complex 0.005% w/v'],
    benefits: [
      'Helps lubricate dry and irritated eyes',
      'Supports tear-film stability',
      'Sterile ophthalmic solution for external use',
      'Suitable where sodium hyaluronate-based hydration is needed'
    ]
  },
  'moseye': {
    name: 'Moseye Eye Drop',
    displayName: 'Moseye Eye Drop',
    price: '₹190.00',
    images: [
      'images/Eye Drops/MOSEYE-D/20260331_092843.jpg',
      'images/Eye Drops/MOSEYE-D/20260331_092853.jpg',
      'images/Eye Drops/MOSEYE-D/20260331_092859.jpg'
    ],
    shortDesc: 'Combination ophthalmic solution containing moxifloxacin and dexamethasone phosphate.',
    desc: 'Sterile combination eye drop with moxifloxacin and dexamethasone phosphate for physician-directed ophthalmic use.',
    fullDesc: 'Moseye is a combination ophthalmic solution containing moxifloxacin and dexamethasone phosphate. The pack lists moxifloxacin hydrochloride equivalent to moxifloxacin 0.5% w/v and dexamethasone sodium phosphate equivalent to dexamethasone phosphate 0.1% w/v, with stabilized oxychloro complex 0.005% w/v as preservative.',
    ingredients: ['Moxifloxacin 0.5% w/v', 'Dexamethasone Phosphate 0.1% w/v', 'Stabilized Oxychloro Complex 0.005% w/v'],
    benefits: [
      'Combines antibiotic and anti-inflammatory action',
      'Formulated as a sterile ophthalmic solution',
      'Supports physician-directed management of eye infection and inflammation',
      'Convenient combination drop format'
    ]
  },
  'motoeye': {
    name: 'Motoeye Eye Drop',
    displayName: 'Motoeye Eye Drop',
    price: '₹190.00',
    images: [
      'images/Eye Drops/MOTOEYE/20260331_092815.jpg',
      'images/Eye Drops/MOTOEYE/20260331_092828.jpg',
      'images/Eye Drops/MOTOEYE/20260331_092835.jpg'
    ],
    shortDesc: 'Combination ophthalmic solution with moxifloxacin and tobramycin.',
    desc: 'Sterile eye drop combining moxifloxacin and tobramycin in a single ophthalmic solution.',
    fullDesc: 'Motoeye is an ophthalmic solution combining moxifloxacin hydrochloride equivalent to moxifloxacin 0.5% w/v with tobramycin sulphate equivalent to tobramycin 0.3% w/v. The pack also lists stabilized oxychloro complex 0.005% w/v in a sterile aqueous base.',
    ingredients: ['Moxifloxacin 0.5% w/v', 'Tobramycin 0.3% w/v', 'Stabilized Oxychloro Complex 0.005% w/v'],
    benefits: [
      'Dual-antibiotic ophthalmic formulation',
      'Sterile solution for external ophthalmic use',
      'Designed for physician-directed anti-infective eye care',
      'Combines broad-spectrum antibacterial agents in one drop'
    ]
  },
  'pegeye': {
    name: 'Pegeye Eye Drop',
    displayName: 'Pegeye Eye Drop',
    price: '₹330.00',
    images: [
      'images/Eye Drops/PEGEYE/20260331_092947.jpg',
      'images/Eye Drops/PEGEYE/20260331_092956.jpg',
      'images/Eye Drops/PEGEYE/20260331_093006.jpg'
    ],
    shortDesc: 'Lubricating eye drops with polyethylene glycol 400 and propylene glycol.',
    desc: 'Sterile lubricating eye drop formulated with polyethylene glycol 400 and propylene glycol.',
    fullDesc: 'Pegeye is a lubricating eye drop containing polyethylene glycol 400 and propylene glycol in a sterile aqueous base. The pack lists polyethylene glycol 400 at 0.4% w/v and propylene glycol at 0.3% w/v.',
    ingredients: ['Polyethylene Glycol 400 0.4% w/v', 'Propylene Glycol 0.3% w/v'],
    benefits: [
      'Lubricates the ocular surface',
      'Helps relieve dryness and irritation',
      'Sterile solution for external use',
      'Uses a dual-lubricant formula for moisture support'
    ]
  },
  'tobeye': {
    name: 'Tobeye Eye Drop',
    displayName: 'Tobeye Eye Drop',
    price: '₹120.00',
    images: [
      'images/Eye Drops/TOBEYE/20260331_092546.jpg',
      'images/Eye Drops/TOBEYE/20260331_092741.jpg',
      'images/Eye Drops/TOBEYE/20260331_092752.jpg'
    ],
    shortDesc: 'Tobramycin ophthalmic solution in a sterile preserved base.',
    desc: 'Sterile tobramycin eye drop formulated for physician-directed ophthalmic use.',
    fullDesc: 'Tobeye is a tobramycin ophthalmic solution formulated as a sterile aqueous eye drop. The pack lists tobramycin 0.3% w/v with benzalkonium chloride solution equivalent to 0.02% w/v in a preserved sterile base.',
    ingredients: ['Tobramycin 0.3% w/v', 'Benzalkonium Chloride 0.02% w/v'],
    benefits: [
      'Antibiotic ophthalmic solution',
      'Sterile formulation for physician-directed use',
      'Suitable for targeted antibacterial eye care',
      'Simple single-agent tobramycin drop format'
    ]
  }
};

// CAROUSEL MOVEMENT
let currentIndex = 0;

function moveCarousel(direction) {
  const inner = document.getElementById('carousel-inner');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  if (!inner || !slides.length) {
    return;
  }
  
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
  
  const slideStyle = window.getComputedStyle(inner);
  const gap = parseFloat(slideStyle.columnGap || slideStyle.gap || '0');
  const slideWidth = slides[0].offsetWidth;
  const offset = currentIndex * (slideWidth + gap);
  inner.style.transform = `translateX(-${offset}px)`;
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
window.addEventListener('load', () => {
  const carouselWrap = document.querySelector('.carousel-wrap');

  if (carouselWrap) {
    carouselWrap.addEventListener('mouseenter', stopAutoAdvance);
    carouselWrap.addEventListener('mouseleave', startAutoAdvance);
    moveCarousel(0);
  }
});

window.addEventListener('resize', () => {
  moveCarousel(0);
});
