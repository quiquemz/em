$(document).ready(function() {
  function openSidebar() {
    $('#sidebar').addClass('active');
    $('.overlay').fadeIn();
  }

  function closeSidebar() {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  }

  /*** Event Handlers ***/
  $('.open-sidebar-btn').on('click', () => openSidebar());
  $('.close-sidebar-btn, .overlay').on('click', () => closeSidebar());
});
