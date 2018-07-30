$(window).on("load",function(){
    var url = "https://eventbrite.co.uk/tickets-external?eid=45251216607&amp;ref=etckt";    
    $("#eventbrite-iframe").attr("src",url);
    
    $("#eventbrite-iframe").on("load",function(){
        $(this).removeClass("hidden-iframe");
        $("#placeholder-skeleton").hide();
        $(this).addClass("visible-iframe");

    });
});