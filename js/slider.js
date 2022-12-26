let slillsSlider = new Swiper(".skills-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        795: {
            slidesPerView: 2,
            spaceBetween: 30, },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30, },
    }
});

let awardsSlider = new Swiper(".awards-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 30, },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30, },
    }
});