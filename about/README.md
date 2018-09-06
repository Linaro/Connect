---
title: About
permalink: /about/
layout: container-breadcrumb
js-package: about
css-package: about
---
<div class="row">
<div class="col-md-6" markdown="1">

Since 2010, Linaro Connect has been the event to attend if you are interested in open source software development for Linux,
tools and the various vertical segment ecosystems that use Arm processors. While the event continues to evolve, one thing
stays the same – it revolves around engineering and will consist of a mix of industry keynotes, engineering presentations
and discussions, and collaborative engineering hacking sessions.

To view slides or videos from the keynotes and sessions from previous Connects, please go to our
[Resources page](/resources/).

If you are a member attendee or plan to submit a paper to speak at Linaro Connect and need information about your registration
discount code, please email [connect@linaro.org](mailto:connect@linaro.org).

The next Linaro Connect will be held in Vancouver 17-21 September 2018. Register below!

<script type="text/javascript">
    function defer(method) {
        if (window.jQuery) {
            method();
        } else {
            setTimeout(function () { defer(method) }, 50);
        }
    }
    defer(function () {
        $(window).on("load", function () {
            var url = "https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt";
            $("#eventbrite-iframe").attr("src", url);
            $("#eventbrite-iframe").on("load", function () {
                $(this).removeClass("hidden-iframe");
                $("#placeholder-skeleton").hide();
                $(this).addClass("visible-iframe");
            });
        });
    });
</script>

<div id="eventbrite-skeleton">
<img id="placeholder-skeleton" class="img-responsive lazyload" data-src="{% asset_path 'eventbrite-skeleton.png' %}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
/>
<iframe class="hidden-iframe" data-src="https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt" width="100%"
height="500" frameborder="0" marginwidth="5" marginheight="5" scrolling="auto" id="eventbrite-iframe"></iframe>
</div>

</div>
<div class="col-md-6">
<div class="owl-carousel owl-theme">
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image1.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 1" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image2.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 2" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image3.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 3" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image4.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 4" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image5.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 5" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image6.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 6" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image7.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 7" />
</div>
<div class="activity-block item">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="{% asset_path 'about-carousel-image8.jpg' %}" class="owl-lazy img-responsive" alt="About Carousel Image 8" />
</div>
</div>
</div>
</div>

<div class="row" id="about-block-row">
<div class="col-md-4">
<div class="about-block text-center" style="background: linear-gradient(
rgba(0, 0, 0, 0.7), 
rgba(0, 0, 0, 0.7)
), url({% asset_path 'collaborate-and-learn.jpg' %});  background-size: cover;" markdown="1">

### Collaborate & Learn

Collaborate with the engineers leading open source software development in the ARM ecosystem, have in-depth technical conversations about real world issues and solutions, and attend how-to training sessions about the latest ARM software developments.

</div>
</div>
<div class="col-md-4">
<div class="about-block text-center" style="background: linear-gradient(
rgba(0, 0, 0, 0.7), 
rgba(0, 0, 0, 0.7)
), url({% asset_path 'contribute.jpg' %});  background-size: cover;" markdown="1">

### Contribute
Bring your knowledge and experience to influence and contribute to Linaro's development work. Linaro Connect is a unique opportunity to put your ideas forward face to face with other contributors and maintainers. If you have something relevant you'd like to show off, consider participating in Demo Friday.

</div>
</div>
<div class="col-md-4">
<div class="about-block text-center" style="background: linear-gradient(
rgba(0, 0, 0, 0.7), 
rgba(0, 0, 0, 0.7)
), url({% asset_path 'socialize.jpg' %});  background-size: cover;" markdown="1">

### Socialize

In addition to the regular breaks in the day and informal hacking sessions, there are a range of evening events at which you can network with your peers and get to know the other attendees.

</div>
</div>
</div>


<div class="col-xs-12" markdown="1">

### Code of Conduct 

Linaro Ltd, as host for Linaro Connect, is dedicated to a harassment-free conference experience for everyone. Our anti-harassment policy can be found at <a href="/code-of-conduct/">here</a>.

* * * * 

</div>
