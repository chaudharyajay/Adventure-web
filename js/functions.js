$(document).ready(function(){
  // To scroll top
  $(".btn-scroll").on('click', function() {
      $('html, body').animate({
          scrollTop: $("#midTop").offset().top
      }, 800);
  });
});
