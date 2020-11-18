---
title: Bringing the Arm ecosystem together
description: Every six months, over 300 of the world's leading open source
  engineers working on Arm get together for a full week of engineering sessions
  and hacking at Linaro Connect.
permalink: /
css-package: home
layout: flow
jumbotron:
  slider:
    - darken: true
      inner_class: text-center
      title: ""
      custom_include: connect_logo_insert.html
      title-class: font-weight-bold
      image: /assets/images/content/many_screens.jpg
flow:
  - row: container_row
    sections:
      - format: text
        style: text-center
        text_content:
          text: >
            Linaro Connect is an event that runs twice a year that brings
            together the Arm Ecosystem. testing.


            This is the **ONLY** event where developers, maintainers of both hardware and software can


            openly discuss and collaborate across common problems.


            Due to the current climate we are running these events virtually with great success.

            The next Linaro Connect will be held in March 2021. Please watch this space for full details

            which will be released by the end of this year.
  - row: container_row
    style: bg-secondary text-white
    sections:
      - format: title
        style: text-center text-white
        title_content:
          size: h2
          text: LVC20 stats (during the 3 days of the event)
      - format: custom_include
        source: stats_section.html
  - row: container_row
    style: block_row
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
            - title: Connect Photos
              url: https://www.flickr.com/photos/linaroorg/
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: View the gallery of photos taken at Connect on Flickr.
              buttons:
                - title: View on Flickr
                  url: https://www.flickr.com/photos/linaroorg/
                  class: btn-primary
            - title: LTD20 Resources
              url: /resources/ltd20/
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: View the resources from our latest virtual conference.
              buttons:
                - title: View Resources
                  url: /resources/ltd20/
                  class: btn-primary
            - title: View all resources
              url: /resources/
              image: /assets/images/content/san19-group-photo.jpg
              background_image: true
              description: View Connect resources from the previous Linaro Connect events.
              buttons:
                - title: View all resources
                  url: /resources/
                  class: btn-primary
  - row: custom_include_row
    source: homepage_video_modal.html
---
