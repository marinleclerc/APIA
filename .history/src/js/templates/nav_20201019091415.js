import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(window).scroll(function() {
  $('.main-nav').toggleClass('scrolled', $(this).scrollTop() > 52);
  $('.global-hero-section').toggleClass('scrolled-fixed', $(this).scrollTop() > 52);
  $('.global-two-cols-carrousel ').toggleClass('scrolled-fixed', $(this).scrollTop() > 52);
});
 