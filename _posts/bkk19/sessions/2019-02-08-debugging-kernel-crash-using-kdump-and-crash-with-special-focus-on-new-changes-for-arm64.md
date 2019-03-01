---
categories:
- bkk19
description: Debugging crashes while booting vanilla linux kernel can be challenging
  especially if your enabling it on a new hardware platform (like some of the new
  arm64 chips). kdump provides one such mechanism which allows crash dump notes to
  be saved and dumped via various interfaces (e.g. local disk, nfs share, etc). Such
  crash dump allows a later investigation of the issue by sharing the crash dump with
  the Linux distro provider or discussed upstream (with a Linux kernel expert). Usually
  a crash dump is a complete memory image of the system at the time of the crash and
  also contains details like dmesg and register values available on the system when
  the kernel crash.<br /> <br /> In addition we need user-space tools which can help
  analyze such crash dumps. crash is one such user-space utility which provides mechanisms
  to obtain useful information from the crash dumps, which can be used to determine
  the root-cause of the kernel crash/panic.<br /> <br /> In addition with most new
  arm64 platforms now supporting KASLR (Kernel address space layout randomization)
  feature, there are significant new changes happening in the user-space tools like
  kdump and crash to enable debugging crash dumps of KASLR enabled kernels where we
  need to take into account that the critical kernel addresses (such as kernel load
  address) will get randomized (due to KASLR). <br /> <br /> This session will also
  talk about the new KEXEC_FILE_LOAD support which is available since kernel v5.0-rc1.
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-106.png
session_attendee_num: '6'
session_id: BKK19-106
session_room: Session Room 1 (Lotus 1-2)
session_slot:
  end_time: '2019-04-01 14:55:00'
  start_time: '2019-04-01 14:30:00'
session_speakers:
- speaker_bio: I work with Red Hat and am I a part of the RH kernel team. I have been
    hacking on bootloaders and kernel used on arm architecture since past 13 years.
    I contribute to Linux, EFI/u-boot bootloader code base and also to user-space
    utilities like kexec-tools and crash-utility. Bringing up a Silicon (i.e. running
    the first SW on it) after hardware tapeout is my passion and I have interest in
    pre-silicon emulator and simulator design methodologies as well.
  speaker_company: ''
  speaker_image: /assets/images/speakers/bkk19/bhupesh-sharma
  speaker_location: ''
  speaker_name: Bhupesh Sharma
  speaker_position: I work with Red Hat in the RH kernel team.
  speaker_username: bhupeshsharma
session_track: Tools
tag: session
tags:
- Tools
- Linux Kernel
title: 'Debugging kernel crash using kdump and crash: With special focus on new changes
  for arm64'
---