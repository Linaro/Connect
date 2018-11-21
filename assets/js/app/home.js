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

    if($("#video-holder").length > 0) {
        // Get data-src attribute values - this is the youtube video link added from the page front matter in Jekyll
        var url = $("#youtube-iframe").attr("data-src");
        // Function to return the ID of a youtube video given the standard URL
        if (url) {
            function getId(url) {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = url.match(regExp);

                if (match && match[2].length == 11) {
                    return match[2];
                } else {
                    return 'error';
                }
            }
            // Get the ID for the YouTube video.
            var youtubeId = getId(url);
            // Create the YouTube embed url
            var embedUrl = "//www.youtube.com/embed/" + youtubeId;
            // Set the src to the data-src
            $("#youtube-iframe").attr("src", embedUrl);
            // Set video Iframe to visible and remove the video-skeleton placeholder
            // once the video has loaded with the s
            $("#youtube-iframe").on("load", function () {
                $("#video-embed").removeClass("hidden-iframe");
                $(this).removeClass("hidden-iframe");
                $("#video-skeleton").hide();
                $(this).addClass("visible-iframe");
                $("#video-embed").addClass("visible-iframe");
            });
        }
    }
});