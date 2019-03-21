$(document).ready(function(){
    if ($("#featured-sessions-slider").length > 0){
        $("#featured-sessions-slider").owlCarousel({
            items: 4,
            loop: false,
            dots: false,
            rewind: true,
            lazyLoad: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                560: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }

});