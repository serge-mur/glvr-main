document.addEventListener("DOMContentLoaded", () => {
  const mainSliderThumbs = new Swiper(".main-slider__thumbs", {
    // loop: true,
    // spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    // freeMode: {
    //   enabled: true,
    //   sticky: true,
    // },
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    // centerInsufficientSlides: true,
    // watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 5, 
      },
    }
  });
  const mainSliderContent = new Swiper(".main-slider__content", {
    slidesPerView: 1.025,
    // loop: true,
    // spaceBetween: 0,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      // when window width is >= 576px
      992: {
        slidesPerView: 1, 
      },
    },
    thumbs: {
      swiper: mainSliderThumbs,
    },
  });
});
