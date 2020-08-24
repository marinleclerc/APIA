/**
 * Main.js
 *
 * @since 1.0.0
 */
import 'bootstrap';

/* Import Plugin */
var $ = require('jquery');
var Isotope = require('isotope-layout');
var Flickity = require('flickity');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');

import LazyLoad from 'vanilla-lazyload';
const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

// Scroll Library Animation
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

console.log('test');

$(document).ready(function() {
  console.log('ready!');
});

/* if ($('.carousel').length > 0) {
  var flkty = new Flickity('.carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: 3,
    pageDots: false,
    watchCSS: true,
    imagesLoaded: true,
    lazyLoad: true,
    prevNextButtons: true,
  });
} */
