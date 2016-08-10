$( "#headerSubmit" ).click(function() {
  var headerText = $(".headerText").val();
  var subheaderText = $(".subheaderText").val();
  $( "#wireframe").append( $( "<h3 class='wireframeHeader'>" + headerText + "</h3>"));
  $( "#wireframe").append( $( "<h5 class='wireframeHeader'>" + subheaderText + "</h5>"));
});

$( "#calendarSubmit" ).click(function() {
  var iframeCalendar = $(".iframeCalendar").val();
  $( "#wireframe").append( $( iframeCalendar));
});

$( "#mediaSubmit" ).click(function() {
  var youtubeLink = $(".youtubeLink").val();
  $( "#wireframe").append( $(youtubeLink));
});

$( "#textSubmit" ).click(function() {
    var wireframeText = ($("textarea#textarea1").val());
    console.log(wireframeText);
  $( "#wireframe").append( $('<p>' + wireframeText + '</p>'));
});

$( "#photoSubmit" ).click(function() {
  $( "#wireframe").append( $( "<img src='../static/images/carousel.png' class='wireframePhoto'>"));
});

// $(document).ready(function(){
//       $('.carousel').carousel();
// });
