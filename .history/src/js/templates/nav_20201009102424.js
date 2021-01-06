import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(window).scroll(function() {
  $('.main-nav').toggleClass('scrolled', $(this).scrollTop() > 52);
  $('.global-hero-section').toggleClass('scrolled-fixed', $(this).scrollTop() > 52);
  $('.global-two-cols-carrousel ').toggleClass('scrolled-fixed', $(this).scrollTop() > 52);
  /*   if ($('.open').length) {
    $('.has-child.nav-first-lvl-link').removeClass('open');
    $('ul.hs-menu-children-wrapper').removeClass('open');
    $('menu-sidebar').remove('open');
  } */
});
 