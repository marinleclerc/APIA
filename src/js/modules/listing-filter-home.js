var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');

jQueryBridget('isotope', Isotope, $);


var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});


var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});


var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});


var filters = {};

$('.filters').on('change', function(event) {
  var $select = $(event.target);

  var filterGroup = $select.attr('value-group');

  filters[filterGroup] = event.target.value;

  var filterValue = concatValues(filters);

  $grid.isotope({ filter: filterValue });
});

function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

$('#get-result').click(function() {
  $('.container-result').removeClass('hide');
  $('html,body').animate({
    scrollTop: $(window).scrollTop() + 300
});
  
});

$('#hide_results').click(function() {
  $('.container-result').addClass('hide');
});
  