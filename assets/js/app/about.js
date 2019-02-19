$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:false,
        lazyLoad: true,
        autoplay:true,
        autoplayTimeout:3000,
        rewind: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            },
            1200:{
                items:8
            }
        }
    });
});