$(window).on("load",function(){
    var url = "https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt";    
    $("#eventbrite-iframe").attr("src",url);
    
    $("#eventbrite-iframe").on("load",function(){
        $(this).removeClass("hidden-iframe");
        $("#placeholder-skeleton").hide();
        $(this).addClass("visible-iframe");

    });
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
});