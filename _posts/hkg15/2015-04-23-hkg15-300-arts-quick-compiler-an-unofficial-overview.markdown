---
amazon_s3_presentation_url: https://s3.amazonaws.com/connect.linaro.org/hkg15/Videos/02-11-Wednesday/HKG15-300.pdf
author: connect
categories:
- hkg15
comments: true
date: 2015-04-23 15:36:47
excerpt: 'One of the important technical novelties introduced with the recent release
  of Android Lollipop is the replacement of Dalvik, the VM which was used to execute
  the bytecode produced from Java apps, with ART, a new Android Run-Time. One interesting
  aspect in this upgrade is that the use of Just-In-Time compilation was abandoned
  in favour of Ahead-Of-Time compilation. This delivers better performance [1], also
  leaving a good margin for future improvements. ART was designed to support multiple
  compilers. The compiler that shipped with Android Lollipop is called the "Quick
  Compiler". This is simple, fast, and is derived from Dalvik''s JIT compiler.


  In 2014 our team at ARM worked in collaboration with Google to extend ART and its
  Quick Compiler to add support for 64-bit and for the A64 instruction set. These
  efforts culminated with the recent release of the Nexus 9 tablet, the first 64-bit
  Android product to hit the market. Despite Google''s intention of replacing the
  Quick Compiler with the so-called "Optimizing Compiler", the job for the the Quick
  Compiler is not yet over. Indeed, the Quick Compiler will remain the only usable
  compiler in Android Lollipop. Therefore, all competing parties in the Android ecosystem
  have a huge interest in investigating and improving this component, which will very
  likely be one of the battlegrounds in the Android benchmark wars of 2015.


  This talk aims to give an unofficial overview of ART''s Quick compiler. It will
  first focus on the internal organisation of the compiler, adopting the point of
  view of a developer who is interested in understanding its limitations and strengths.
  The talk will then move to exploring the output produced by the compiler, discussing
  possible strategies for improving the generated code, while keeping in mind that
  this component may have a limited life-span, and that any long-term work would be
  better directed towards the Optimizing Compiler.


  [1] The ART runtime, B. Carlstrom, A. Ghuloum, and I. Rogers, Google I/O 2014, https://www.youtube.com/watch?v=EBlTzQsUoOw

'
image:
  featured: true
  name: HKG15-300.jpg
  path: /assets/images/featured-images/HKG15-300.jpg
layout: post
link: http://connect.linaro.org/resource/hkg15/hkg15-300-arts-quick-compiler-an-unofficial-overview/
post_format:
- Video
session_id: HKG15-300
session_track: Mobile
slideshare_presentation_url: http://www.slideshare.net/linaroorg/hkg15300-arts-quick-compiler-an-unofficial-overview
slug: hkg15-300-arts-quick-compiler-an-unofficial-overview
speakers: Matteo Franchin
tags:
- hkg15
- HKG15-300
- Matteo Franchin
- Mobile
title: 'HKG15-300: Art''s Quick Compiler: An unofficial overview'
video_length: '47:38'
video_thumbnail: None
wordpress_id: 732
youtube_video_url: https://www.youtube.com/watch?v=iho-e7EPHk0
---

HKG15-300: Art's Quick Compiler: An unofficial overview 
--------------------------------------------------- 
Speaker: Matteo Franchin 
Date: February 11, 2015 
--------------------------------------------------- 
★ Session Summary ★ 
One of the important technical novelties introduced with the recent release of Android Lollipop is the replacement of Dalvik, the VM which was used to execute the bytecode produced from Java apps, with ART, a new Android Run-Time. One interesting aspect in this upgrade is that the use of Just-In-Time compilation was abandoned in favour of Ahead-Of-Time compilation. This delivers better performance [1], also leaving a good margin for future improvements. ART was designed to support multiple compilers. The compiler that shipped with Android Lollipop is called the “Quick Compiler”. This is simple, fast, and is derived from Dalvik’s JIT compiler. In 2014 our team at ARM worked in collaboration with Google to extend ART and its Quick Compiler to add support for 64-bit and for the A64 instruction set. These efforts culminated with the recent release of the Nexus 9 tablet, the first 64-bit Android product to hit the market. Despite Google’s intention of replacing the Quick Compiler with the so-called “Optimizing Compiler”, the job for the the Quick Compiler is not yet over. Indeed, the Quick Compiler will remain the only usable compiler in Android Lollipop. Therefore, all competing parties in the Android ecosystem have a huge interest in investigating and improving this component, which will very likely be one of the battlegrounds in the Android benchmark wars of 2015. This talk aims to give an unofficial overview of ART’s Quick compiler. It will first focus on the internal organisation of the compiler, adopting the point of view of a developer who is interested in understanding its limitations and strengths. The talk will then move to exploring the output produced by the compiler, discussing possible strategies for improving the generated code, while keeping in mind that this component may have a limited life-span, and that any long-term work would be better directed towards the Optimizing Compiler. [1] The ART runtime, B. Carlstrom, A. Ghuloum, and I. Rogers, Google I/O 2014,https://www.youtube.com/watch?v=EBlTzQsUoOw 
-------------------------------------------------- 
★ Resources ★ 
Pathable: https://hkg15.pathable.com/meetings/250804 
Presentation: http://www.slideshare.net/linaroorg/hkg15300-arts-quick-compiler-an-unofficial-overview
Etherpad: N/A 
--------------------------------------------------- 
★ Event Details ★ 
Linaro Connect Hong Kong 2015 - #HKG15 
February 9-13th, 2015 
Regal Airport Hotel Hong Kong Airport 
--------------------------------------------------- 
http://www.linaro.org 
http://connect.linaro.org