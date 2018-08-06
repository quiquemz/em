$(document).ready(function() {

  $('#projects').on('click', '.folder-overlay', function(e) {
    $('.container-about').css({
      'overflow': 'scroll'
    });

    $(this).addClass('straight');
    $(this).removeClass('folder-overlay');

    $('#projects').find('.folder-title-left').addClass('folder-title-left-center');
    $('#projects').find('.folder-content').removeClass('folder-content-hidden');

    $('#education').find('.folder').addClass('folder-hidden');
    $('#experience').find('.folder').addClass('folder-hidden');

    // HACK: Find less hacky way
    setTimeout(function() {
      $("#education").hide();
      $("#experience").hide();
    }, 100);

    $('#footer').fadeOut(160);
  });

  $('#projects').on('click', '.close-folder', function(e) {
    $('.container-about').css({
      'overflow': 'hidden'
    });

    $('#projects').find('.folder').removeClass('straight');
    $('#projects').find('.folder').addClass('folder-overlay');
    $('#projects').find('.folder-content').addClass('folder-content-hidden');
    $('#projects').find('.folder-title-left').removeClass('folder-title-left-center');

    $("#education").show()
    $("#experience").show()

    $('#education').find('.folder').removeClass('folder-hidden');
    $('#experience').find('.folder').removeClass('folder-hidden');

    $('#footer').fadeIn(160);
  });
})