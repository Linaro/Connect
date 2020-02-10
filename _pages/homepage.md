---
layout: flow
css-package: home
js-package: home
permalink: /
title: Bringing the Arm ecosystem together
description: |-
  The next Linaro Connect will be held in Budapest, Hungary on 23-27 March, 2020.
featured-images:
  - /assets/images/content/hkg18-sponsor-thumb-1.jpg
  - /assets/images/content/yvr18-sponsor-thumb-1.jpg
  - /assets/images/content/yvr18-sponsor-thumb-2.jpg
jumbotron:
  title: Bringing the Arm ecosystem together
  include: jumbotron-home.html
  title-class: big-title
  description: ""
  video:
    source:
      mp4: https://static.linaro.org/connect/assets/videos/san19_promo_banner.mp4
      ogv: https://static.linaro.org/connect/assets/videos/san19_promo_banner.ogv
      webm: https://static.linaro.org/connect/assets/videos/san19_promo_banner.webm
    poster: /assets/images/content/san19-group-photo.jpg
home: true
redirect_from:
  - /keynotes/bkk19/
  - /keynotes/
flow:
  - row: container_row
    style: fixed san19_highlight
    background_image: /assets/images/content/bud20_web_banner.png
    sections:
      - format: title
        title_content:
          size: h2
          text: Linaro Connect Budapest 2020
      - format: text
        style: text-center text-white
        text_content:
          text: 23 - 27 March - Corinthia Hotel, Budapest, Hungary
      - format: custom_include
        source: keynotes.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: Register
            url: /register/
            style: btn-secondary
          - title: View Schedule
            url: /schedule/
            style: btn-primary
  - row: custom_include_row
    source: connect_sponsors.html
  - row: container_row
    #style: new
    sections:
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: left
          type: slider
          slider_content:
            lightbox_enabled: true
            seconds_per_slide: 5
            nav: true
            dots: false
            xs_items: 1
            sm_items: 1
            md_items: 1
            lg_items: 1
            items:
              - image: /assets/images/content/san19_image_1.jpg
                title: SAN19 Image 1
              - image: /assets/images/content/san19_image_2.jpg
                title: SAN19 Image 2
              - image: /assets/images/content/san19_image_3.jpg
                title: SAN19 Image 3
              - image: /assets/images/content/san19_image_4.jpg
                title: SAN19 Image 4
              - image: /assets/images/content/bkk19-sponsor-table.jpg
                title: Sponsor table at Linaro Connect Bangkok 2019
              - image: /assets/images/content/bkk19-packet-sponsored-food.jpg
                title: Packet branded macaron's at Linaro Connect Bangkok 2019
              - image: /assets/images/content/bkk19-li-gong-keynote.jpg
                title: >-
                  Linaro CEO, Li Gong, presenting the opening keynote at Linaro Connect
                  Bangkok 2019
              - image: /assets/images/content/bkk19-jacob-smith-packet-keynote.jpg
                title: >-
                  Jacob Smith from Packet presenting his keynote at Linaro Connect Bangkok 2019
              - image: /assets/images/content/bkk19-google-keynote.jpg
                title: Google's keynote at Linaro Connect Bangkok 2019
              - image: /assets/images/content/bkk19-chris-royston-arm-developer-talk.jpg
                title: >-
                  Chris Royston from Arm talking about the new revision of developer.arm.com
                  at Linaro Connect Bangkok 2019
          title: About Linaro Connect
          text: >
            Every six months, over 300 of the world's leading open source engineers working on Arm get together for a full week of engineering sessions and hacking at Linaro Connect. The next Connect will be held in Budapest, Hungary March 23-27, 2020. Registration is now open!
          buttons:
            - title: Learn More
              url: /about/
              class: btn-primary
              icon: fa fa-arrow-right
      - format: feature_block
        feature_block_content:
          position: right
          type: image
          image_content_path: /assets/images/content/sponsor-cloud-image.png
          title: Sponsor Linaro Connect
          text: >
            Linaro Connect Budapest 2020 will be the 27th Connect since Linaro started in June 2010. Hundreds of the world’s best Linux on Arm developers come to Linaro Connect each time because they know it is the leading place to meet with the global community and to learn about what is going on in the industry. Sponsorship of the event puts your brand in front of all the event attendees – both the 400+ on-site and all those who participate remotely, as well as the thousands who view the website and social media before, during and after the event.
          buttons:
            - title: Learn More
              url: /sponsors/
              class: btn-primary
              icon: fa fa-arrow-right
            - title: Download Prospectus
              url: https://linaro.co/LinaroConnectSponsorshipProspectus
              class: btn-primary
              icon: fa fa-download
  - row: container_row
    style: block_row
    #   background_image: /assets/images/content/bkk19-group-photo.jpg
    sections:
      - format: title
        title_content:
          size: h2
          text: Linaro Connect Resources
      - format: block
        style: text-center text-white
        block_section_content:
          item_width: 4
          blocks:
            - title:
                size: h3
                text: SAN19 Photos
              url: https://www.flickr.com/photos/linaroorg/albums/72157710107995052
              background_image: /assets/images/content/san19-group-photo.jpg
              text_content:
                text: View gallery of photos taken at SAN19 on Flickr.
              buttons:
                - title: View on Flickr
                  url: https://www.flickr.com/photos/linaroorg/albums/72157710107995052
                  icon: fa fa-external-link
                  class: btn-primary
            - title:
                size: h3
                text: SAN19 Resources
              url: /resources/san19/
              background_image: /assets/images/content/san19-group-photo.jpg
              text_content:
                text: Each Connect 100+ educational resources are made available to the public. See the resources from BKK19.
              buttons:
                - title: View SAN19 Resources
                  url: /resources/san19/
                  icon: fa fa-slideshare
                  class: btn-primary
            - title:
                size: h3
                text: View all resources
              url: /resources/
              background_image: /assets/images/content/san19-group-photo.jpg
              text_content:
                text: View all of the Connect resources from the previous Linaro Connect events.
              buttons:
                - title: View all resources
                  url: /resources/
                  icon: fa fa-clock-o
                  class: btn-primary
  - row: custom_include_row
    source: homepage_video_modal.html
---
