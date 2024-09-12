document.addEventListener("DOMContentLoaded", () => {

  let mainSliderContent;
  let mainSliderThumbs;
  let mainSliderThumbsMobile;
  let init = false;
  let initMobile = false;
  
  let menuSection = document.querySelectorAll('.main-slider__thumbs>.swiper-wrapper>.slide-logo');
  let mainSection = document.querySelectorAll('.main-slider__content>.swiper-wrapper>.slide-content');


  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 575px)');
    let tablet = window.matchMedia('(min-width: 576px) and (max-width: 991px)');
    let desktop = window.matchMedia('(min-width: 992px)');
    let menuSectionHeight = document.querySelector('.main-slider__thumbs').clientHeight;
    // console.log('menuSectionHeight=',menuSectionHeight);
    let offset;
    let rect = document.querySelector('.main-slider__content').getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    offset = rect.top + scrollTop - menuSectionHeight;
    // console.log(offset);
    
        // for clickable event
        menuSection.forEach(v => {
          v.addEventListener('click', (e) => {
            // let offset  = 142;
            // console.log(v.dataset.link);
            if (mobile.matches || tablet.matches) {
              // offset  = 62;
            }
            window.scrollTo({
              top: document.querySelector(v.dataset.link).offsetTop + offset,
              behavior: "smooth"
            });
            
              // menuSection.forEach(j => j.classList.remove('swiper-slide-thumb-active'))
              // v.classList.add('swiper-slide-thumb-active')
          })
        })
      
        // for window scrolldown event
        window.addEventListener("scroll", (e) => {
                
          mainSection.forEach((v, i) => {
            let rect = v.getBoundingClientRect().y
            if ((rect < window.innerHeight - 400) && mobile.matches) { // 200
              menuSection.forEach(v => v.classList.remove('swiper-slide-thumb-active'))
              menuSection[i].classList.add('swiper-slide-thumb-active')
            }
          })
        })


    // Enable (for desktop or tablet)
    if ((desktop.matches) || (tablet.matches)) {
      if (!init) {
        init = true;

        if (initMobile) {
          // console.log('Destroy MobileSlider');
          mainSliderThumbsMobile.destroy();
        }

        // console.log('Init DesktopSlider');

        mainSliderThumbs = new Swiper(".main-slider__thumbs", {
          slidesPerView: 3.5,
          freeMode: true,
          breakpoints: {
            //  >= 576px
            576: {
              slidesPerView: 'auto',
            },
          }
        });
        mainSliderContent = new Swiper('.main-slider__content', {
          slidesPerView: 1,
          thumbs: {
            swiper: mainSliderThumbs,
            // autoScrollOffset: 1
          },
          autoplay: {
            delay: 5000,
            // disableOnInteraction: false,
          },
          breakpoints: {
            576: {
              slidesPerView: 1.03,
            },
            992: {
              slidesPerView: 1,
            },
          },
        });

      }
    }

    // Disable (for mobile)
    else if (mobile.matches) {
      
      if (init == true) {
        // console.log('Destroy DesktopSlider');
        mainSliderThumbs.destroy();
        mainSliderContent.destroy();
        init = false;
      }

      if (!initMobile) {
        // console.log('Init MobileSlider');
        initMobile = true;
        mainSliderThumbsMobile = new Swiper(".main-slider__thumbs", {
          slidesPerView: 3.5,
          freeMode: true,

        });
          
      }
    }
  }
  window.addEventListener('load', function () {
    swiperMode();
  });
  window.addEventListener('resize', function () {
    swiperMode();
  });

});