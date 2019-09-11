---
title: Search
permalink: /search/
layout: flow
jumbotron:
    title: Search
    description: >
        Search connect.linaro.org for a specific page/resource.
    background-image: /assets/images/content/bkk19-group-photo.jpg
description: |-
    Search connect.linaro.org for a sd.
css-package: search
---
<script>
  (function() {
    var fess = document.createElement('script');
    fess.type = 'text/javascript';
    fess.async = true;
    // fess.src is URL for FSS JS
    fess.src = '/assets/js/vendor/fess-ss-11.4.min.js';
    fess.charset = 'utf-8';
    fess.setAttribute('id', 'fess-ss');
    fess.setAttribute('enable-order', 'true');
    fess.setAttribute('link-target', '\_self');
    fess.setAttribute('enable-labels', 'true');
    // fess-url is URL for Fess Server
    fess.setAttribute('fess-url', 'https://search.linaro.org/json/');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fess, s);
  })();
</script>

<fess:search></fess:search>
