---
title: PKCS#11 in OP-TEE
categories:
  - lvc21f
date: "2021-09-24 09:00:00+00:00"
image: /assets/images/featured-images/lvc21f/LVC21F-demo-pkcs11-in-op-tee.png
layout: resource-post
amazon_s3_video_url: https://static.linaro.org/connect/lvc21f/videos/LVC21F-demo-pkcs11-demo-v2.mp4
session_track: Security
tag: demo
session_speakers:
  - speaker_bio: ""
    speaker_company: Linaro
    speaker_image: ""
    speaker_name: Ruchika Gupta
    speaker_position: ""
  - speaker_bio: ""
    speaker_company: Linaro
    speaker_image: ""
    speaker_name: Etienne Carrière
    speaker_position: ""
  - speaker_bio: ""
    speaker_company: Vaisala
    speaker_image: ""
    speaker_name: Vesa Jääskeläinen
    speaker_position: ""
  - speaker_bio: ""
    speaker_company: Linaro
    speaker_image: ""
    speaker_name: Victor Chong
    speaker_position: ""
---

Use of HSM’s in embedded/IoT products is not very common as it costs money but there is a need to provide secure storage for private keys in HSM. These may be needed for managing device identity, secure updates, TLS connections etc. OP-TEE can function as a HSM to provide secure storage and handle secrets. The PKCS#11 standard defines a platform-independent API which helps software to use, create, modify and delete cryptographic objects, without ever exposing those objects to the application’s memory. In this demo, we demonstrate how secrets can be generated and stored in OP-TEE based HSM using standard PKCS#11 interface. We also would demo the compatibility of the implementation with available PKCS#11 plugins/engines in openssl and openssh. Further, we would demo a few ways by which we test the implementation. Demo steps are available in this document -
[https://drive.google.com/file/d/1reMnNWEHv6yKK41uymSa-ilPbdA0ny5y/view?usp=sharing](https://drive.google.com/file/d/1reMnNWEHv6yKK41uymSa-ilPbdA0ny5y/view?usp=sharing)

[/resources/lvc21/lvc21-215/](/resources/lvc21/lvc21-215/)
