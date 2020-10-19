var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);

// init Isotope
var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});

// init Isotope
var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});

// init Isotope
var $grid = $('.grid-home').isotope({
  itemSelector: '.solution-unit-home',
  layoutMode: 'vertical',
});

// store filter for each group
var filters = {};

$('.filters').on('change', function(event) {
  var $select = $(event.target);
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  filters[filterGroup] = event.target.value;
  // combine filters
  var filterValue = concatValues(filters);
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// flatten object by concatting values
function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

$('#get-result').click(function() {
  /* $('#more-solution').fadeOut(function() {
    $('#more-solution')
      .text(
        $('#more-solution').text() == 'Afficher moins de solutions'
          ? 'Afficher plus de solutions'
          : 'Afficher moins de solutions',
      )
      .fadeIn();
  }); */
  $('.container-result').removeClass('hide');
});

$('#hide_results').click(function() {
  $('.container-result').addClass('hide');
});
