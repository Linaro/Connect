var resources_json = [];
var items_to_display = [];
var current_event = "all";
var current_type = "all";
var current_theme = "all";
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

/**
 *
 * @param {Object} params An object containing the GET params to set
 * @returns {Boolean} Returns true if set.
 */
const setURLParams = (params) => {
  // Construct URLSearchParams object instance from current URL querystring
  let queryParams = new URLSearchParams(window.location.search);
  // Set new or modify existing page value
  for (key in params) {
    queryParams.set(key, params[key]);
  }
  // Replace current querystring with the new one
  history.replaceState(null, null, "?" + queryParams.toString());
};
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
    var last_item_index = current_number_of_items + items_step;
  } else {
    var last_item_index = items_to_display.length;
    $("#load_more").show();
  }
  // console.log("last item index: ", last_item_index);
  // console.log("current number of items: ", current_number_of_items);
  // console.log("items_to_display: ", items_to_display);
  // console.log("items_to_display length: ", items_to_display.length);
  var items_to_show = items_to_display.slice(
    current_number_of_items,
    last_item_index
  );
  // console.log("items_to_show: ", items_to_show);
  // console.log("items_to_show: ", items_to_show.length);
  if (items_to_show.length < items_step) {
    $("#load_more").hide();
  }
  // Update the current number of items displayed.
  current_number_of_items = last_item_index;
  // Loop over results items_to_show display
  console.log(items_to_show);
  for (var i = 0; i <= items_to_show.length; i++) {
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
    // Filter Themes
    if (current_theme !== "all") {
      items_to_display = items_to_display.filter((item, index) => {
        return item.theme == current_theme;
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
      current_number_of_items = loop_limit;
    }
    // Loop over results to display
    for (var i = 0; i < loop_limit; i++) {
      var identifier = items_to_display[i]["identifier"];
      // Set display:block style for all results
      $('*[data-identifier="' + identifier + '"]').css("display", "block");
    }
  }
}
function update_select_menus() {
  // Loop over each select menu option
  $("#trackSelect > option").each(function (index, element) {
    let track_val = element.value;
    let track_count = 0;
    if (element.value == "all") {
      track_count = items_to_display.length;
    } else {
      for (var i = 0; i < items_to_display.length; i++) {
        if (items_to_display[i]["tracks"].includes(track_val)) {
          track_count += 1;
        }
      }
    }
    if (track_count == 0) {
      $(element).css("display", "none");
    } else {
      $(element).css("display", "block");
      element.text = element.value + " (" + track_count.toString() + ")";
    }
  });
  $("#typeSelect > option").each(function (index, element) {
    let select_val = element.value;
    let select_option_count = 0;
    if (element.value == "all") {
      select_option_count = items_to_display.length;
    } else {
      for (var i = 0; i < items_to_display.length; i++) {
        if (items_to_display[i]["type"] == select_val) {
          select_option_count += 1;
        }
      }
    }
    element.text =
      element.value.charAt(0).toUpperCase() + element.value.slice(1);
    +" (" + select_option_count.toString() + ")";
  });
  $("#themeSelect > option").each(function (index, element) {
    let select_val = element.value;
    let select_option_count = 0;
    if (element.value == "all") {
      select_option_count = items_to_display.length;
    } else {
      for (var i = 0; i < items_to_display.length; i++) {
        if (items_to_display[i]["theme"] == select_val) {
          select_option_count += 1;
        }
      }
    }
    element.text =
      element.value.charAt(0).toUpperCase() + element.value.slice(1);
    +" (" + select_option_count.toString() + ")";
  });
}
$(document).ready(function () {
  // Fetch the local JSON output for all resources
  $.ajax({
    url: "/assets/json/resources.json",
    type: "GET",
  }).done((data) => {
    // Store the data received separately to show all again.
    resources_json = data;
    if ($("#resourcesSearchAndFilter").data("event") != "all") {
      resources_json = resources_json.filter((item, index) => {
        return (
          item.event_id ==
          $("#resourcesSearchAndFilter").data("event").toUpperCase()
        );
      });
    }
    // Ensure results are sorted by date.
    resources_json.sort(function compare(a, b) {
      if (a.date_published > b.date_published) {
        return -1;
      }
      if (a.date_published < b.date_published) {
        return 1;
      }
      return 0;
    });
    // Set the items_to_display to the initial JSON results.
    items_to_display = resources_json;
    // Update the select menus to include the counts
    update_select_menus();
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
    // Handle theme select
    $("#themeSelect").on("change", function () {
      current_theme = this.value;
      // Update the URL params on change
      setURLParams({ theme: current_theme });
      // Update the resource cols
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
      update_select_menus();
    });
    // Check to see if there is a theme param set.
    // If there is, update the select menu and trigger a cols update
    let searchParams = new URLSearchParams(window.location.search);
    let theme_param = searchParams.get("theme");
    // Check the value is not null
    if (theme_param !== null) {
      $("#themeSelect").val(theme_param);
      // Update the globally scoped current_theme value
      current_theme = theme_param;
      // Trigger a cols update
      update_cols();
    }
  });
});
