document.addEventListener("DOMContentLoaded", () => {
  const mainSliderThumbs = new Swiper(".main-slider__thumbs", {
    // loop: true,
    // spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    // watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 5, 
      },
    }
  });
  const mainSliderContent = new Swiper(".main-slider__content", {
    // loop: true,
    // spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: mainSliderThumbs,
    },
  });
});
