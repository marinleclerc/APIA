/**
 * Main.js
 *
 * @since 1.0.0
 */
import 'bootstrap';


var $ = require('jquery');
var Isotope = require('isotope-layout');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');
var Isotope = require('isotope-layout');

var sticky = new Sticky('.sticky');

import LazyLoad from 'vanilla-lazyload';
const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});


import AOS from 'aos';

AOS.init();

$('.menu-button').click(function() {
  $('body').toggleClass('no-scroll');
});


$("#search-bar").click(function(){
  $("#search-bar form-control").addClass("intro");
});