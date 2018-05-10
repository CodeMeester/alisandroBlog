$(document).ready(function(){

  // alert('hi');

      // Start of my method for the pop up method
  $("#loginLink").click(function( event ){
     event.preventDefault();
     $(".overlay").fadeToggle("fast");
});

$(".overlayLink").click(function(event){
  event.preventDefault();
  var action = $(this).attr('data-action');

  $("#loginTarget").load("ajax/" + action);

  $(".overlay").fadeToggle("fast");
});

$(".close").click(function(){
  $(".overlay").fadeToggle("fast");
});

$(document).keyup(function(e) {
  if(e.keyCode == 27 && $(".overlay").css("display") != "none" ) {
      event.preventDefault();
      $(".overlay").fadeToggle("fast");
  }
});
  // The end of the pop-up method


});
