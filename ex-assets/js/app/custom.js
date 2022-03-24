$(document).ready(function () {
  if ($("#keynote_slider").length > 0) {
    $("#keynote_slider").owlCarousel({
      items: 4,
      loop: false,
      dots: true,
      lazyLoad: true,
      margin: 20,
      rewind: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        560: {
          items: 2,
        },
        945: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
});
