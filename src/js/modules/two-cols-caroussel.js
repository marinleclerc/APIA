var $ = require('jquery');

var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');
require('flickity-as-nav-for');
require('flickity-fullscreen');

Flickity.setJQuery($);
jQueryBridget('flickity', Flickity, $);





$('.carousel-main').flickity({
  pageDots: false,
  prevNextButtons: true,
  fullscreen: true,
  wrapAround: true,
  on: {
    fullscreenChange: function () {
      console.log('Flickity changed');
      $('.carousel-main').flickity('resize');
      $('.carousel-nav').flickity('resize');

    }
  }
});

$('.carousel-nav').flickity({
  asNavFor: '.carousel-main',
  contain: true,
  pageDots: false,
  wrapAround: true,
  on: {
    fullscreenChange: function () {
      $('.carousel-main').flickity('resize');
      $('.carousel-nav').flickity('resize');
    }
  }
});
