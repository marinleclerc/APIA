import $ from 'jquery';
window.jQuery = $;
window.$ = $;
const { list } = require('postcss');

if ($('#fixed_el').length & window.matchMedia('(min-width: 767px)').matches) {
  $(function() {
    var fixedElement = $('#fixed_el');
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      var $innerFixedEl = $('.inner_fixed_el');

      var $footerOffsetTop = $('.global-content-three-cols').offset().top - 90;

      var $targetElementTop = $('.target_scroll').offset().top;

      var $innerFixedElHeight = $innerFixedEl.innerHeight();

      var $endFixedPos = $footerOffsetTop - $innerFixedElHeight;

      var $list = $('.container__content--list');

      var $listHeight = $list.innerHeight();

      var $transformValue = $listHeight - $innerFixedElHeight;

      var $value = 'translate3d(0px, ' + $transformValue + 'px, 0px)';

      if (scroll >= $targetElementTop - 90 && scroll < $endFixedPos - 90) {
        console.log('first step');
        fixedElement.css({ position: 'fixed', transform: 'none', top: '90px', width: '570px' });
        $list.addClass('offset-md-6');
      } else if (scroll >= $endFixedPos - 180) {
        console.log('seconde step');
        fixedElement.css({ position: 'initial', transform: $value });
        $list.removeClass('offset-md-6');
      } else {
        console.log('third step');
        fixedElement.css({ position: 'initial', transform: 'translate3d(0px, 0px, 0px)', top: '0', width: 'auto' });
        $list.removeClass('offset-md-6');
      }
    });
  });
}
