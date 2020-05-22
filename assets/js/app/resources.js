var resources_json = [];
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
  // Loop over results
  for (var i = 0; i < resources_json.length; i++) {
    let selector =
      '*[data-identifier="' + resources_json[i]["item"]["identifier"] + '"]';
    $(selector).css("display", "block");
  }
}
$(document).ready(() => {
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
          $("[data-identifier]").css("display", "block");
        } else {
          // Perform the search
          resources_json = fuse.search(this.value);
          // Update the cols based on results
          update_cols();
          console.log(resources_json);
        }
      }, 900)
    );
    // Handle type select
    $("#typeSelect").on("change", function () {
      alert(this.value);
    });
    // Handle track select
    $("#trackSelect").on("change", function () {
      alert(this.value);
    });
    // Handle event select
    $("#eventSelect").on("change", function () {
      alert(this.value);
    });
  });
});
