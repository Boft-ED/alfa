var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
});