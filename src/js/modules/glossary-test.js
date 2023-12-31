// external js: isotope.pkgd.js
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);


if ($(".glossary").length > 0) {

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
    if ($(this).hasClass("is-checked")) {
      $(this).removeClass('is-checked');
      let letter = $(this).text();
      $(this).attr("data-filter", "." + letter);
    } else {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).attr("data-filter", "");
      $(this).addClass('is-checked');
    }
  });
});

$('.glossary .card .nav-item a').on('click', function(){
  
  var index = $(this).data("index");
  console.log(index);

  var card_father = $(this).closest('.card').find('p.name');

  card_father.each(function(){
    index_title = $(this).data('index');

    if(index_title == index){
      
      if($(this).hasClass('clos')){
        $(this).removeClass('clos');
      } else{
        
      }

    } else{
      
      if($(this).hasClass('clos')){

      } else{
        $(this).addClass('clos');
      }

    }

  })

})


var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.alphabet').isotope({
  itemSelector: '.card',
   filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },
});

// store filter for each group
$('.filters-select').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value');

  // set filter for group
  buttonFilters[ filterGroup ] = event.target.value;
  // combine filters
  buttonFilter = concatValues( buttonFilters );
  console.log(buttonFilter);

  console.log("Maxime bis : ", buttonFilter);
  // set filter for Isotope
  $rows.isotope({ filter: buttonFilter });

});

/* $('.card').each(function(index){
  var glossary_links = $(this).find('.glossary-link');
  
  glossary_links.each(function(index){
    $(this).on('click', function(){
      glossary_links.removeClass('active');
      $(this).addClass('active');
    })
  })

}) */

$('.quicksearch').on('input', function(e){
  
  var input = $(this);
  var val = input.val();

/*   console.log("Lettre maxime : ", val);

  $(".letter-row").each(function (index){
    $(this).children('.card').each(function (index){
      var legend = $(this).children('.tab-pane').text();
      console.log(legend);
    });
  }) */

  $('.card .nav li:first-child p.name:first-child').each(function(index){
    
    var text = $(this).text().toUpperCase();
    var father = $(this).closest('.card');

    if(text.includes(val.toUpperCase())){
      father.css('display', 'block');
    } else{
      father.css('display', 'none');
    }

  });

  $('.letter-row').each(function(index){
    
    var visible = 'no';
    var cards = $(this).find('.card');

    for(var i = 0; i < cards.length; i++){

      if(cards[i].style.display == 'block'){
        visible = 'yes'
      }

    }

    if(visible == 'no'){
      $(this).css('display', 'none');
    } else {
      $(this).css('display', 'block');
    }

  })

})

// flatten object by concatting values
/* function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
} */

/* var $quicksearch = $('.quicksearch').keyup( debounce( function() {

  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  console.log(qsRegex);

  $(".letter-row").each(function (index) {
    console.log("// ----- Lettre ----- //");
    console.log("Nombre de card cachés : ", $(this).children('.card:hidden').length);
    console.log("Nombre de card : ", $(this).children('.card').length);
    if ($(this).children('.card:hidden').length ==  $(this).children('.card').length) {
      console.log("Toutes les cartes sont cachées pour la lettre : ");
      $(this).removeClass("visible");
      $(this).addClass("caché");
      // do something
      //console.log("Hide = ", index);
      //$(this).closest( ".letter-row" ).hide();
      //$(this).hide();
    } else if ($(this).children('.card:hidden').length <  $(this).children('.card').length) {
      console.log("Au moins une carte visible pour la lettre : ");
      //console.log("Show = ", index);
      //$(this).closest( ".letter-row" ).show();
      //$(this).show();
      $(this).addClass("visible");
      $(this).removeClass("caché");
    }
  });

  $grid.isotope();

}) ); */
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  console.log(value);
  return value;
}

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

}