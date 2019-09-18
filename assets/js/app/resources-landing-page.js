var jsonData = [];
$(document).ready(function(){
    var using_json = $('#resources-overview-table').data("using-json");
    var connect_code = $('#resources-overview-table').data("connect-id").toString().toLowerCase();
    var resources_json_url = "https://static-linaro-org.s3.amazonaws.com/connect/" + connect_code + "/resources.json";
    // Check if we're using json for the resources data source and if so perform the ajax request
    if (using_json == "True") {
        $.ajax({
            url: resources_json_url,
            dataType: 'json',
            complete: function (jsonResponse) {
                jsonData = JSON.parse(jsonResponse.responseText);
            }
        });
    }
});
$(document).ajaxStop(function () {
    if ($('#resources-overview-table').length > 0) {
        var using_json = $('#resources-overview-table').data("using-json");
        if (using_json == "True") {
            // Loop over table rows and populate links
            $('#resources-overview-table > tbody  > tr').each(function () {
                var session_id  = $(this).data('session-id');
                var presentation_url = "";
                var video_url = "";
                presentation_url, video_url = $.each(jsonData, function (idx, obj) {
                    if (obj.session_id.toString().toLowerCase() == session_id.toString().toLowerCase()) {
                        var found_presentation = "";
                        var found_video = "";
                        // Grab the main presentation URL
                        if (obj.s3_presentation_url.toString().length > 1) {
                            found_presentation = obj.s3_presentation_url.toString();
                        }
                        // Grab the video URL
                        if (obj.s3_video_url.toString().length > 1) {
                            found_video = obj.s3_video_url.toString();
                        }
                        return found_presentation, found_video;
                    }
                });

                // Update the presentation DOM element
                if (presentation_url != ""){
                    var presentation_el = "<a href='" + presentation_url + "'>View</a>";
                    $("#presentation_container").html(presentation_el);
                }
                else{
                    $("#presentation_container").html("N/A");
                }
                // Updated the video DOM element
                if (video_url != ""){
                    var video_el = "<a href='" + video_url + "'>View</a>";
                    $("#video_container").html(video_el);
                }
                else{
                    $("#video_container").html("N/A");
                }


            });

        }
    }
});
