import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function() {
  $('.has-child.nav-first-lvl-link').click(function() {
    console.log('click');
    $('.has-child.nav-first-lvl-link').toggleClass('open');
    $('ul.hs-menu-children-wrapper').toggleClass('open');
    $('menu-sidebar').toggleClass('open');
  });
  $('.has-child.nav-first-lvl-link label').click(function() {
    console.log('click');
    $('.has-child.nav-first-lvl-link').toggleClass('open');
    $('ul.hs-menu-children-wrapper').toggleClass('open');
    $('menu-sidebar').toggleClass('open');
  });
});

window.addEventListener('scroll', function() {
  if ($('.open').length) {
    $('.has-child.nav-first-lvl-link').removeClass('open');
    $('ul.hs-menu-children-wrapper').removeClass('open');
    $('menu-sidebar').remove('open');
  }
});
