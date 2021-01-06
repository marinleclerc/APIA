import $ from 'jquery';
window.jQuery = $;
window.$ = $;

/* if ($('#products').length) {
  $(window).on('scroll', function() {
    if ($('#products .accordion .card:first-child').is(':visible')) {
      console.log('yes!');
    }
  });
} */

/* $.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('#products .accordion .card:first-child').isInViewport()) {
    $('#products .accordion .card:first-child .card-toggle').attr('aria-expanded', 'true');
    $('#products .accordion .card:first-child .collapse').addClass('show');
  } else {
  }
}); */

jQuery(document).ready(function() {
  $('#solutions img.solutioncontent')
    .not(':first')
    .hide();
  $('#solutions .global-dropdown-solutions img')
    .not(':first')
    .hide();
  $('#solutions a.apia_link').bind('mouseover', function() {
    $('#solutions img.solutioncontent').hide();
    $('#solutions #' + $(this).attr('id') + 'content').show();
  });

  $('#products img.solutioncontent')
    .not(':first')
    .hide();
  $('#products .global-dropdown-solutions img')
    .not(':first')
    .hide();
  $('#products a.apia_link').bind('mouseover', function() {
    $('#products img.solutioncontent').hide();
    $('#products #' + $(this).attr('id') + 'content').show();
  });
});

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
    //console.log('a');
    //$('#products').addClass('test');
    $('#products .container__content--dropdown .card.first .card-toggle.collapsed').attr('aria-expanded', 'true');
    $('#products_1.test_class').removeClass('collapse');
    $('#products_1.test_class').addClass('collapsing');

    var element = $('#products_1.test_class');
    let heightEl = $('#products_1.test_class .dropdown-body-list').height() + 60;

    setTimeout(function() {
      element.removeClass('collapsing');
      element.css('height', heightEl + 'px');
    }, 300);

    setTimeout(function() {
      element.addClass('collapse show');
    }, 300);

    $('#products_1.test_class')
      .delay(2800)
      .removeClass('test_class');
    $('#products .container__content--dropdown .card.first')
      .delay(3800)
      .removeClass('first');
  } else {
  }
}

function solutionsdropdown() {
  var scroll = $(window).scrollTop();
  let offsetSolutions = $('#solutions').offset();
  //console.log(scroll);
  if (scroll >= offsetSolutions.top + -300) {
    //console.log('a');
    //$('#products').addClass('test');
    $('#solutions .container__content--dropdown .card.first .card-toggle.collapsed').attr('aria-expanded', 'true');
    $('#solutions_1.test_class').removeClass('collapse');
    $('#solutions_1.test_class').addClass('collapsing');

    var element = $('#solutions_1.test_class');
    let heightEl = $('#solutions_1.test_class .dropdown-body-list').height() + 60;

    setTimeout(function() {
      element.removeClass('collapsing');
      element.css('height', heightEl + 'px');
    }, 300);

    setTimeout(function() {
      element.addClass('collapse show');
    }, 300);

    $('#solutions_1.test_class')
      .delay(2800)
      .removeClass('test_class');
    $('#solutions .container__content--dropdown .card.first')
      .delay(3800)
      .removeClass('first');
  } else {
  }
}
