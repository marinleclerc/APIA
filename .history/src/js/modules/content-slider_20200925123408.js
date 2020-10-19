import $ from 'jquery';
window.jQuery = $;
window.$ = $;
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

Flickity.setJQuery($);
jQueryBridget('flickity', Flickity, $);

if ($('.global-content-slider').length) {
  $(function() {
    $('.carousel').flickity({
      groupCells: true,
      pageDots: false,
      watchCSS: true,
      wrapAround: true,
      groupCells: 1,
      autoPlay: true,
    });
  });
}
