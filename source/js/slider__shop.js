const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: false,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
      
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      321: {
        slidesPerView: 3,
        spaceBetween: 20,
        // autoplay: {
        //   autoplay: true,
        //   delay: 3000,
        // },
      },
      920: {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            navigation: false,
        }
      }
    }
   
  });