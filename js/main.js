document.addEventListener('DOMContentLoaded', () => {
  
  // 1. SMOOTH SCROLLING FOR NAVIGATION
  // This handles the "Our Products" link and any other anchor tags
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Adjust 80 to match your navbar height
          const navHeight = 80; 
          const targetPosition = targetElement.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // 2. MODERN INTERSECTION OBSERVER (SCROLL REVEAL)
  // This makes elements with the 'reveal' class fade in as they enter the screen
  const initReveal = () => {
    const observerOptions = {
      root: null, // use the viewport
      threshold: 0.15, // 15% of the element must be visible
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class defined in your CSS
          entry.target.classList.add('visible');
          // Once animated, stop observing to save system resources
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements you want to animate
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
  };

  // EXECUTE FUNCTIONS
  smoothScroll();
  initReveal();
});
