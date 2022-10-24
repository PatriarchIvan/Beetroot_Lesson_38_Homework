$(document).ready(function(){
    $('.slider__hero').slick({
        arrows: false,
        dots : true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: true,
    });
  });

  $(document).ready(function(){
    $('.slider__shop').slick({
        arrows: false,
        dots : false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
  });