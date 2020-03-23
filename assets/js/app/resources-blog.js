$(window).on("load", function() {
  var session_files = [];
  // Check to see if we are using the resources.json for fetching resources
  if ($("#video-holder.using_json").length > 0) {
    // Get the current Connect code from the event-code attribute
    var connectCode = $("#video-holder.using_json").attr("event-id");
    var sessionId = $("#video-holder.using_json").attr("session-id");
    // URL for the resources.json
    var resources_json_url =
      "https://static-linaro-org.s3.amazonaws.com/connect/" +
      connectCode.toString().toLowerCase() +
      "/resources.json";
    // GET the JSON response
    $.ajax({
      url: resources_json_url,
      dataType: "json",
      complete: function(jsonResponse) {
        jsonData = JSON.parse(jsonResponse.responseText);
        // Find the corresponding key in the JSON data
        $.each(jsonData, function(idx, obj) {
          // Get the current Connect code
          if (
            obj.session_id.toString().toLowerCase() ==
            sessionId.toString().toLowerCase()
          ) {
            // Grab the main video URL
            if (obj.youtube_video_url.toString().length > 1) {
              if (obj.youtube_video_url[0].length > 1) {
                console.log("array of videos");
                console.log(obj.youtube_video_url);
                console.log(obj.youtube_video_url[0]);
                var video_url = obj.youtube_video_url[0].toString();
                // Add all video files to the session_files array.
                $.each(obj.s3_video_url, function(index, object) {
                  session_files.push(object);
                });
              } else {
                var video_url = obj.youtube_video_url.toString();
                session_files.push(video_url);
              }
            }
            // Set video url to "" if no url exits
            else {
              var video_url = "";
            }
            // Check to see if the main video URL does not equal ""
            if (video_url != "") {
              // Check to see if we are using the youtube url
              if (obj.youtube_video_url.length > 1) {
                // Funtion to extract the video id from the youtube url
                function getId(url) {
                  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                  var match = url.match(regExp);

                  if (match && match[2].length == 11) {
                    return match[2];
                  } else {
                    return "error";
                  }
                }
                // Get the ID for the YouTube video.
                var youtubeId = getId(video_url);
                // Create the YouTube embed url
                var embedUrl = "//www.youtube.com/embed/" + youtubeId;
                // Set the src to the YouTube emebd url
                $("#youtube-iframe").attr("src", embedUrl);
              }
              // otherwise set the src to the video_url without modifying to retreive the YT embed url
              else {
                $("#youtube-iframe").attr("src", video_url);
              }

              // Set video Iframe to visible and remove the video-skeleton placeholder
              // once the video has loaded with the src
              $("#youtube-iframe").on("load", function() {
                $("#video-embed").removeClass("hidden-iframe");
                $(this).removeClass("hidden-iframe");
                $("#video-skeleton").hide();
                $(this).addClass("visible-iframe");
                $("#video-embed").addClass("visible-iframe");
              });
            }
            // Set the Download button href and Text
            if ($("a.s3-download.video.using_json").length > 0) {
              if (obj.s3_video_url.toString().length > 1) {
                $("a.s3-download.video.using_json").html("Download");
                $("a.s3-download.video.using_json").attr(
                  "href",
                  obj.s3_video_url.toString()
                );
              }
            }
          }
        });
      }
    });
  }
  // Use the default functionality for loading resources from the front matter values
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
          return "error";
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
      $("#youtube-iframe").on("load", function() {
        $("#video-embed").removeClass("hidden-iframe");
        $(this).removeClass("hidden-iframe");
        $("#video-skeleton").hide();
        $(this).addClass("visible-iframe");
        $("#video-embed").addClass("visible-iframe");
      });
    }
  }

  // Resource presentation lazy loading
  // Check if using_json class is set
  // if it is then check the resources.json file for a presentation
  // If thiere is not presentation then leave the placeholder
  if ($("#presentation-holder.using_json #presentation-embed ").length > 0) {
    // Get data-src url
    var url = $("#presentation-iframe").attr("data-src");
    // Get the current Connect code from the event-code attribute
    var connectCode = $("#presentation-holder.using_json").attr("event-id");
    var sessionId = $("#presentation-holder.using_json").attr("session-id");
    // URL for the resources.json
    var resources_json_url =
      "https://static-linaro-org.s3.amazonaws.com/connect/" +
      connectCode.toString().toLowerCase() +
      "/resources.json";
    // var resources_json_url = "http://localhost:4002/resources.json";
    console.log(resources_json_url);
    // GET the JSON response
    $.ajax({
      url: resources_json_url,
      dataType: "json",
      complete: function(jsonResponse) {
        jsonData = JSON.parse(jsonResponse.responseText);
        // Find the corresponding key in the JSON data
        $.each(jsonData, function(idx, obj) {
          // Get the current Connect code
          // console.log(obj.session_id.toString().toLowerCase() + " vs " + sessionId.toString().toLowerCase() );
          if (
            obj.session_id.toString().toLowerCase() ==
            sessionId.toString().toLowerCase()
          ) {
            // Grab the main presentation URL
            if (obj.s3_presentation_url.toString().length > 1) {
              if (obj.s3_presentation_url[0].length > 1) {
                console.log("array of videos");
                console.log(obj.s3_presentation_url);
                console.log(obj.s3_presentation_url[0]);
                // Add all files to the session_files
                $.each(obj.s3_presentation_url, function(index, object) {
                  session_files.push(object);
                });
                // Set the featured presentation as the first available file.
                var presentation_url = obj.s3_presentation_url[0].toString();
              } else {
                var presentation_url = obj.s3_presentation_url.toString();
                session_files.push(presentation_url);
              }
            }
            // Secondary backup video URL
            else {
              var presentation_url = "";
            }
            // Add other files to the session files array.
            if (obj.other_files.toString().length > 1) {
              if (obj.other_files[0].length > 1) {
                console.log(obj.other_files);
                // Add all files to the session_files
                $.each(obj.other_files, function(index, object) {
                  session_files.push(object);
                });
                // Set the featured presentation as the first available file.
                var presentation_url = obj.other_files[0].toString();
              } else {
                session_files.push(obj.other_files.toString());
              }
            }
            // Check to see if the main presentation URL does not equal "None"
            if (presentation_url != "") {
              $("#presentation-data-embed").attr("src", presentation_url);
              // Set the src to the data-src
              $("#presentation-data-embed").ready(function() {
                $("#presentation-embed").removeClass("hidden-iframe");
                $("#presentation-data-embed").removeClass("hidden-iframe");
                $("#presentation-skeleton").hide();
                $("#presentation-embed").addClass("visible-iframe");
                $("#presentation-data-embed").addClass("visible-iframe");
              });
            }
            // Set the Download button href and Text
            if ($("a.s3-download.presentation.using_json").length > 0) {
              if (obj.s3_presentation_url.toString().length > 1) {
                $("a.s3-download.presentation.using_json").html("Download");
                $("a.s3-download.presentation.using_json").attr(
                  "href",
                  presentation_url
                );
              }
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

    $("#presentation-iframe").on("load", function() {
      $("#presentation-embed").removeClass("hidden-iframe");
      $(this).removeClass("hidden-iframe");
      $("#presentation-skeleton").hide();
      $(this).addClass("visible-iframe");
      $("#presentation-embed").addClass("visible-iframe");
    });
  }

  $(document).ajaxStop(function() {
    if (session_files.length > 0) {
      console.log("Adding session files...");
      console.log(session_files);
      var elements = "";
      $.each(session_files, function(index, object) {
        var object_type = "File";
        if (object.indexOf("pdf") != -1) {
          var object_type = "Presentation";
        } else if (object.indexOf("mp4") != -1) {
          var object_type = "Video";
        } else if (object.indexOf("youtube") != -1) {
          var object_type = "YouTube Video";
        } else if (object.indexOf("pptx") != -1) {
          var object_type = "Presentation";
        }
        var new_element =
          '<a href="' +
          object +
          '" class="list-group-item" style="overflow:auto;">';
        new_element +=
          object + '<span class="pull-right">' + object_type + "</span>";
        new_element += "</a>";
        elements += new_element;
      });
      $("#session_files").append(elements);
    } else {
      console.log("No sessio files.");
    }
  });
});
