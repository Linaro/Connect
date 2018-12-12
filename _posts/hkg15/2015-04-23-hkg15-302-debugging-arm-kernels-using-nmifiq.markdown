---
amazon_s3_presentation_url: https://s3.amazonaws.com/connect.linaro.org/hkg15/Videos/02-11-Wednesday/HKG15-302.pdf
amazon_s3_video_url: https://s3.amazonaws.com/connect.linaro.org/hkg15/Videos/02-11-Wednesday/HKG15-302+Debugging+Arm+kernels+using+NMIFIQ.mp4
author: connect
categories:
- hkg15
comments: true
date: 2015-04-23 15:36:41
excerpt: 'The Linux kernel can use non-maskable interrupts (NMI) to detect hard

  lockups, to help diagnose spin lock problems, to increase performance

  monitoring coverage and to make triggering KDB or KGDB more robust. Most

  Arm processors provide some means to simulate an NMI, either using Fast

  Interrupt reQuests (FIQ) or by carefully prioritizing normal interrupts,

  but the kernel was not capable of exploiting the hardware to provide

  improved debug features until very recently.


  This talk will describe how to take advantage of the new kernel features

  to help the kernel find your bugs for you. In doing so I will cover the

  historic uses of NMI on x86 Linux and of FIQ on Android and also provide

  an insight into the challenges of writing code that can pre-empt the

  scheduler (and indeed pretty much any other part of the kernel). We will

  also look at how TrustZone complicates the use of FIQ on armv7 and how

  the new architectural features introduced in armv8 can mitigate this.'
featured_image_name: HKG15-302.jpg
image:
  featured: true
  name: HKG15-302.jpg
  path: /assets/images/featured-images/HKG15-302.jpg
layout: resource-post
link: http://connect.linaro.org/resource/hkg15/hkg15-302-debugging-arm-kernels-using-nmifiq/
post_format:
- Video
session_id: HKG15-302
session_track: Kernel
slideshare_embed_url: //www.slideshare.net/slideshow/embed_code/44897220
slideshare_presentation_url: http://www.slideshare.net/linaroorg/hkg15302-debugging-arm-kernels-using-nmifiq
slug: hkg15-302-debugging-arm-kernels-using-nmifiq
speakers: Daniel Thompson
tags:
- Daniel Thompson
- hkg15
- HKG15-302
- Kernel
title: 'HKG15-302: Debugging Arm kernels using NMI/FIQ'
video_length: 01:03:54
video_thumbnail: None
wordpress_id: 734
youtube_video_url: https://www.youtube.com/watch?v=h2FHUT74pi0
---

HKG15-302: Debugging Arm kernels using NMI/FIQ 
--------------------------------------------------- 
Speaker: Daniel Thompson 
Date: February 11, 2015 
--------------------------------------------------- 
★ Session Summary ★ 
The Linux kernel can use non-maskable interrupts (NMI) to detect hard lockups, to help diagnose spin lock problems, to increase performance monitoring coverage and to make triggering KDB or KGDB more robust. Most Arm processors provide some means to simulate an NMI, either using Fast Interrupt reQuests (FIQ) or by carefully prioritizing normal interrupts, but the kernel was not capable of exploiting the hardware to provide improved debug features until very recently. This talk will describe how to take advantage of the new kernel features to help the kernel find your bugs for you. In doing so I will cover the historic uses of NMI on x86 Linux and of FIQ on Android and also provide an insight into the challenges of writing code that can pre-empt the scheduler (and indeed pretty much any other part of the kernel). We will also look at how TrustZone complicates the use of FIQ on armv7 and how the new architectural features introduced in armv8 can mitigate this. 
-------------------------------------------------- 
★ Resources ★ 
Pathable: https://hkg15.pathable.com/meetings/250806 
Presentation:  http://www.slideshare.net/linaroorg/hkg15302-debugging-arm-kernels-using-nmifiq
Etherpad: http://pad.linaro.org/p/hkg15-302 
--------------------------------------------------- 
★ Event Details ★ 
Linaro Connect Hong Kong 2015 - #HKG15 
February 9-13th, 2015 
Regal Airport Hotel Hong Kong Airport 
--------------------------------------------------- 
http://www.linaro.org 
http://connect.linaro.org