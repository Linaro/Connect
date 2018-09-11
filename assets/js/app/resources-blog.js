$(window).on("load", function () {


    // Youtube Lazy Load
    // Check to see if the using_json iframe exists
    if ($("#youtube-iframe")) {
        // Get data-src url
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

            $("#youtube-iframe").on("load", function () {
                $("#video-embed").removeClass("hidden-iframe");
                $(this).removeClass("hidden-iframe");
                $("#video-skeleton").hide();
                $(this).addClass("visible-iframe");
                $("#video-embed").addClass("visible-iframe");
            });
        }

    }
    // Use the default functionality for loading resources from the front matter.
    else if ($("#youtube-iframe")) {
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

            $("#youtube-iframe").on("load", function () {
                $("#video-embed").removeClass("hidden-iframe");
                $(this).removeClass("hidden-iframe");
                $("#video-skeleton").hide();
                $(this).addClass("visible-iframe");
                $("#video-embed").addClass("visible-iframe");
            });
        }

    }

    // Resource presentation lazy load
    // Check if using_json class is set
    // if it is then check the resources.json file for a presentation
    // If thiere is not presentation then leave the placeholder
    if ($("#presentation-holder.using_json #presentation-iframe ")) {

        // Get data-src url
        var url = $("#presentation-iframe").attr("data-src");
        // Get the current Connect code from the event-code attribute
        var connectCode = $("#presentation-holder.using_json").attr("event-id");
        // URL for the resources.json
        var resources_json_url = "https://s3.amazonaws.com/connect.linaro.org/" + connectCode.toString().toLowerCase() + "/resources.json";
        console.log(resources_json_url);

        // GET the JSON response
        $.get(api, function (data) {
            // Loop each object in the data json array
            $.each(data, function (idx, obj) {
                console.log(idx, obj);
            });
        });

        // Set the src to the data-src
        $("#presentation-iframe").attr("src", url);

        $("#presentation-iframe").on("load", function () {
            $("#presentation-embed").removeClass("hidden-iframe");
            $(this).removeClass("hidden-iframe");
            $("#presentation-skeleton").hide();
            $(this).addClass("visible-iframe");
            $("#presentation-embed").addClass("visible-iframe");
        });
    }
    // Presentation Lazy load using default src attribute values added
    // using Jekyll from the post's front matter values
    else if ($("#presentation-iframe")) {
        // Get data-src url
        var url = $("#presentation-iframe").attr("data-src");
        // Set the src to the data-src
        $("#presentation-iframe").attr("src", url);

        $("#presentation-iframe").on("load", function () {
            $("#presentation-embed").removeClass("hidden-iframe");
            $(this).removeClass("hidden-iframe");
            $("#presentation-skeleton").hide();
            $(this).addClass("visible-iframe");
            $("#presentation-embed").addClass("visible-iframe");
        });
    }
});