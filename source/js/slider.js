$(document).ready(function () {
  $('.slider__hero').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
  });
});

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
    prevEl: '.swiper-button-prev-unique'
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
    
    }
  }
});