/**
 * Main.js
 *
 * @since 1.0.0 
 */
import 'bootstrap';
import 'jquery.toc';
import AOS from 'aos';

var Isotope = require('isotope-layout');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');
var Isotope = require('isotope-layout');

var sticky = new Sticky('.sticky');

import LazyLoad from 'vanilla-lazyload';
const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

AOS.init();

$('.menu-button').click(function () {
  $('body').toggleClass('no-scroll');
});

if ($("#toc").length > 0) {
  $("#toc").toc({ content: "div.post-content", headings: "h2,h3" });
}

if ($("#toc2").length > 0) {
  $("#toc2").toc({ content: "div.post-content", headings: "h2" });
}


/* $("#search-bar").click(function(){
  $("#search-bar .form-control").addClass("expand");
}); */ 