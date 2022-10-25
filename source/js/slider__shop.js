const swiper = new Swiper('.slider__shop', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        // DEFAULT BUTTONS
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        //   FOR CUSTOM BUTTONS USE NEXT CLASSES ===>
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
        },
        920: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }
});