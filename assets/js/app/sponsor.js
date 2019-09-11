$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ container: 'body'})
    });

    var testimonialSlider = $("#testimonial_slider");

    testimonialSlider.owlCarousel({
      items: 4,
      loop: false,
      dots: false,
      nav: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });

});
