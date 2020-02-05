$(document).ready(function() {
  var getCookieAccept;

  getCookieAccept = getCookie("diseasesnotice");
  if (getCookieAccept != "accept") {
    $(".DiseasesNotice").show();
  }

  $("#acceptNotice").click(function() {
    $(".DiseasesNotice").hide();
    var expire = new Date();
    //Setting cookie expiry after 6 months
    expire = new Date(expire.getTime() + 15552000000);
    document.cookie = "diseasesnotice=accept; expires=" + expire;
  });
});
