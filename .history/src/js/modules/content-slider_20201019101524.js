import $ from 'jquery';
window.jQuery = $;
window.$ = $;
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

Flickity.setJQuery($);
jQueryBridget('flickity', Flickity, $);

if ($('.global-content-slider').length) {

    //
  //   Variables
  //
  //////////////////////////////////////////////////////////////////////

  // Play with this value to change the speed
  let tickerSpeed = 1.2;

  let flickity = null;
  let isPaused = false;
  const slideshowEl = document.querySelector('.carousel');

    //
  //   Functions
  //
  //////////////////////////////////////////////////////////////////////

  const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

    //
  //   Create Flickity
  //
  //////////////////////////////////////////////////////////////////////

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    watchCSS: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  });
  flickity.x = 0;

  //
  //   Add Event Listeners
  //
  //////////////////////////////////////////////////////////////////////

  slideshowEl.addEventListener('mouseenter', pause, false);
  slideshowEl.addEventListener('focusin', pause, false);
  slideshowEl.addEventListener('mouseleave', play, false);
  slideshowEl.addEventListener('focusout', play, false);

  flickity.on('dragStart', () => {
    isPaused = true;
  });

  //
  //   Start Ticker
  //
  //////////////////////////////////////////////////////////////////////

  update();


  /* $(function() {
    $('.carousel').flickity({
      groupCells: true,
      pageDots: false,
      watchCSS: true,
      wrapAround: true,
      groupCells: 1,
      autoPlay: true,
    });
  }); */
}
 