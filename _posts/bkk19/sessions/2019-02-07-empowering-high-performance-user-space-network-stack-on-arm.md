---
categories:
- bkk19
description: DPDK has lower layer high performance packet processing functionalities
  which surpasses the kernel. Kernel bypass can avoid performance bottlenecks caused
  by kernel packet copy, thread scheduling, system calls and interrupt. The user space
  TCP/IP stack provides much higher networking performance, flexible socket configuration,
  larger TCP transmission buffer than the legacy kernel network stack. <br /> In this
  presentation we would like to give out our work of the user space TCP/IP stack on
  Arm, which covers the following but not limited to:<br /> 1. Introduction to current
  high performance user space network stacks available on arm, which includes F-stack.
  mTCP, VPP Hoststack, Seastar, Rumpkernel, etc.<br /> 2. The enablement and improvement
  of F-Stack on arm, which is a complete Freebsd based high performance full user
  space network stack. we would also present our work on the new feature development,
  such as IPerf3 for F-stack and its application development ways.<br /> 3. Performance
  evaluation and analysis to F-Stack with different number of CPU cores on arm;<br
  /> 4. Detailed comparisons between most currently available TCP/IP stacks on arm;<br
  /> 5. The technical mechanism to enable F-Stack working as an independant user space
  network library to enable fast application integration;<br /> 6. Future work on
  use space TCP/IP stack for arm
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-418.png
session_active: Y
session_attendee_num: '0'
session_id: BKK19-418
session_room: Session Room 2 (Lotus 3-4)
session_slot:
  end_time: '2019-04-04 12:55:00'
  start_time: '2019-04-04 12:30:00'
session_speakers:
- speaker_company: arm
  speaker_image: /assets/images/speakers/bkk19/TrevorTao.jpg
  speaker_location: Shanghai, China
  speaker_name: Trevor Tao
  speaker_position: Staff Software Engineer
  speaker_username: trevortao
session_track: Networking
tag: session
tags:
- Validation and CI
- Testing
title: Empowering High Performance User Space Network Stack on Arm
---

content