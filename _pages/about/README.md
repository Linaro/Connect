---
title: About
permalink: /about/
layout: jumbotron
js-package: about
css-package: about
jumbotron:
    triangle-divider: true
    title: About
    description: >
        If you work on open source software for Arm platforms, Linaro Connect is the place to be to understand the latest developments and work directly with the most active engineers and maintainers in the ecosystem.
    carousel-images:
        - /assets/images/content/bkk19-group-photo.jpg
        - /assets/images/content/lcu14.jpg
        - /assets/images/content/lcu13.jpg
        - /assets/images/content/lce13.jpg
        - /assets/images/content/lca14.jpg
        - /assets/images/content/lca13.jpg
        - /assets/images/content/las16.jpg
        - /assets/images/content/hkg15.jpg
        - /assets/images/content/bud17.jpg
        - /assets/images/content/bkk16.jpg
page_carousel:
    - path: /assets/images/content/bkk19-sponsor-table.jpg
      alt: Sponsor table at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-registration-desk.jpg
      alt: Registration desk at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-packet-sponsored-food.jpg
      alt: Packet branded macaron's at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-li-gong-keynote-linaro-matters.jpg
      alt: Linaro CEO, Li Gong, presenting the opening keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-li-gong-keynote.jpg
      alt: Linaro CEO, Li Gong, presenting the opening keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-jacob-smith-packet-keynote.jpg
      alt: Jacob Smith from Packet presenting his keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-google-keynote.jpg
      alt: Google's keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-demo-friday.jpg
      alt: Demo Friday hacking at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-chris-royston-arm-developer-talk.jpg
      alt: Chris Royston from Arm talking about the new revision of developer.arm.com at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-bosch-keynote-2.jpg
      alt: Dirk Slama from Bosch presenting his keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-bosch-keynote.jpg
      alt: Dirk Slama from Bosch presenting his keynote at Linaro Connect Bangkok 2019
    - path: /assets/images/content/bkk19-backpack-giveaway.jpg
      alt: RedHat's giveaway at Linaro Connect Bangkok 2019. 
    - path: /assets/images/content/bkk19-ai-demo.jpg
      alt: Object recognition at Linaro Connect Bangkok 2019
---
<div class="row content p-t-40 p-b-40 text-center" id="content-container">
    <div class="container">
        <div class="col-xs-12">
        <p>
            Every six months, over 300 of the world's leading open source engineers working on Arm get together for a full week of engineering sessions and hacking at Linaro Connect. Linaro Connect Bangkok has now ended. The next Connect will be held in San Diego California September 23-27, 2019. Registration will be announced in May 2019.
        </p>
        <p>
            To view slides or videos from the keynotes and sessions from previous Connects, please go to our
            <a href="/resources/">Resources page</a>.
        </p>
        </div>
    </div>
</div>
<div class="row content p-t-40 p-b-40 shadowed-row" id="image-row">
    <div class="owl-carousel owl-theme">
        {% for image in page.page_carousel %}
            <div class="activity-block item">
                <a href="#" data-featherlight="{{image.path}}">
                    {% capture image_path %}{{image.path | remove_first: '/'}}{% endcapture %}
                    {% capture full_path %}{{image.path }}{% endcapture %}
                    {% responsive_image_block %}
                    template: _includes/thumb-carousel.html
                    path: {{ image_path }}
                    fullpath: {{ full_path }}
                    alt: {{ image.alt }}
                    {% endresponsive_image_block %}
                </a>
            </div>
        {% endfor %}
    </div>
    <p class="text-center">
        <a href="https://www.flickr.com/photos/linaroorg/albums" class="btn btn-primary">View all photos on Flickr</a>
    </p>
</div>
<div class="row content p-t-40 p-b-40" id="about-block-row">
    <div class="container">
        <div class="col-md-4">
            <div class="about-block text-center" style="background: linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.7)
            ), url(/assets/images/content/collaborate-and-learn.jpg);  background-size: cover;">
                <h3>Collaborate & Learn</h3>
                <p>
                    Collaborate with the engineers leading open source software development in the Arm ecosystem, have in-depth technical conversations about real world issues and solutions, and attend how-to training sessions about the latest Arm software developments.
                    <a href="/schedule/" class="btn btn-primary center-block m-t-20">View Resources</a>
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="about-block text-center" style="background: linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.7)
            ), url(/assets/images/content/contribute.jpg);  background-size: cover;">
                <h3>Contribute</h3>
                <p>
                    Bring your knowledge and experience to influence and contribute to Linaro's development work. Linaro Connect is a unique opportunity to put your ideas forward face to face with other contributors and maintainers. If you have something relevant you'd like to show off, consider participating in Demo Friday.
                    <a href="/demo-friday/" class="btn btn-primary center-block m-t-20">Submit a Demo</a>
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="about-block text-center" style="background: linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.7)
            ), url(/assets/images/content/socialize.jpg);  background-size: cover;">
                <h3>Socialize</h3>
                <p>
                In addition to the regular breaks in the day and informal hacking sessions, there are a range of evening events at which you can network with your peers and get to know the other attendees.
                <a href="/schedule/" class="btn btn-primary center-block m-t-20">View Schedule</a>
                </p>
            </div>
        </div>
    </div>  
</div>

<div class="row content p-t-40 p-b-40 text-center" id="code-of-conduct">
    <div class="container">
        <div class="col-xs-12 text-center">
            <h3>Code of Conduct</h3>
            <p>
            Linaro Ltd, as host for Linaro Connect, is dedicated to a harassment-free conference experience for everyone. Our anti-harassment policy can be found at <a href="/code-of-conduct/">here</a>.
            </p>
        </div>
    </div>
</div>
