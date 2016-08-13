localStorage.clear();
var clickCount = 0;

function iFrameSliceCalendar(string){
  var newString = string.slice(13,-85);
  return newString;
}
function iFrameSliceYoutube(string){
  var newString = string.slice(38,-43);
  return newString;
}

$("#loginSubmit").click(function(){
  var username = $(".usernameText").val();
  sessionStorage.setItem("username", username);
});

$( "#headerSubmit" ).click(function() {
  var headerText = $(".headerText").val();
  var subheaderText = $(".subheaderText").val();
  $( "#wireframe").append( $( "<h3 class='wireframeHeader'>" + headerText + "</h3>"));
  $( "#wireframe").append( $( "<h5 class='wireframeHeader'>" + subheaderText + "</h5>"));

  clickCount++
    // Store all content into localStorage
  localStorage.setItem("headerName", headerText); 
  //this is the subheader
  localStorage.setItem("headerSubData", subheaderText);
  localStorage.setItem("headerPagePosition", clickCount);
  localStorage.setItem("headerDataType", "header");
    // Don't refresh the page!
  return false;
});

$( "#calendarSubmit" ).click(function() {
  var iframeCalendar = $(".iframeCalendar").val();
  var iframeCalendarSlice = iFrameSliceCalendar(iframeCalendar);
  $( "#wireframe").append( $( iframeCalendar));

  clickCount++
  // Store all content into localStorage
  localStorage.setItem("calendarName", "iframeCalendar")
  localStorage.setItem("calendarData", iframeCalendarSlice);
  localStorage.setItem("calendarPagePosition", clickCount);
  localStorage.setItem("calendarDataType", "href");
    // Don't refresh the page!
  return false;

});

$( "#mediaSubmit" ).click(function() {
  var youtubeLink = $(".youtubeLink").val();
  var youtubeLinkSlice = iFrameSliceYoutube(youtubeLink);
  $( "#wireframe").append( $(youtubeLink));

  clickCount++
  // Store all content into localStorage
  localStorage.setItem("youTubeName", "iframeYouTube")
  localStorage.setItem("youTubeData", youtubeLinkSlice);
  localStorage.setItem("youTubePagePosition", clickCount);
  localStorage.setItem("youTubeDataType", "href");
    // Don't refresh the page!
  return false;
});

$( "#textSubmit" ).click(function() {
    var wireframeText = ($("textarea#textarea1").val());
  $( "#wireframe").append( $('<p>' + wireframeText + '</p>'));

  clickCount++
  // Store all content into localStorage
  localStorage.setItem("textName", "text")
  localStorage.setItem("textData", wireframeText);
  localStorage.setItem("textPagePosition", clickCount);
  localStorage.setItem("textDataType", "href");
    // Don't refresh the page!
  return false;
});

$( "#photoSubmit" ).click(function() {
  $( "#wireframe").append( $( "<img src='../static/images/carousel.png' class='wireframePhoto'>"));
  return false;
});
