const swiperPart = new Swiper('.partners.swiper', {
    slidesPerView: 9,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        speed: 500,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique-part',
        prevEl: '.swiper-button-prev-unique-part',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //   },
});