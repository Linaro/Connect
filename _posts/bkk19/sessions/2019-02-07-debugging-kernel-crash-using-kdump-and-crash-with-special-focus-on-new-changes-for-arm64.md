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
  also contains details like 'dmesg' and 'register values' available on the system
  when the kernel crash.<br /> <br /> In addition we need user-space tools which can
  help analyze such crash dumps. 'crash' is one such user-space utility which provides
  mechanisms to obtain useful information from the crash dumps, which can be used
  to determine the root-cause of the kernel crash/panic.<br /> <br /> In addition
  with most new arm64 platforms now supporting KASLR (Kernel address space layout
  randomization) feature, there are significant new changes happening in the user-space
  tools like 'kdump' and 'crash' to enable debugging crash dumps of KASLR enabled
  kernels where we need to take into account that the critical kernel addresses (such
  as kernel load address) will get randomized (due to KASLR). <br /> <br /> This session
  will also talk about the new KEXEC_FILE_LOAD support which is available since kernel
  v5.0-rc1.
future_image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-206.png
session_active: Y
session_attendee_num: '0'
session_id: BKK19-206
session_room: Session Room 1 (Lotus 1-2)
session_slot:
  end_time: '2019-04-02 09:25:00'
  start_time: '2019-04-02 09:00:00'
session_speakers:
- speaker_company: ''
  speaker_image: /assets/images/speakers/bkk19/BhupeshSharma
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

content