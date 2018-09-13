$(window).on("load", function () {
    // Youtube Lazy Load
    // Check to see if the using_json iframe exists
    if ($("#video-holder.using_json").length > 0) {

        // Get the current Connect code from the event-code attribute
        var connectCode = $("#video-holder.using_json").attr("event-id");
        // URL for the resources.json
        var resources_json_url = "https://s3.amazonaws.com/connect.linaro.org/" + connectCode.toString().toLowerCase() + "/resources.json";
        // var resources_json_url = "http://localhost:4002/resources.json";
        console.log(resources_json_url);
        // GET the JSON response
        $.ajax({
            url: resources_json_url,
            dataType: 'json',
            complete: function(jsonResponse){
                jsonData = JSON.parse(jsonResponse.responseText);
                // Find the corresponding key in the JSON data 
                $.each(jsonData, function (idx, obj) {
                    // Get the current Connect code
                    var sessionId = $("#video-holder.using_json").attr("session-id");
                    if (obj.session_id.toString().toLowerCase() == sessionId.toString().toLowerCase() ){
                        // Grab the main presentation URL
                        console.log(obj.session_id);
                        if (obj.youtube_video_url.toString().length > 1){
                            var video_url = obj.youtube_video_url.toString();
                        }
                        else if (obj.s3_video_url.toString().length > 1){
                            var video_url = obj.s3_video_url.toString();
                        }
                        else{
                            var video_url = "";                           
                        }
                        console.log("Video URL: " + video_url);
                        // Check to see if the main presentation URL does not equal "None"
                        if(video_url != "") {
                            $("#youtube-iframe").attr("src", video_url);
                            // Set the src to the data-src
                            $("#youtube-iframe").on("load", function () {
                                $("#video-embed").removeClass("hidden-iframe");
                                $(this).removeClass("hidden-iframe");
                                $("#video-skeleton").hide();
                                $(this).addClass("visible-iframe");
                                $("#video-embed").addClass("visible-iframe");
                            });
                        }
                        
                        // Set the Download button href and Text
                        if ($(".s3-download.video.using_json").length > 0 && video_url != ""){
                            $(this).html("Download");
                            $(this).attr("href", video_url);
                        }

                    }
                });
            }
        });
    }
    // Use the default functionality for loading resources from the front matter.
    else if ($("#video-holder").length > 0) {
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
    if ($("#presentation-holder.using_json #presentation-iframe ").length > 0) {
        // Get data-src url
        var url = $("#presentation-iframe").attr("data-src");
        // Get the current Connect code from the event-code attribute
        var connectCode = $("#presentation-holder.using_json").attr("event-id");
        // URL for the resources.json
        var resources_json_url = "https://s3.amazonaws.com/connect.linaro.org/" + connectCode.toString().toLowerCase() + "/resources.json";
        // var resources_json_url = "http://localhost:4002/resources.json";
        console.log(resources_json_url);

        // GET the JSON response
        $.ajax({
            url: resources_json_url,
            dataType: 'json',
            complete: function(jsonResponse){
                jsonData = JSON.parse(jsonResponse.responseText);
                // Find the corresponding key in the JSON data 
                $.each(jsonData, function (idx, obj) {
                    // Get the current Connect code
                    var sessionId = $("#presentation-holder.using_json").attr("session-id");
                    // console.log(obj.session_id.toString().toLowerCase() + " vs " + sessionId.toString().toLowerCase() );
                    if (obj.session_id.toString().toLowerCase() == sessionId.toString().toLowerCase()) {
                        console.log(obj.session_id);

                        console.log(obj.slideshare_url + " vs " + "");
                        console.log(obj.s3_presentation_url + " vs " + "");

                        // Grab the main presentation URL
                        if (obj.slideshare_url.toString().length > 1) {
                            var presentation_url = obj.slideshare_url.toString();
                        }
                        else if (obj.s3_presentation_url.toString().length > 1) {
                            var presentation_url = obj.s3_presentation_url.toString();
                        }
                        else {
                            var presentation_url = ""
                        }
                        // Check to see if the main presentation URL does not equal "None"
                        if (presentation_url.toString().length > 1) {
                            $("#presentation-data-embed").attr("src", presentation_url);
                            // Set the src to the data-src
                            $("#presentation-data-embed").ready( function () {
                                $("#presentation-embed").removeClass("hidden-iframe");
                                $("#presentation-data-embed").removeClass("hidden-iframe");
                                $("#presentation-skeleton").hide();
                                $("#presentation-embed").addClass("visible-iframe");
                                $("#presentation-data-embed").addClass("visible-iframe");
                            });
                        }


                        // Set the Download button href and Text
                        if ($(".s3-download.presentation.using_json").length > 0 && presentation_url != "") {
                            $(this).html("Download");
                            $(this).attr("href", presentation_url);
                        }

                    }
                });
            }
        });
    }
    // Presentation Lazy load using default src attribute values added
    // using Jekyll from the post's front matter values
    else if ($("#presentation-iframe").length > 0) {
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