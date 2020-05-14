---
categories:
- san19
comments: false
date: '2019-10-17 09:00:00+00:00'
image:
  name: san19-op-tee-moves-into-trusted-firmware-interview.png
image: /assets/images/featured-images/san19-op-tee-moves-into-trusted-firmware-interview.png
layout: resource-post-demo-interview
session_track: Interview
speakers:
- company: Linaro
  name: Bill Fletcher
- company: Arm
  name: Matteo Carlini
- company: Linaro
  name: Joakim Bech
title: Linaro donates OP-TEE to the Trusted Firmware Project
youtube_video_url: https://www.youtube.com/watch?v=-vuEiZr0LtU
tag: interview
---
Linaro Ltd, the open source collaborative engineering organization developing software for the Arm ® ecosystem, announced that OP-TEE (Open Portable TEE, an open source Arm TrustZone® solution) is moving to become part of the Trusted Firmware open project managed by Linaro on the 23rd September 2019 at Linaro Connect San Diego.

OP-TEE is a Trusted Execution Environment (TEE) designed as a companion to a non-secure Linux kernel running on Arm Cortex®-A cores using the Arm TrustZone technology. OP-TEE implements TEE Internal Core API v1.1.x which is the API exposed to Trusted Applications and the TEE Client API v1.0, which is the API describing how to communicate with a TEE. Those APIs are defined in the GlobalPlatform API specifications. OP-TEE is designed primarily to rely on the Arm TrustZone technology as the underlying hardware isolation mechanism. However, it has been structured to be compatible with any isolation technology suitable for the TEE concept and goals, such as running as a virtual machine or on a dedicated CPU.

Trusted Firmware provides a reference implementation of secure world software for Armv8-A and Armv8-M. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. This forms the foundations of a TEE on application processors, or the Secure Processing Environment (SPE) of microcontrollers. It includes a Secure Monitor executing at Exception Level 3 (EL3). It implements various Arm interface standards including the Power State Coordination Interface (PSCI), Trusted Board Boot Requirements (TBBR), SMC Calling Convention, and System Control and Management Interface.
