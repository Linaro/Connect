---
layout: flow
css-package: home
permalink: /
title: Bringing the Arm ecosystem together
description: |-
    Every six months, over 300 of the world's leading open source engineers working on Arm get together for a full week of engineering sessions and hacking at Linaro Connect.
jumbotron:
  title: Bringing the Arm ecosystem together
  description: ""
  image: /assets/images/content/san19-group-photo.jpg
home: true
redirect_from:
  - /keynotes/bkk19/
  - /keynotes/
flow:
  - row: container_row
    style: bg-secondary
    sections:
      - format: title
        style: text-center text-white
        title_content:
          size: h2
          text: Linaro Connect Budapest 2020 Cancelled
      - format: text
        style: text-center text-white
        text_content:
          text: |-
            As a result of the Coronavirus, It is with great regret that we have decided to cancel the upcoming Linaro Connect which was due to be held on 23-27 March 2020 at Corinthia Hotel in Budapest, Hungary. You can read the complete statement [here](https://www.linaro.org/blog/linaro-connect-budapest-2020-cancelled/).

            We had many great technical sessions scheduled and as such, want to do all we can to repurpose as much of the content as possible. We have created Linaro Tech Days - A livestream event of technical sessions on 24 and 25 March 2020.
      - format: buttons
        style: text-center
        buttons_content:
            - title: Linaro Tech Days Resources
              url: /resources/ltd20/
              style: btn-primary
  - row: container_row
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
            Every six months, over 300 of the world's leading open source engineers working on Arm get together for a full week of engineering sessions and hacking at Linaro Connect.
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
            Hundreds of the world’s best Linux on Arm developers come to Linaro Connect each time because they know it is the leading place to meet with the global community and to learn about what is going on in the industry. Sponsorship of the event puts your brand in front of all the event attendees – both the 400+ on-site and all those who participate remotely, as well as the thousands who view the website and social media before, during and after the event.
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
        style: text-center
        title_content:
          size: h2
          text: Linaro Connect Resources
      - format: block
        style: text-center text-white
        item_width: 4
        block_section_content:
          blocks:
            - title: SAN19 Photos
              url: https://www.flickr.com/photos/linaroorg/albums/72157710107995052
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: View gallery of photos taken at SAN19 on Flickr.
              buttons:
                - title: View on Flickr
                  url: https://www.flickr.com/photos/linaroorg/albums/72157710107995052
                  icon: fa fa-external-link
                  class: btn-primary
            - title: SAN19 Resources
              url: /resources/san19/
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: Each Connect 100+ educational resources are made available to the public. See the resources from BKK19.
              buttons:
                - title: View SAN19 Resources
                  url: /resources/san19/
                  icon: fa fa-slideshare
                  class: btn-primary
            - title: View all resources
              url: /resources/
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: View all of the Connect resources from the previous Linaro Connect events.
              buttons:
                - title: View all resources
                  url: /resources/
                  icon: fa fa-clock-o
                  class: btn-primary
  - row: custom_include_row
    source: homepage_video_modal.html
---
