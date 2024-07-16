
/* Hero swiperslider */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    });