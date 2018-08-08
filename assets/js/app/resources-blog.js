$(window).on("load", function () {
    // Youtube Lazy Load
    if($("#youtube-iframe")){
        // Get data-src url
        var url = $("#youtube-iframe").attr("data-src");
        // Function to return the ID of a youtube video given the standard URL
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

        $("#youtube-iframe").on("load", function () {
            $(this).removeClass("hidden-iframe");
            $("#video-skeleton").hide();
            $(this).addClass("visible-iframe");
        });
    }
    // Presentation Lazy load
    if ($("#presentation-iframe")){
        // Get data-src url
        var url = $("#presentation-iframe").attr("data-src");
        // Set the src to the data-src
        $("#presentation-iframe").attr("src", url);

        $("#presentation-iframe").on("load", function () {
            $(this).removeClass("hidden-iframe");
            $("#presentation-skeleton").hide();
            $(this).addClass("visible-iframe");
        });
    }
});