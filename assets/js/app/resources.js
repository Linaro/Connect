var resources_json = [];
var items_to_display = [];
var current_event = "all";
var current_type = "all";
var current_track = "all";
var current_number_of_items = 12;
const items_step = 12;
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
// Load more items when the load_more button is clicked.
function load_more_items() {
  // Get items step
  if (items_to_display.length > current_number_of_items + items_step) {
    var last_item_index = current_number_of_items - 1 + items_step;
  } else {
    var last_item_index = items_to_display.length;
  }
  var items_to_show = items_to_display.slice(
    current_number_of_items - 1,
    last_item_index
  );
  // Loop over results items_to_show display
  for (var i = 0; i < items_to_show.length; i++) {
    var identifier = items_to_show[i]["identifier"];
    // Set display:block style for all results
    $('*[data-identifier="' + identifier + '"]').css("display", "block");
  }
}

// Update the cols listed on the page using the resource page path
// identifiers
function update_cols() {
  $("#load_more").show();
  // reset the items to show variable.
  current_number_of_items = 12;
  // Hide all cols and display those in the resources json
  $("[data-identifier]").css("display", "none");
  items_to_display = resources_json;
  // Fix for issue regarding filter function returning items that are not nested in the
  // fuse.js item object.
  items_to_display.filter((item, index) => {
    return true;
  });
  // Remove items that do not belong to the selected event.
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
        return item.tracks.indexOf(current_track) != -1 ? true : false;
      });
    }
    // Filter Types
    if (current_type !== "all") {
      items_to_display = items_to_display.filter((item, index) => {
        return item.type == current_type;
      });
    }
  }
  console.log("Search results that will display: block:", items_to_display);
  // Check that we have results first
  if (items_to_display.length > 0) {
    // Check if items_to_display is greater than the initial items num.
    // If less current_number_of_items var then hide the load more button
    if (items_to_display.length > current_number_of_items) {
      var loop_limit = current_number_of_items;
    } else {
      $("#load_more").hide();
      var loop_limit = items_to_display.length;
    }
    // Loop over results to display
    for (var i = 0; i < loop_limit.length; i++) {
      var identifier = items_to_display[i]["identifier"];
      // Set display:block style for all results
      $('*[data-identifier="' + identifier + '"]').css("display", "block");
    }
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
    // Handle load more button click
    $("#load_more").click(function (e) {
      e.preventDefault();
      load_more_items();
    });
    // Handle search input keyup
    $("#searchQuery").keyup(
      delay(function (e) {
        if (this.value === "") {
          resources_json = data;
          current_search_term = "";
          update_cols();
        } else {
          // Perform the search
          let fuse_results = fuse.search(this.value);
          var new_results = fuse_results.map((item) => {
            return item.item;
          });
          resources_json = new_results;
          console.log("Search results:", resources_json);
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
