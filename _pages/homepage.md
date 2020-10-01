---
layout: flow
css-package: home
permalink: /
title: Bringing the Arm ecosystem together
description: |-
  Every six months, over 300 of the world's leading open source engineers working on Arm get together for a full week of engineering sessions and hacking at Linaro Connect.
jumbotron:
  slider:
    - darken: true
      inner_class: text-center
      title: ""
      custom_include: connect_logo_insert.html
      title-class: font-weight-bold
      image: /assets/images/content/virtual_meeting.jpg
home: true
redirect_from:
  - /keynotes/bkk19/
  - /keynotes/
flow:
  - row: container_row
    style: bg-secondary
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Linaro Virtual Connect 2020 has now ended.
      - format: text
        style: text-center text-white
        text_content:
          text: |
            Thank you so much to those that attended. We hope you enjoyed our event and found the content engaging and useful.

            We would again, like to thank all of our speakers and our sponsors Arrow and Arm.

            The next Linaro Connect will be held in March 2021. Please watch this space for full details which will be released by the end of this year.

            In the meantime all of the content from LVC20 is available here.
      - buttons_content:
          - icon: fa fa-arrow-right
            title: LVC20 Resources
            url: /resources/lvc20/
        format: buttons
        style: text-center
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
