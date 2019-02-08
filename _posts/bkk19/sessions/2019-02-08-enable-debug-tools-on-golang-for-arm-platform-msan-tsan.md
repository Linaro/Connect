---
categories:
- bkk19
description: '> Uninitialized memory can cause unpredict behavior and be hard to reproduce.
  Also Race conditions are among the most insidious and elusive programming errors.
  They typically cause erratic and mysterious failures, often long after the code
  has been deployed to production. Developers need to pay a lot of effort on testing
  and write code with care. Golang provides runtime tools for detecting those issues.<br
  /> <br /> MemorySanitizer is a dynamic detector of uninitialized memory(UUM) in
  C and C++. The tool is based on compile time instrumentation and relies on bitprecise
  shadow memory at run-time. Shadow propagation technique is used to avoid false positive
  reports on copying of uninitialized memory. Also it’s a part of LLVM trunk and implemented
  as an LLVM optimization pass.<br /> <br /> ThreadSanitizer is a dynamic detector
  of data races, implemented by hybrid algorithm(based on happens-befor and locksets)
  and is a part of compiler-rt in LLVM.<br /> <br /> In this presentation I will share<br
  /> 1, What are MemorySanitizer and ThreadSanitizer<br /> 2, The algorithms of the
  two detectors<br /> 3, The relationship between them and LLVM<br /> 4, How to port
  them into Golang on arm64<br /> 5, The example used in Golang'
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-102.png
session_attendee_num: '4'
session_id: BKK19-102
session_room: Session Room 1 (Lotus 1-2)
session_slot:
  end_time: '2019-04-01 14:25:00'
  start_time: '2019-04-01 14:00:00'
session_speakers:
- speaker_bio: '> Work on Golang for enabling arm port, performance optimization etc.'
  speaker_company: ''
  speaker_image: /assets/images/speakers/bkk19/fangming-fang-arm-technology-china.jpg
  speaker_location: ''
  speaker_name: Fangming Fang (Arm Technology China)
  speaker_position: arm,  senior engineer
  speaker_username: fangming.fang
session_track: Tools
tag: session
tags:
- Tools
title: Enable debug tools on Golang for arm platform – (MSan & TSan)
---