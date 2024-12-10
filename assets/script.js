const swiper = new Swiper('.project-slider', {
  direction: 'vertical', // Set direction to vertical
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,  // Space between slides
  speed: 600,        // Smooth transition speed (in ms)
  effect: 'slide',   // Slide effect for smooth transition
  on: {
    slideChangeTransitionStart: function () {
      const slides = document.querySelectorAll('.project-slide');
      slides.forEach((slide) => {
        if (!slide.classList.contains('swiper-slide-active')) {
          slide.style.visibility = 'hidden';
          slide.style.opacity = '0';
        }
      });
    },
    slideChangeTransitionEnd: function () {
      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        activeSlide.style.visibility = 'visible';
        activeSlide.style.opacity = '1';
      }
    },
  },
});
