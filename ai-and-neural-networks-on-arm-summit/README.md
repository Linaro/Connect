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

This AI and Neural Networks on Arm Summit has ended! Below is a table of resources from the event:

|Speaker|Company|ID|Title|
|-------|-------|--|-----|
|Chris Benson|AI Strategist|[YVR18- 300K2](https://youtu.be/bYSwYkmQJVo?t=1s)|Keynote: Artificial Intelligence Strategy: Digital Transformation Through Deep Learning|
|Jem Davies|Arm|[YVR18-300K1](https://youtu.be/bYSwYkmQJVo?t=31m15s)|Keynote: Enabling Machine Learning to Explode with Open Standards and Collaboration|
|Robert Elliott|Arm|[YVR18-329](https://www.youtube.com/watch?v=te-rJ5BVrtw)|Arm NN intro|
|Pete Warden|Google Tensorflow|[YVR18-338](https://www.youtube.com/watch?v=xYtw7fN2C88)|Tensorflow for Arm devices|
|Mark Charlebois|Qualcomm|[YVR18-330](https://www.youtube.com/watch?v=MgyfmaYhtLU)|Qualcomm Snapdragon AI Software|
|Thom Lane|Amazon AWS AI|[YVR18-331](https://www.youtube.com/watch?v=BDWlIew5pfo)|ONNX and Edge Deployments|
|Jammy Zhou|Linaro|[YVR18-332](https://www.youtube.com/watch?v=daYr4tpncFo)|TVM compiler stack and ONNX support|
|Luba Tang|Skymizer|[YVR18-333](https://www.youtube.com/watch?v=BDWlIew5pfo)|ONNC (Open Neural Network Compiler) for Arm Cortex-M|
|Shouyong Liu|Thundersoft|[YVR18-334](https://www.youtube.com/watch?v=CoBhUS9SL4U)|AI Alive: On Device and In-App|
|Ralph Wittig|Xilinx|[YVR18-335](https://www.youtube.com/watch?v=FimBHlcfhxA)|Xilinx: AI on FPGA and ACAP Roadmap|
|Andrea Gallo and others|Linaro, Arm, Qualcomm, Skymizer, Xilinx|[YVR18-337](https://www.youtube.com/watch?v=igH_OMSeIPI)|BoF: JIT vs offline compilers vs deploying at the Edge|


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