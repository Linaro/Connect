---
categories:
- bkk19
description: This is a presentation on Dynamic Configuration and the associated Position
  Independent Executable Support (PIE) in Trusted Firmware-A (TF-A).<br><br>SFO17
  had a BoF session (by Dan Handley) to discuss the implementation plan for dynamic
  configuration in firmware. General agreement was that this is a good feature to
  do and some of the envisaged use-cases were:&nbsp;<br>* Dynamic config of secure
  firmware features<br>* Dynamic firmware config using hardware configuration, security
  policies<br>* Modification of hardware configuration as seen by other software<br>*
  Centralized static firmware configuration etc<br><br>The presentation will focus
  on the implementation of dynamic configuration and how it can be utilized by TF-A
  partners. Some illustrations wherein ARM platforms dynamically configure the firmware
  for functionality and memory savings will also be provided.<br><br>Position Independent
  Executable (PIE) support for TF-A has been a long pending request from TF-A partners.
  The presentation will describe the technical details on how this feature was implemented
  in AArch64 version of TF-A. It will also cover some limitations of the implemented
  `dynamic relocation fixup` code and some code patterns in the firmware which had
  to be changed to simplify the fixup code implementation.
image:
  featured: 'true'
  path: /assets/images/featured-images/bkk19/BKK19-513.png
session_attendee_num: '8'
session_id: BKK19-513
session_room: 'Keynote Room (World Ballroom BC) '
session_slot:
  end_time: '2019-04-05 11:55:00'
  start_time: '2019-04-05 11:30:00'
session_speakers:
- speaker_bio: ''
  speaker_company: Arm
  speaker_image: /assets/images/speakers/bkk19/soby-mathew.jpg
  speaker_location: Cambridge
  speaker_name: Soby Mathew
  speaker_position: Tech Lead Trusted Firmware-A
  speaker_username: soby.mathew
session_track: Security
tag: session
tags:
- Boot Architecture
title: 'TF-A: Dynamic Configuration and PIE support'
---