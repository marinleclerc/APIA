import $ from 'jquery';
window.jQuery = $;
window.$ = $;

if ($('.global-dropdown-solutions').length) {
    var a = 0;
  $(window).scroll(function () {
    productsdropdown();
  });
};

function productsdropdown() {
  var scroll = $(window).scrollTop();
  let offsetProducts = $('#products').offset();
  //console.log(scroll);
    if (scroll >= offsetProducts.top + -300) {
    }
}
