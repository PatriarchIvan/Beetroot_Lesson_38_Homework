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
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   autoplay: true,
  // }, 
  // pagination: {
  //   el: '.swiper-pagination',
  // },
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
      spaceBetween: 20
    },
    920: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  }
});
