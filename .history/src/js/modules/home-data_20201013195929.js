import $ from 'jquery';
window.jQuery = $;
window.$ = $;

if ($('.global-dropdown-solutions').length) {
    var a = 0;
  $(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
  });
};

function productsdropdown() {
  var scroll = $(window).scrollTop();
  let offsetProducts = $('#products').offset();
  //console.log(scroll);
    if (scroll >= offsetProducts.top + -300) {
    }
}
