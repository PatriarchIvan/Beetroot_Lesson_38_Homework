const menu = ['', '', ''];
const swiperPart = new Swiper('.partners.swiper', {
    slidesPerView: 9,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        waitForTransition: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique-part',
        prevEl: '.swiper-button-prev-unique-part',
    },

    pagination: {
        el: '.swiper-pagination',
        enabled: false,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            pagination: {
                enabled: true,
            }
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        // when window width is >= 920px
        920: {
            slidesPerView: 9,
            spaceBetween: 40,
        },
    },

});
