//= require vendor/js-cookie.min

$(document).ready(function() {
  var warning_cookie = Cookies.get("corona_virus_warning");
  if (typeof warning_cookie === undefined) {
    $("#messageNotice").show();
  }
  $("#acceptNotice").click(function() {
    $("#messageNotice").hide();
    Cookies.set("corona_virus_warning", "accepted");
  });
});
