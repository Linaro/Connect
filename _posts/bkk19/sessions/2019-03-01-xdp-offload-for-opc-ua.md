---
categories:
- bkk19
description: OPC Unified Architecture (OPC UA) is a machine to machine communication
  protocol for industrial automation. One of the challenging task is to lower network
  latency for request on measurement node (receive part of the network stack). Because
  of measurement value carry timestamp there is no strict latency requirement to tx
  path. This talk is about experimental way to use eXpress Data Path (XDP) sockets
  merged to the latest mainline kernel with zero copy packets to userspace with LWIP
  network stack in application instead of linux kernel network stack.
image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-504.png
session_attendee_num: '5'
session_id: BKK19-504
session_room: Session Room 3 (Lotus 10)
session_slot:
  end_time: '2019-04-05 08:55:00'
  start_time: '2019-04-05 08:30:00'
session_speakers:
- speaker_bio: ''
  speaker_company: Linaro
  speaker_image: /assets/images/speakers/placeholder.jpg
  speaker_location: ''
  speaker_name: Maxim Uvarov
  speaker_position: Sr. Software Engineer
  speaker_username: maximuvarov
session_track: IoT Fog/Gateway/Edge Computing
tag: session
tags:
- Open Source Development
title: XDP Offload for OPC UA
---