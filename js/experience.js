$(document).ready(function() {

  $('#experience').on('click', '.folder-overlay', function(e) {
    $('.container-about').css({
      'overflow': 'scroll'
    });

    $(this).addClass('straight');
    $(this).removeClass('folder-overlay');

    $('#experience').find('.folder-title-right').addClass('folder-title-right-center');
    $('#experience').find('.folder-content').removeClass('folder-content-hidden');

    $('#education').find('.folder').addClass('folder-hidden');
    $('#projects').find('.folder').addClass('folder-hidden');

    setTimeout(function() {
      $("#education").hide()
      $("#projects").hide()
    }, 100);

    $('#footer').fadeOut(160);
  });

  $('#experience').on('click', '.close-folder', function(e) {
    $('.container-about').css({
      'overflow': 'hidden'
    });

    $('#experience').find('.folder').removeClass('straight');
    $('#experience').find('.folder').addClass('folder-overlay');
    $('#experience').find('.folder-content').addClass('folder-content-hidden');
    $('#experience').find('.folder-title-right').removeClass('folder-title-right-center');

    $("#education").show()
    $("#projects").show()

    $('#education').find('.folder').removeClass('folder-hidden');
    $('#projects').find('.folder').removeClass('folder-hidden');

    $('#footer').fadeIn(160);
  });
});