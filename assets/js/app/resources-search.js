// Fuse.js search Settings
var options = {
  shouldSort: true,
  matchAllTokens: true,
  findAllMatches: true,
  includeScore: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: ["title", "summary", "speakers", "tracks"]
};
// Define the results array to be used when searching.
var originalResults = [];
var currentResults = [];
// This function sorts the data via a pre-defined filter
function sortDataViaFilter(filter, toggle) {
  // Filter data based on the date
  if (filter == "date") {
    if (toggle == "desc") {
      var sortedJsonData = currentResults.sort(sort_by_date_asc);
      listResults(sortedJsonData);
      $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "asc");
    }
    if (toggle == "asc") {
      // Sort data by date desc using the results being displayed in the table
      var sortedJsonData = currentResults.sort(sort_by_date_desc);
      listResults(sortedJsonData);
      // Set the new data-toggle value
      $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "desc");
    }
  }
  // Filter the data based on the author
  if (filter == "author" || filter == "site") {
    if (toggle == "desc") {
      var sortedJsonData = currentResults.sort(dynamicSort(filter));
      listResults(sortedJsonData);
      $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "asc");
    }
    if (toggle == "asc") {
      // Sort data by date desc using the results being displayed in the table
      var sortedJsonData = currentResults.sort(dynamicSort("-" + filter));
      listResults(sortedJsonData);
      // Set the new data-toggle value
      $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "desc");
    }
  }
}
// This functions takes the array of data and returns html formatted list of elements.
function createTableRows(data) {
  var formatted_results = [];
  $.each(data, function(key, val) {
    if (typeof val.item === "undefined") {
      var object = val;
    } else {
      var object = val.item;
    }
    // Get Videos
    var video = "Not available";
    if (
      typeof object.youtube_video_url !== "undefined" &&
      object.youtube_video_url !== ""
    ) {
      video = "<a href='" + object.youtube_video_url + "'>View</a>";
    } else if (
      typeof object.amazon_s3_video_url !== "undefined" &&
      object.amazon_s3_video_url !== ""
    ) {
      video = "<a href='" + object.amazon_s3_video_url + "'>View</a>";
    } else if (
      object.youtube_video_url === "" &&
      object.amazon_s3_video_url === ""
    ) {
      video = "<a target='_self' href='" + object.url + "'>View</a>";
    }

    // Get Presentations
    var presentation = "Not available";
    if (
      typeof object.slideshare_presentation_url !== "undefined" &&
      object.slideshare_presentation_url !== ""
    ) {
      presentation =
        "<a target='_self' href='" +
        object.slideshare_presentation_url +
        "'>View</a>";
    } else if (typeof object.amazon_s3_presentation_url !== "undefined") {
      presentation =
        "<a target='_self' href='" +
        object.amazon_s3_presentation_url +
        "'>View</a>";
    } else if (
      object.amazon_s3_presentation_url === "" &&
      object.slideshare_presentation_url === ""
    ) {
      presentation = "<a target='_self' href='" + object.url + "'>View</a>";
    }

    // Get the speakers
    var speakers = "Not available";
    if (object.speakers !== "") {
      speakers = "";
      if (object.speakers !== "None") {
        $.each(object.speakers, function(index, value) {
          speakers +=
            value.name +
            " - " +
            value["job-title"] +
            "(" +
            value.company +
            "), ";
        });
      }
      // Remove the last ", "
      speakers = speakers.replace(/(, )+$/, "");
      if (speakers.length < 15) {
        speakers = "Not available";
      }
    }
    // Create the html entity
    var element = "<tr>";
    element += "<td>" + object.title + "</td>";
    element += "<td>" + object.summary + "</td>";
    element += "<td>" + object.tracks + "</td>";
    element += "<td>" + speakers + "</td>";
    element += "<td>" + video + "</td>";
    element += "<td>" + presentation + "</td>";
    element += "<td>" + object.event_id + "</td>";
    element += "<td>" + extractDateString(object.date_published) + "</td>";
    element += "<td><a target='_self' href='" + object.url + "'>View</a></td>";
    element += "</tr>";

    formatted_results.push(element);
  });
  // Set the current results array
  // currentResults = [];
  // currentResults = formatted_results;
  formatted_results.map(function(item) {
    currentResults.push(item);
  });
  // Return the formatted results
  return formatted_results;
}
// Fuzzy Search Setup
function listResults(fuse_instance) {
  // Search the already initialised fuse instance
  var searchTerm = $("#search-query").val();
  if (searchTerm !== "") {
    var result = fuse_instance.search(searchTerm);
    var formatted_results = createTableRows(result);
  } else {
    var formatted_results = createTableRows(originalResults);
  }
  var results_length = formatted_results.length; // Length of results
  $("#result_size").html(results_length);
  $("#results").html(formatted_results.join(""));
}
// This function gets the unique values of a certain key from an array
function getUniqueValuesOfKey(array, key) {
  return array.reduce(function(carry, item) {
    if (item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
    return carry;
  }, []);
}
$(document).ready(function() {
  // var resourcesUrl = "/assets/json/resources.json";
  var resourcesUrl = "/assets/json/resources.json";
  // Request the JSON resource
  $.ajax({
    url: resourcesUrl,
    dataType: "json",
    complete: function(jsonResponse) {
      var JSONData = JSON.parse(jsonResponse.responseText);
      // Add the initial results to the originalResults array
      JSONData.map(function(item) {
        originalResults.push(item);
      });
      var formatted_results = createTableRows(JSONData);
      // Add initial results to table
      $("#results").html(formatted_results.join(""));
      $("#size").html(formatted_results.length);
      $("#result_size").html(formatted_results.length);
      // Event Handler for clicking the filter headings
      $("th.filter").click(function() {
        // Supply the filter and current setting(toggle)
        sortDataViaFilter(
          $(this).attr("data-filter"),
          $(this).attr("data-toggle")
        );
      });
    }
  });
});
// Wait for all ajax requests to stop
$(document).ajaxStop(function() {
  // Initialise the Fuse.js search
  var fuse = new Fuse(originalResults, options); // "list" is the item array
  // Monitor for the keyup event with a 1 second delay.
  $("#search-query").keyup(function() {
    delay(function() {
      listResults(fuse);
    }, 1000);
  });
});
