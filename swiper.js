const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Unified trigger for all slide changes
swiper.on('slideChangeTransitionStart', updateMainBackground);

// Function to update the main background
function updateMainBackground() {
  const activeSlide = document.querySelector('.swiper-slide-active');
  const mainContainer = document.querySelector('.swiper-background');

  if (activeSlide && mainContainer) {
    const newBackground = getComputedStyle(activeSlide).background;

    // Apply fade effect
    mainContainer.style.transition = 'background 0.5s ease-in-out';
    mainContainer.style.background = newBackground;
  }
}

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

// Disable some common Ctrl+ key combinations (e.g. Ctrl+U, Ctrl+S)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && ['u', 's', 'a', 'c'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
}, false);
