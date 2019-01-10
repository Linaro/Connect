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
    $('.sponsorship-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        lazyLoad: true,
        autoplay:true,
        autoplayHoverPause:true,
        responsiveClass: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            }
        }
    });
    $("#connect-event-slider").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
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

    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );

        youtube[i].addEventListener( "click", function() {
            var iframe = document.createElement( "iframe" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "id", "promoVideo" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
            this.appendChild( iframe );
            $(".youtube img").hide();
            $(".youtube .play-button").hide();
        } );	
    }

    // Check for modal close event
    $(".closeVideo").on('click', function () {
        e.stopPropagation();
        // Reload Iframe
        var iframe = document.getElementById("promoVideo");
        iframe.src = iframe.src;
        console.log($("#youtube-container").attr("data-embed"));
        console.log("Closed and paused.");
    });

    $(window).click(function () {
        // Reload Iframe
        var iframe = document.getElementById("promoVideo");
        iframe.src = iframe.src;
        console.log($("#youtube-container").attr("data-embed"));
        console.log("Closed and paused.");
    });

    $('.modal-dialog').click(function (event) {
        event.stopPropagation();
    });


});