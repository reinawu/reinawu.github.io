$(document).ready(function () {
  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
  });
});



$( document ).ready(function() {
  console.log("I'm Ready");

$( ".header" ).click(function() {
  $( ".toggle" ).slideToggle( "slow" );
});

});



$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();
  } );

});


