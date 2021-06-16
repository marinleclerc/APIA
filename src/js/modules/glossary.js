var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);

// init Isotope
var $grid = $('.alphabet').isotope({
    itemSelector: '.card',
  layoutMode: 'vertical'
  });
  // bind filter on select change
  $('.filters-select').on( 'change', function() {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });



  // external js: isotope.pkgd.js
  var $rows = $('.alpha').isotope({
    itemSelector: '.letter-row',
    layoutMode: 'vertical'
  });

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $rows.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


var qsRegex;

var $gridTest = $('.alp').isotope({
  itemSelector: '.card-test',
layoutMode: 'vertical',
filter: function() {
  return qsRegex ? $(this).find(".name").text().match( qsRegex ) : true;
}
});

// quick search regex

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $gridTest.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}






// Select all tabs
$('.nav-tabs a').click(function(){
    $(this).tab('show');
})
  