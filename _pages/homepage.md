---
title: Bringing the Arm ecosystem together
description: >
  Every six months, over 300 of the world's leading open source engineers
  working on Arm get together for a full week of engineering sessions and
  hacking at Linaro Connect.
permalink: /
published: true
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
        style: large_text text-center
        text_content:
          text: >
            Linaro Connect is an event that runs twice a year that brings
            together the Arm Ecosystem.
      - format: text
        style: text-center
        text_content:
          text: >
            This is the ONLY event where developers, maintainers of both
            hardware and software can collaborate and discuss common problems.
      - format: block
        style: text-center text-dark connect_blocks
        item_width: "6"
        block_section_content:
          blocks:
            - style: text-dark
              description: Due to the current climate we will be running the next event
                virtually. The next Linaro Connect will be held online from
                **March 23-25, 2021**.
            - style: text-dark
              description: >-
                Registration is open. View the full [schedule
                ](https://connect.linaro.org/schedule/)and complete your free
                [registration](https://connect.linaro.org/register/) to receive
                access to the LVC21 event platform.


                Registered attendees can access the Event Platform [here](https://app.pinetool.ai/attendee/events).
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
      - format: buttons
        style: text-center
        buttons_content:
          - title: View LVC20 Resources
            url: /resources/lvc20/
            style: btn-primary
  - row: custom_include_row
    source: homepage_video_modal.html
---
