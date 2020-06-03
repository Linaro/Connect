---
author: charbax
categories:
- yvr18
comments: false
date: '2018-09-16 09:00:00+00:00'
image_name: yvr18-demo8.jpg
image: /assets/images/featured-images/yvr18-demo8.jpg
layout: resource-post
session_track: Demo
tag: demo
title: OpenCV Color Segmentation and Tracking on DragonBoard 820c
youtube_video_url: https://www.youtube.com/watch?v=Mk79hG7hqZ4
tag: demo
---
This demo is based and tested on the DragonBoard 820c, but should be able to work on varying platforms. In summary, it counts objects by color passing in the same direction through the camera field of view. It can count multiple objects simultaneously. The OpenCV functionality leveraged by this demo includes the following:

- Object segmentation using color
- Valid object identification by size
- Frame stitching to track and count multiple simultaneous moving objects by color
- Provides hooks to monitor performance when algorithm changes to - - OpenCV library calls are made for identification tuning
- Provides hooks to export results to the cloud
