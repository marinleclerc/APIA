import $ from 'jquery';
window.jQuery = $;
window.$ = $;

if ($('.global-dropdown-solutions').length) {
  $(window).scroll(function () {
    productsdropdown();
    solutionsdropdown();
  });
};

function productsdropdown() {
  var scroll = $(window).scrollTop();
  let offsetProducts = $('#products').offset();
  //console.log(scroll);
    if (scroll >= offsetProducts.top + -300) {
    }
}
