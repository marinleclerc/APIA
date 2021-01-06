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
