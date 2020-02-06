//= require vendor/js-cookie.min

$(document).ready(function() {
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
  var getCookieAccept;

  getCookieAccept = getCookie("diseasesnotice");
  if (getCookieAccept != "accept") {
    $("#messageNotice").show();
  }

  $("#acceptNotice").click(function() {
    $("#messageNotice").hide();
    var expire = new Date();
    //Setting cookie expiry after 6 months
    expire = new Date(expire.getTime() + 15552000000);
    document.cookie = "diseasesnotice=accept; expires=" + expire;
  });
});
