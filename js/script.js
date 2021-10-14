var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    }
});

jQuery(document).ready(function ($) {
    $('.burger, .overlay').click(function () {
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('nav').toggleClass('show');
        $('body').toggleClass('overflow');
    });
});

