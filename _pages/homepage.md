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
      title: Bringing the Arm ecosystem together
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
      - format: text
        style: text-center text-white
        text_content:
          text: |
            As a result of Covid-19 and concern for the safety of all attendees, we have cancelled all Linaro Connect events scheduled for 2020.

            **However, we will be hosting Linaro Virtual Connect September 22-24, 2020 online. This event will be a 3 day series of technical keynotes, sessions and more.**

            You can view the schedule below. More information about Linaro is available at [linaro.org](https://www.linaro.org)

            Please note live seminars will not be available to view unless you register for this event, so please register today!.
      - format: custom_include
        source: register_popup.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: Register Today!
            url: https://www.eventbrite.co.uk/e/linaro-virtual-connect-2020-tickets-112995398278
            style: btn-primary text-uppercase font-weight-bold
  - row: container_row
    style: bg-white
    sections:
      - format: custom_include
        source: schedule.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: Register Today!
            url: https://www.eventbrite.co.uk/e/linaro-virtual-connect-2020-tickets-112995398278
            style: btn-primary text-uppercase font-weight-bold
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
