---
title: AI and Neural Networks on Arm Summit
permalink: /ai-neural-networks-arm-summit/
layout: empty
css-package: ai-summit
---
<div class="container-fluid">
<div class="row banner-row" style="background-image: url(/assets/images/content/AINNBanner.png);">
<div class="container" id="summit-container">
<h1>AI and Neural Networks on Arm Summit</h1>
<p>
At <span class="linaro-green">Linaro Connect Vancouver 2018</span><br>
<strong>Wednesday 19 September</strong> - Hyatt Regency Vancouver, <br>
655 Burrard Street, V6C 2R7<br>
<strong>$45 to attend the summit only</strong>
</p>
</div>
</div>
<div class="row content">
<div class="container">
<div class="col-xs-12" markdown="1">

The options for neural network acceleration in Arm-based platforms provide an unprecedented opportunity for new intelligent devices. However, it also raises the risk of fragmentation and duplication of effort when varied frameworks and libraries will be required to support a multitude of accelerators.

The growing amount of data captured by sensors and connected devices coupled with real time constraints and the cost to move large data sets from the edge to the cloud intensifies the need to manage and execute Big Data analytics and Machine Learning (ML) inference engines at the edge.

### Why attend this event?

The AI and Neural Networks on Arm Summit is intended to bring the software and silicon industries together to educate and collaborate, in order to accelerate development of these fascinating new technologies, while also mitigating the fragmentation and duplication of effort to support the many AI/NN frameworks spanning the range of silicon vendor offerings.

### What will we talk about?

There will be sessions on the latest AI technologies available in edge and consumer devices from the Arm ecosystem and how these accelerate deep learning applications leveraging the most widely adopted AI frameworks:

- Inference on NPU, GPU, DSP and CPU
- AI/ML frameworks and NN formats
- NN HAL plug-in frameworks

{% include image.html name="ai-summit-schedule.png" alt="AI Summit Schedule YVR18"%}

**For End Users:** Thought-leaders and managers attending the event will gain a deeper understanding of the issues and opportunities in AI/NN on Arm. Engineers will gain insight and learn how to collaborate in the open source community within their area of expertise, how to evaluate the performance and accelerate multiple NN frameworks without modifying for each new IP, whether targeting edge computing gateways, smart devices or simple microcontrollers

**For Linaro Members and Partners:** This workshop is a call to action to join forces and collaborate around a common framework PI, an optimized inference engine and flexible plug-in architecture to integrate each NN solution and use members’ internal resources to focus on product competitive advantage.

**Arm AI NN Summit**

- Cost  $45
- Sponsorship options available, please contact kristine.dill@linaro.org
  
</div>
<div class="col-sm-6">
<script type="text/javascript">
function defer(method) {
if (window.jQuery) {
    method();
} else {
    setTimeout(function() { defer(method) }, 50);
}
}
defer(function(){
$(window).on("load",function(){
    var url = "https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt";    
    $("#eventbrite-iframe").attr("src",url);
    $("#eventbrite-iframe").on("load",function(){
        $(this).removeClass("hidden-iframe");
        $("#placeholder-skeleton").hide();
        $(this).addClass("visible-iframe");
    });
});       
});
</script>
<div id="eventbrite-skeleton">
<img id="placeholder-skeleton" class="img-responsive lazyload" data-src="/assets/images/content/eventbrite-skeleton.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
<iframe class="hidden-iframe" data-src="https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt" width="100%" height="500" frameborder="0" marginwidth="5" marginheight="5" scrolling="auto" id="eventbrite-iframe"></iframe>
</div>
</div>
<div class="col-sm-6">

<div class="panel panel-primary" class="blog-sidebar">
<div class="panel-heading">
<h3 class="panel-title">AI/ML Resources from HKG18</h3>
</div>
<div class="panel-body">
{% assign posts = site.categories["hkg18"]  %}
{% for post in posts %}
{% if post.session_track contains 'AI/ML' %}
<a href="{{post.url}}">
<div class="row featured_blog_post">
<div class="col-xs-12 ">
{{post.title | truncate: 40}}
</div>
</div>
</a>
{% endif %}
{% endfor %}
</div>
</div>

</div>
</div>
</div>
</div>