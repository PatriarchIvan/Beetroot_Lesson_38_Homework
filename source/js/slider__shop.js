const menuS = ['', '', '']
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
            navigation: {
                enabled: false,
            },
        },
        421: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1170: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }
});