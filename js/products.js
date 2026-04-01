// Import product data from carousel.js
// (In production, this would be in a separate data file)

// Check if we arrived from home page with a specific product hash
window.addEventListener('load', function() {
  const hash = window.location.hash.substring(1); // Remove the #
  if (hash && productData[hash]) {
    // Small delay to ensure page is rendered
    setTimeout(() => {
      openProductDetail(hash);
    }, 300);
  }
});

// OPEN PRODUCT DETAIL MODAL
function openProductDetail(key) {
  const data = productData[key];
  
  // Set main image
  document.getElementById('detail-main-img').src = data.images[0];
  
  // Set product info
  document.getElementById('detail-name').innerText = data.displayName;
  document.getElementById('detail-price').innerText = data.price;
  document.getElementById('detail-full-desc').innerText = data.fullDesc;
  
  // Set benefits list
  const benefitsList = document.getElementById('detail-benefits');
  benefitsList.innerHTML = '';
  data.benefits.forEach(benefit => {
    const li = document.createElement('li');
    li.innerText = benefit;
    benefitsList.appendChild(li);
  });
  
  // Set ingredients
  const ingredientsContainer = document.getElementById('detail-ingredients');
  ingredientsContainer.innerHTML = '';
  data.ingredients.forEach(ingredient => {
    const tag = document.createElement('span');
    tag.className = 'ingredient-tag';
    tag.innerText = ingredient;
    ingredientsContainer.appendChild(tag);
  });
  
  // Set up thumbnail carousel
  const thumbnailContainer = document.getElementById('thumbnail-carousel');
  thumbnailContainer.innerHTML = '';
  
  data.images.forEach((imgSrc, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
    thumb.onclick = () => selectThumbnail(imgSrc, thumb);
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `${data.displayName} view ${index + 1}`;
    
    thumb.appendChild(img);
    thumbnailContainer.appendChild(thumb);
  });
  
  // Show modal
  document.getElementById('product-detail-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Update URL hash without scrolling
  history.pushState(null, null, `#${key}`);
}

// THUMBNAIL SELECTION
function selectThumbnail(imageSrc, thumbnailElement) {
  // Update main image
  document.getElementById('detail-main-img').src = imageSrc;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbnailElement.classList.add('active');
}

// CLOSE PRODUCT DETAIL
function closeProductDetail() {
  document.getElementById('product-detail-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Remove hash from URL
  history.pushState(null, null, window.location.pathname);
}

// CLOSE ON OUTSIDE CLICK
window.addEventListener('click', function(event) {
  const modal = document.getElementById('product-detail-modal');
  if (event.target === modal) {
    closeProductDetail();
  }
});

// KEYBOARD NAVIGATION
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('product-detail-modal');
  if (modal && modal.style.display === 'block') {
    if (event.key === 'Escape') {
      closeProductDetail();
    } else if (event.key === 'ArrowLeft') {
      navigateThumbnail(-1);
    } else if (event.key === 'ArrowRight') {
      navigateThumbnail(1);
    }
  }
});

// NAVIGATE THUMBNAILS WITH KEYBOARD
function navigateThumbnail(direction) {
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  const activeIndex = thumbnails.findIndex(thumb => thumb.classList.contains('active'));
  
  let newIndex = activeIndex + direction;
  
  // Wrap around
  if (newIndex < 0) newIndex = thumbnails.length - 1;
  if (newIndex >= thumbnails.length) newIndex = 0;
  
  thumbnails[newIndex].click();
}
