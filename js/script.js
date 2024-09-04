document.addEventListener("DOMContentLoaded", () => {

  const mainSliderThumbs = new Swiper(".main-slider__thumbs", {
    slidesPerView: 3.5,
    freeMode: true,
    breakpoints: {
      //  >= 576px
      576: {
        slidesPerView: 5, 
      },
    }
  });

  const mainSliderContent = new Swiper(".main-slider__content", {
    slidesPerView: 'auto',
    thumbs: {
      swiper: mainSliderThumbs,
      autoScrollOffset: 1
    },    
    breakpoints: {
      576: {
        slidesPerView: 1, 
      },
    },
  });

});
