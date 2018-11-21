$(function() {
    function count($this){
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if(current !== $this.data('count')){
            setTimeout(function(){count($this);}, 1);
        }
    }        
  $("span.count-to-number").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
  });
});
// This global array stores the concatenated and sorted jsonp data
var allConnectResourcesData = [];
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var event_data_sources = [
    ""
];
// Stores the URLS for the JSON data file of each Connect
var connectJSONSources = [];
// Get the connects.json file then pa.titlerse and loop through each connect adding the jsonp script
function connects(connectsJSON){
    // Loop through the connects.json index JSON file.
    for(i=0;i<connectsJSON.length;i++){
        // Get the URL of the Connect Resources JSON file
        var jsonp_url = event_data_sources[0] + "/assets/json/" + connectsJSON[i].id.toLowerCase() + "/data.json?callback=connectResources";
        // Add the new array to the connectJSONSourcs Array
        connectJSONSources.push(jsonp_url);
        // Create a new script element and set the type and src
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = jsonp_url;
        // Append the new script element to the head.
        $("head").append(script);
    }
}
// This function takes the JSONP data for a specific conncet and concatenates the data.
function connectResources(connectJSON){
    // Check to see if this is the last source to be loaded in.
    if(counter == (connectJSONSources.length - 1)){
        // Concat the final data source to the master JSON array
        allConnectResourcesData = allConnectResourcesData.concat(connectJSON);
        // Sort the data by the date
        var sorted_data = allConnectResourcesData.sort(sort_by_date);
        // Add the resources to the HTML
        console.log(allConnectResourcesData);
        console.log(connectJSONSources);

        listResults(sorted_data);
        allJSONData = sorted_data;
        // Add the size of the results
        $('#size').html(sorted_data.length);
        // Run function on each keyup event triggered by the search input
    }
    else{
        allConnectResourcesData = allConnectResourcesData.concat(connectJSON);
        counter += 1;
    }
}
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0]; 
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// Fuzzy search function - this takes the JSON data and then lists results based on the search query from #search-query input.
function listResults(json_data) {
    // Define the underscore.js template settings.
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
    };  
    // Specify a new html _.template
    // Title, Summary, Tracks, Speakers, Video, Presentation, Event ID, Date Published, View Resource 
    var listItemTemplate = _.template('<tr class="fly">' + 
    '<td data-toggle="tooltip" data-container="body" data-placement="top" title="{{resource_title_full}}">{{resource_title}}</td>' +
    '<td data-toggle="tooltip" data-container="body" data-placement="top" title="{{resource_summary_full}}">{{resource_summary}}</td>' +
    '<td>{{resource_tracks}}</td>' +
    '<td>{{resource_video}}</td>' +
    '<td>{{resource_presentation}}</td>' + 
    '<td>{{resource_event}}</td>' +
    '<td>{{resource_date_published}}</td>' +
    '<td><a href="{{resource_url}}">View Resource</a></td>' +
    '</tr>');
    // Get the search query val which we are searching for.
    var search = $('#search-query').val();
    // Fuzzy search options
    var options = {
        pre: "<b>", post: "</b>"
      // Each element in the data is an object, not a string. We can pass in a
      // function that is called on each element in the array to extract the
      // string to fuzzy search against. In this case, element.dir
      , extract: function(entry) {
            return entry.title + '::' + entry.summary;
        }
    };
    // Filter!
    var filtered = fuzzy.filter(search, json_data, options);
    // Map the results to the html we want generated
    var results = filtered.map(function(result){

        // Split the search items
        // These are the items that are used to match search queries against
        var items = result.string.split('::');

        // Set the resource vars to None by default
        var resource_video = "None";
        var resource_presentation = "None";
        // Get the presentation resource link if available
        if(result.original.amazon_s3_presentation_url){
            resource_presentation = result.original.amazon_s3_presentation_url;
        }
        else if(result.original.slideshare_presentation_url){
            resource_presentation = result.original.slideshare_presentation_url;
        }
        // Get the video resource link if available
        if(result.original.youtube_video_url){
            resource_video = result.original.youtube_video_url;
        }
        else if(result.original.amazon_s3_video_url){
            resource_video = result.original.amazon_s3_video_url;
        }

        // Get the session tracks
        var session_tracks = "";
        if(result.original.tracks !== ""){
            session_tracks = result.original.tracks;
        }
        else{
            session_tracks  = "None";
        }
        // Get the resource speakers
        var resource_speakers = "None";
        // Check to see if the speakers property exists
        if(result.original.speakers){
            // Fetch all speakers
            for(i=0;i<result.original.speakers.length;i++){
                resource_speakers = resource_speakers + result.original.speakers[i].name + " ";
            }
        }
        var trimmed_title = items[0].substring(0, 30);
        var trimmed_summary = items[1].substring(0, 40);
        // Title, Summary, Tracks, Speakers, Video, Presentation, Event ID, Date Published, View Resource 
        return listItemTemplate({
         resource_url: result.original.url
        , resource_title: trimmed_title
        , resource_summary: trimmed_summary
        , resource_title_full: items[0]
        , resource_summary_full: items[1]
        , resource_tracks: session_tracks
        , resource_speakers: resource_speakers
        , resource_presentation: resource_presentation
        , resource_video: resource_video
        , resource_event: result.original.event_id
        , resource_date_published: extractDateString(result.original.date_published)
        });
    });
    // Append results to the results html container
    $('#result_size').html(filtered.length);
    $('#results').html(results.join(''));
}
// // Process all JSON, get the latest news and blog posts and add to the list.
// function addConnectResources(results_data, number_of_items){
//     $('#result_size').html(results_data.length);
//     var tableRow  = '';
//     for(var i=0;i<number_of_items;i++){
//         resource = results_data[i];
//         var author = resource.author;
//         if(author === "undefined" || author == ""){
//             author = resource.url.replace(/(^\w+:|^)\/\//, '');
//         }
//         // Show the first 10 items and let the rest appear on scroll.
//         if(number_of_items > 10 && i < 10){
//             tableRow += '<tr>';
//         }
//         else{
//             tableRow += '<tr class="fly">';
//         }
//         // Get trimmed versions of resource title/summary
//         var trimmed_title = resource.title.substring(0, 30);
//         var trimmed_summary = resource.summary.substring(0, 40);
//         // Set the resource vars to None by default
//         var resource_video = "None";
//         var resource_presentation = "None";
//         // Get the presentation resource link if available
//         if(resource.amazon_s3_presentation_url){
//             resource_presentation = resource.amazon_s3_presentation_url;
//         }
//         else if(resource.slideshare_presentation_url){
//             resource_presentation = resource.slideshare_presentation_url;
//         }
//         // Get the video resource link if available
//         if(resource.youtube_video_url){
//             resource_video = resource.youtube_video_url;
//         }
//         else if(resource.amazon_s3_video_url){
//             resource_video = resource.amazon_s3_video_url;
//         }
//         // Get the session tracks
//         var resource_tracks = "";
//         if(resource.tracks !== ""){
//             resource_tracks = resource.tracks;
//         }
//         else{
//             resource_tracks  = "None";
//         }
//         // Get the resource speakers
//         var resource_speakers = "None";
//         // Check to see if the speakers property exists
//         if(resource.speakers !== ""){
//             // Fetch all speakers
//             for(n=0;n<resource.speakers.length;n++){
//                 resource_speakers = resource_speakers + resource.speakers[n].name + " ";
//             }
//         }
//         tableRow += '<td data-toggle="tooltip" data-container="body" data-placement="top" title="'+ resource.title +'">' + trimmed_title + '</td>';
//         tableRow += '<td data-toggle="tooltip" data-container="body" data-placement="top" title="'+ resource.summary +'">' + trimmed_summary + '</td>';
//         tableRow += '<td>'+ resource_tracks +'</td>';
//         tableRow += '<td>'+ resource_video +'</td>';
//         tableRow += '<td>'+ resource_presentation +'</td>';
//         tableRow += '<td>'+ resource.event_id +'</td>';
//         tableRow += '<td>' + extractDateString(resource.date_published) + '</td>';
//         tableRow += '<td><a href="' + resource.url + '">View Resource</a></td>';
//         tableRow += '</tr>';
//     }
//     $("#results").html(tableRow);
// }
// Delay function - used to detect when the user has stopped typing.
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#results").length > 0) {
        // Get the JSONP url of the main connects.json file.
        var jsonp_url = event_data_sources[0] + "/assets/json/connects.json?callback=connects";
        // Add the JSONP to a script element
        // Create a new script element and set the type and src
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = jsonp_url;
        // Append the new script element to the head.
        $("head").append(script);
        // Detect when the user has stopped typing then show the results.
        $('#search-query').keyup(function() {
            delay(function(){
                listResults(allConnectResourcesData);
            }, 1000 );
        });
        // Enable Bootstrap tooltips for displaying details of resources
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ container: 'body'});
        });
    }
    else{
        console.log("Not defined!");
    }    
});