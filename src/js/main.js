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

if (window.location.href.indexOf('cas-clients') > -1 || window.location.href.indexOf('case-studies') > -1) {
  console.log("new push")
  const links = document.getElementsByTagName('a');
  const regex = /Cas clients|Case[\s\-]studies/i;
  for (let i = 0; i < links.length; i++) {
    if (regex.test(links[i].textContent)) {
      links[i].classList.add('yellow-link');
    }
  }
}


/*  */


/* $("#search-bar").click(function(){
  $("#search-bar .form-control").addClass("expand");
}); */ 