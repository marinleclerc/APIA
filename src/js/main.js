/**
 * Main.js
 *
 * @since 1.0.0
 */
import 'bootstrap';

/*Import Plugin
var Isotope = require('isotope-layout');
var Flickity = require('flickity');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');
*/


import LazyLoad from 'vanilla-lazyload';
const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});





// Scroll Library Animation
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();