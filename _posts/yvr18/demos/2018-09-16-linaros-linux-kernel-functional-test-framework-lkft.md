---
author: charbax
categories:
- yvr18
comments: false
date: '2018-09-16 09:00:00+00:00'
image:
  featured: true
  name: yvr18-demo6.jpg
  path: /assets/images/featured-images/yvr18-demo6.jpg
layout: resource-post-demo-interview
session_track: Demo
speakers:
- company: Linaro
  name: Naresh Kamboju
  job-title: Linux Kernel Validation Engineer
title: Linaro’s Linux Kernel Functional Test framework (LKFT)
youtube_video_url: https://www.youtube.com/watch?v=cuVWWXLMHlY
tag: demo
---
Linaro LKFT build uses OpenEmbedded to build a userspace image, along with the kernel, for each board and branch combination under test.

LKFT is Linaro’s Linux Kernel Functional Test framework.

The mission of LKFT is to perform functional regression testing on select Linux kernel branches in real time (as they’re updated) and report any regressions as quickly as possible. This is performed by executing a variety of functional-tests on a selection of user-space operating systems.

The goals of LKFT are to shorten derivative Linux kernel release intervals, increase the confidence of upstream Linux kernel engineers in the quality of their releases, and increase the confidence of downstream adopters of those Linux kernel trees. Ultimately the goal is that LKFT will encourage downstream hardware vendors to more frequently update the Linux kernel that runs on their devices in order that consumers might benefit from bug and security updates.

As part of Linaro’s mission to improve the Arm architecture eco-system, the LKFT team reports discovered regressions to Linaro kernel developers, Linaro members, and upstream Linux kernel engineers.

It is important to the Arm eco-system that Linaro also fix as many failures as are found. The LKFT team invests time into identifying, reporting, and fixing upstream kernel regressions, identifying kernel regressions in select member-hardware SoC (system-on-a-chip) trees, fixing test-suites by contributing to upstream testing projects, fixing kernel configurations, improving full OS stack integration (firmware, kernel, userspace), and improving Arm device automation integration.

Linux Kernel tree / branches under testing,
- next
- mainline
- 4.18.y
- 4.14.y
- 4.9.y
- 4.4.y

Functional testing test suites.
- Kselftest - ~100 tests
- Linux Test Project (LTP) - ~3000 tests
- Libhugetlbfs - ~90 tests

10 Testing Environments
- dragonboard-410c - arm64
- hi6220-hikey - arm64
- I386
- juno-r2 - arm64
- qemu_arm
- qemu_arm64
- qemu_i386
- qemu_x86_64
- x15 - arm
- x86_64

    Demo by
    Naresh Kamboju
    Linux Kernel Validation Engineer
    Linaro
