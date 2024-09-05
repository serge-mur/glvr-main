document.addEventListener("DOMContentLoaded", () => {

  let menuSection = document.querySelectorAll('.main-slider__thumbs>.swiper-wrapper>.slide-logo');

  // for clickable event
  menuSection.forEach(v => {
    v.onclick = (() => {
      console.log(v.dataset.link);
      window.scrollTo({
        top: document.querySelector(v.dataset.link).offsetTop + 65,
        behavior: "smooth"
      });
      setTimeout(() => {
        menuSection.forEach(j => j.classList.remove('swiper-slide-thumb-active'))
        v.classList.add('swiper-slide-thumb-active')
      }, 300)
    })
  })

  // for window scrolldown event

  window.onscroll = (() => {
    let mainSection = document.querySelectorAll('.main-slider__content>.swiper-wrapper>.slide-content');

    mainSection.forEach((v, i) => {
      let rect = v.getBoundingClientRect().y
      if (rect < window.innerHeight - 200) {
        menuSection.forEach(v => v.classList.remove('swiper-slide-thumb-active'))
        menuSection[i].classList.add('swiper-slide-thumb-active')
      }
    })
  })


  // const mainSliderContent = new Swiper(".main-slider__content", {
  //   slidesPerView: 'auto',
  //   thumbs: {
  //     swiper: mainSliderThumbs,
  //     autoScrollOffset: 1
  //   },    
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 1, 
  //     },
  //   },
  // });
  // const mainSliderThumbs = new Swiper(".main-slider__thumbs", {
  //   slidesPerView: 3.5,
  //   freeMode: true,
  //   breakpoints: {
  //     //  >= 576px
  //     576: {
  //       slidesPerView: 5, 
  //     },
  //   }
  // });
});

var mainSliderContent;
var mainSliderThumbs;
var init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 575px)');
  let tablet = window.matchMedia('(min-width: 576px) and (max-width: 991px)');
  let desktop = window.matchMedia('(min-width: 992px)');

  // Enable (for desktop or tablet)
  if ((desktop.matches) || (tablet.matches)) {
    if (!init) {
      init = true;
      mainSliderThumbs = new Swiper(".main-slider__thumbs", {
        slidesPerView: 3.5,
        freeMode: true,
        breakpoints: {
          //  >= 576px
          576: {
            slidesPerView: 5,
          },
        }
      });
      mainSliderContent = new Swiper('.main-slider__content', {
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
    }
  }

  // Disable (for mobile)
  else if ((mobile.matches) && init == true) {
    mainSliderThumbs.destroy();
    mainSliderContent.destroy();
    init = false;
  }
}
window.addEventListener('load', function () {
  swiperMode();
});
window.addEventListener('resize', function () {
  swiperMode();
});
