---
categories:
- bkk19
description: <br /> Most SoC designs today implement a central entity that orchestrates
  System and Power Management controls. Such an entity may often be referred to as
  the System Control Processor (SCP), which is often a microcontroller. We use the
  term SCP to refer to the concept of such an entity throughout the rest of this abstract.
  The communication interface to the SCP is via transport channels.<br /> <br /> The
  ARM System Control & Management Interface (SCMI) specification v1.0 was designed
  to provide an industry standard transport independent interface to the SCP to enable
  system and power management. SCMI enables transport channels to ferry SCMI commands
  from an agent sitting on a Processing Entity (like an Application Processor) to
  the SCP. The SCP then decodes and implements the actions described by the SCMI commands.
  SCMIv1.0 is an already published specification supporting power, performance, clocks,
  sensors and system state management.<br /> <br /> Our presentation will talk about
  the vision of SCMI to enable a truly scalable Power Management software stack that
  can work across all compliant devices with minimal modification, with device specific
  controls resident in firmware. It will talk about evolution of the ARM SCMI Specification
  and how the next revision of the specification will enable next-generation system
  designs, especially touching a few key areas as outlined below.<br /> <br /> There
  is a growing requirement in certain segments of the industry to deploy virtualized
  systems, especially in the automotive domain. We will explain how SCMI can enable
  Power Management virtualization in such systems and design considerations thereof.
  We will also introduce the concept of Reset Domains and their Management via SCMI.
  Currently most Operating Systems manage Device Power, Clock and Performance via
  various frameworks in order to control a device. We envision a unified way of managing
  a device via a Device-centric model of Power Management. We will explain how SCMI
  can enable such a model and simplify current Power Management stacks.<br /> <br
  /> Our presentation will be of interest to people and organizations who are looking
  to enable scalable Power Management stacks for future devices where multiple Operating
  Systems may run concurrently in the same SoC, either physically on different Processing
  Entities, or via Virtualization.<br />
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-313.png
session_active: Y
session_attendee_num: '3'
session_id: BKK19-313
session_room: Session Room 2 (Lotus 3-4)
session_slot:
  end_time: '2019-04-03 12:55:00'
  start_time: '2019-04-03 12:30:00'
session_speakers:
- speaker_company: ''
  speaker_image: /assets/images/speakers/bkk19/SouvikChakravarty.jpg
  speaker_location: ''
  speaker_name: Souvik Chakravarty
  speaker_position: Staff Software Engineer at ARM LTD.
  speaker_username: souvik.chakravarty
- speaker_company: Arm Limited
  speaker_image: /assets/images/speakers/bkk19/ThanunathanRangarajan.jpg
  speaker_location: ''
  speaker_name: Thanunathan Rangarajan
  speaker_position: Principal Engineer
  speaker_username: thanu.rangarajan
session_track: Power Management
tag: session
tags:
- Automotive
- Android
- Power Management
- Linux Kernel
- IoT and Embedded
title: ARM SCMI Specification - Evolution & Roadmap to support improvements in System
  & Power Management
---

content