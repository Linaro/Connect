---
categories:
- bkk19
description: Trusted Firmware-M (TF-M) is an implementation of Platform Security Architecture
  (PSA) for M class processors. TF-M includes a couple of secure services. Many partners
  want to take advantage of that to extend their PSA features.<br /> <br /> Our design
  is to extend TF-M’s services to Zephyr based dual-core SoC. A Zephyr instance runs
  in secure core with secure services, another Zephyr instance runs in non-secure
  core which can call secure services. For this solution, the first step is to modularize
  secure services in TF-M and remove service platform dependencies. Then start them
  as Zephyr threads in secure core. And at last, implement IPC interface for the service
  requests from non-secure core to secure core by leveraging openAMP which is supported
  in Zephyr. This session will discuss the TF-M secure services modularization, running
  secure services in Zephyr and the IPC implementation.<br />
image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-213.png
session_attendee_num: '12'
session_id: BKK19-213
session_room: Session Room 3 (Lotus 10)
session_slot:
  end_time: '2019-04-02 11:55:00'
  start_time: '2019-04-02 11:30:00'
session_speakers:
- speaker_bio: Senior Software Engineer of arm, working as Linaro assignee for LITE.
    Mainly focus on embedded and IoT, v8-m of TF-M.
  speaker_company: arm
  speaker_image: /assets/images/speakers/bkk19/karl-zhang.jpg
  speaker_location: ''
  speaker_name: Karl Zhang
  speaker_position: Sr. Software Engineer
  speaker_username: karl.zhang
session_track: IoT and Embedded
tag: session
tags:
- Open Source Development
- Networking
title: TF-M modularization of secure services help to extend your trusted OS easily
---