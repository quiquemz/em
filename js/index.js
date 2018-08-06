$(document).ready(function() {

  $('.scroll-down-btn').click(function(e) {
    $('html, body').animate({
      scrollTop: $(".container-about").offset().top
    }, 1000);
  });
})