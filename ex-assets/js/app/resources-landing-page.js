var jsonData = [];
$(document).ready(function() {
  var using_json = $("#resources-overview-table").data("using-json");
  var connect_code = $("#resources-overview-table")
    .data("connect-id")
    .toString()
    .toLowerCase();
  var resources_json_url =
    "https://static-linaro-org.s3.amazonaws.com/connect/" +
    connect_code +
    "/resources.json";
  // Check if we're using json for the resources data source and if so perform the ajax request
  if (using_json == "True") {
    console.log("Fetching resources.json...");
    $.ajax({
      url: resources_json_url,
      dataType: "json",
      complete: function(jsonResponse) {
        jsonData = JSON.parse(jsonResponse.responseText);
      }
    });
  }
});
function getValues(session_id) {
  var sessionID = session_id;
  // Find resources from the jsonData object
  var found_resource = "";
  for (i = 0; i < jsonData.length; i++) {
    if (jsonData[i]["session_id"].toLowerCase() == sessionID.toLowerCase()) {
      console.log(jsonData[i]["session_id"] + " vs " + sessionID);
      found_resource = jsonData[i];
    }
  }
  return found_resource;
}
$(document).ajaxStop(function() {
  console.log("resources.json retreived...");
  if ($("#resources-overview-table").length > 0) {
    var using_json = $("#resources-overview-table").data("using-json");
    if (using_json == "True") {
      console.log("Fetch session resources...");
      // Loop over table rows and populate links
      $("#resources-overview-table tbody > tr").each(function(idx, element) {
        var session_id = $(element).data("session-id");
        console.log("Fetching resources for " + session_id);
        var found_resource = getValues(session_id);
        console.log("Resource object");
        console.log(found_resource);
        // Updated the DOM elements once ajax request has finished.
        // Update the presentation DOM element
        if (found_resource["s3_presentation_url"] !== "") {
          var presentation_container = $(element).find(
            "#presentation_container:first"
          );
          var presentation_el =
            "<a href='" + found_resource["s3_presentation_url"] + "'>View</a>";
          console.log("Presentation resource:");
          console.log(found_resource["s3_presentation_url"]);
          $(presentation_container).html(presentation_el);
        } else {
          $(presentation_container).html("N/A");
        }
        // Updated the video DOM element
        if (found_resource["s3_video_url"] !== "") {
          var video_container = $(element).find("#video_container:first");
          console.log("Video resource:");
          console.log(found_resource["s3_video_url"]);
          var video_el =
            "<a href='" + found_resource["s3_video_url"] + "'>View</a>";
          $(video_container).html(video_el);
        } else {
          $(video_container).html("N/A");
        }
      });
    }
  }
});
