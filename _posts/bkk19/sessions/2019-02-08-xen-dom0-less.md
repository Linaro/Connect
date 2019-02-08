---
categories:
- bkk19
description: '> When developing embedded systems, it is common to have mixed-criticality
  requirements: one application is critical, and often comes with real-time requirements,
  while the other application is far less critical and it is typically based on Linux.
  Static partitioning is the best way to meet these requirements.<br><br>This talk
  will introduce Dom0-less: a brand new way of using Xen to build mixed-criticality
  solutions. Dom0-less is a Xen feature that adds a novel approach to static partitioning
  based on virtualization. It allows multiple domains to start at boot time directly
  from the Xen hypervisor, decreasing boot times dramatically. Dom0-less makes booting
  a critical application in less than a second an achievable goal. Xen userspace tools,
  such as xl and libvirt, become only optional. Even Dom0, the cardinal point of every
  Xen deployment since its inception, becomes inessential.<br><br>Dom0-less extends
  the existing device tree based Xen boot protocol to cover information required by
  additional domains. Binaries, such as kernels and ramdisks, are loaded by the bootloader
  (u-boot) and advertised to Xen via new device tree bindings.<br><br>The audience
  will learn how to use Dom0-less to partition the system. Uboot and device tree configuration
  details will be explained to enable the audience to get the most out of this feature.
  The presentation will also include a live demo of the technology.'
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-512.png
session_attendee_num: '2'
session_id: BKK19-512
session_room: Session Room 2 (Lotus 3-4)
session_slot:
  end_time: '2019-04-05 23:55:00'
  start_time: '2019-04-05 23:30:00'
session_speakers:
- speaker_bio: '> '
  speaker_company: Xilinx
  speaker_image: /assets/images/speakers/placeholder.png
  speaker_location: ''
  speaker_name: Stefano Stabellini
  speaker_position: Principle Engineer
  speaker_username: s.stabellini
session_track: IoT and Embedded
tag: session
tags:
- Automotive
title: Xen Dom0-less
---