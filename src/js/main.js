/**
 * Main.js
 *
 * @since 1.0.0 
 */
import 'bootstrap';
import 'jquery.toc';

var Sticky = require('sticky-js');
var Isotope = require('isotope-layout');

var sticky = new Sticky('.sticky');

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