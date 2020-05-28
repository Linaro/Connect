var resources_json = [];
var current_event = "all";
var current_type = "all";
var current_track = "all";
// Get Data for a given url
function getData(ajaxurl, callbackFunction) {
  return $.ajax({
    url: ajaxurl,
    type: "GET",
    success: function (data) {
      callbackFunction(data);
    },
  });
}
// Delay function for waiting a set number of ms after the user stops typing.
function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
// Update the cols listed on the page using the resource page path
// identfiiers
function update_cols() {
  // Hide all cols and display those in the resources json
  $("[data-identifier]").css("display", "none");
  var items_to_display = resources_json;
  // Remove items that do not belong to the selected event.
  items_to_display.filter((item, index) => {
    return item;
  });
  for (var i = items_to_display.length - 1; i >= 0; i--) {
    // Filter Events
    if (current_event !== "all") {
      items_to_display = items_to_display.filter((item, index) => {
        return item.event_id == current_event.toUpperCase();
      });
    }
    // Filter Tracks
    if (current_track !== "all") {
      items_to_display = items_to_display.filter((item, index) => {
        return item.tracks.includes(current_track);
      });
    }
    // Filter Types
    if (current_type !== "all") {
      items_to_display = items_to_display.filter((item, index) => {
        return item.type == current_type;
      });
    }
  }
  // Loop over results to show
  for (var i = 0; i < items_to_display.length; i++) {
    let selector =
      '*[data-identifier="' + items_to_display[i]["identifier"] + '"]';
    $(selector).css("display", "block");
  }
}
$(document).ready(function () {
  // Fetch the local JSON output for all resources
  $.ajax({
    url: "/assets/json/resources.json",
    type: "GET",
  }).done((data) => {
    resources_json = data;
    console.log(resources_json);
    // Set up the Fuse instance
    const fuse = new Fuse(resources_json, {
      keys: ["tracks", "event_id", "title", "summary", "speakers.name"],
      threshold: 0.3,
      findAllMatches: true,
    });
    // Handle search input keyup
    $("#searchQuery").keyup(
      delay(function (e) {
        if (this.value === "") {
          resources_json = data;
          update_cols();
        } else {
          // Perform the search
          resources_json = fuse.search(this.value);
          // Update the cols based on results
          update_cols();
        }
      }, 900)
    );
    // Handle type select
    $("#typeSelect").on("change", function () {
      current_type = this.value;
      update_cols();
    });
    // Handle track select
    $("#trackSelect").on("change", function () {
      current_track = this.value;
      update_cols();
    });
    // Handle event select
    $("#eventSelect").on("change", function () {
      current_event = this.value;
      update_cols();
    });
  });
});
