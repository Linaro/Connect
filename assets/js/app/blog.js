$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#resourceSearch').keyup(function(){
  // $('#results').html('');
  // $('#state').val('');
  var searchField = $('#resourceSearch').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('../../posts.json', function(data) {
   $.each(data, function(key, value){
    if (value.title.search(expression) != -1 || value.content.search(expression) != -1)
    {
        console.log(value.title);
     // $('#results').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
    }
   });   
  });
 });
});

// 
// $('#resourceSearch').keyup(function(){
//     var searchField = $(this).val();
// 
//     if(searchField === '')  {
//         $('#results').html('');
//         return;
//     }
//     else {
//         var resourceData;
// 
//         $.getJSON("../../posts.json", function(json){
//             resourceData = json;
//         });
// 
//         var regex = new RegExp(searchField, "i");
// 
//         var output = '<div class="row">';
// 
//         var count = 1;
// 
//         $.each(resourceData, function(key, val){
// 
//             if ((val.title.search(regex) != -1) || (val.content.search(regex) != -1)) {
//                 console.log(val.title);
//                 output += '<div class="col-md-6 well">';
//                 output += '<div class="col-md-3">'+ val.title +'</div>';
//                 output += '<div class="col-md-7">';
//                 output += '<h5>' + val.title + '</h5>';
//                 output += '<p>' + val.url + '</p>'
//                 output += '</div>';
//                 output += '</div>';
//                 if(count % 2 == 0){
//                     output += '</div><div class="row">'
//                 }
//                 count++;
//                 }
//         });
// 
//         output += '</div>';
// 
//         $('#results').html(output);
//         console.log(output);
//     }    
// });