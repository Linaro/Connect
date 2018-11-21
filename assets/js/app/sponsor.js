$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ container: 'body'})
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        lazyLoad: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});