

let awardsSlider = new Swiper(".awards-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    margin:0,
    
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
            margin:0 },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            margin:0 },
    }
});