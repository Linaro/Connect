---
amazon_s3_presentation_url: https://s3.amazonaws.com/connect.linaro.org/hkg15/Videos/02-12-Thursday/HKG15-404.pdf
amazon_s3_video_url: https://s3.amazonaws.com/connect.linaro.org/hkg15/Videos/02-12-Thursday/HKG15-404+Standardizing+Linux+Kernel+Power+mgmt+on+ARM+32+64+bit.mp4
author: connect
categories:
- hkg15
comments: true
date: 2015-04-23 15:36:33
featured_image_name: HKG15-404.jpg
image:
  featured: true
  name: HKG15-404.jpg
  path: /assets/images/featured-images/HKG15-404.jpg
layout: resource-post
link: http://connect.linaro.org/resource/hkg15/hkg15-404-standardizing-linux-kernel-power-management-on-arm-3264-bit/
post_format:
- Video
session_id: HKG15-404
slug: hkg15-404-standardizing-linux-kernel-power-management-on-arm-3264-bit
speakers: Lorenzo Pieralisi
tags:
- hkg15
- HKG15-404
- Lorenzo Pieralisi
title: 'HKG15-404: Standardizing Linux Kernel Power Management on ARM 32/64-bit'
video_length: '42:54'
video_thumbnail: None
wordpress_id: 751
youtube_video_url: https://www.youtube.com/watch?v=YB7W-v1At4o
---

The 32-bit ARM kernel supports a wide variety of processors harking back to ARM v4 architecture up to the latest v7 SMP processors. This huge legacy forced kernel developers to adapt the power management code for the newest processors (eg v7 multi-cluster systems) to an infrastructure that was developed to support simpler uniprocessor (UP) ARM architectures, resulting in code fragmentation and lack of unified drivers.

The brand new ARM v8 architecture provides kernel developers a clean slate to start developing new code, a nice opportunity to learn lessons from the past and bring about a kernel power management (PM) subsystem completely generic and up to the latest standards. This talk will provide details of the undergoing effort carried out at ARM to develop a kernel PM framework for ARM v8 systems, with kernel design details of the respective DT and ACPI implementations.