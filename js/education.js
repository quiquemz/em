$(document).ready(function() {

  $('#education').on('click', '.folder-overlay', function(e) {
    $('.container-about').css({
      'overflow': 'scroll'
    });

    $(this).addClass('straight');
    $(this).removeClass('folder-overlay');

    $('#education').find('.folder-title-left').addClass('folder-title-left-center');
    $('#education').find('.folder-content').removeClass('folder-content-hidden');

    $('#projects').find('.folder').addClass('folder-hidden');
    $('#experience').find('.folder').addClass('folder-hidden');

    setTimeout(function() {
      $("#experience").hide();
      $("#projects").hide();
    }, 100);

    $('#footer').fadeOut(160);
  });

  $('#education').on('click', '.close-folder', function(e) {
    $('.container-about').css({
      'overflow': 'hidden'
    });

    $('#education').find('.folder').removeClass('straight');
    $('#education').find('.folder').addClass('folder-overlay');
    $('#education').find('.folder-content').addClass('folder-content-hidden');
    $('#education').find('.folder-title-left').removeClass('folder-title-left-center');

    $("#experience").show()
    $("#projects").show()

    $('#experience').find('.folder').removeClass('folder-hidden');
    $('#projects').find('.folder').removeClass('folder-hidden');

    $('#footer').fadeIn(160);
  });
});