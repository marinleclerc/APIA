import LazyLoad from 'vanilla-lazyload';

// Global Search
$(function () {
  console.log("ici");
  var hsResultsPage = function(_resultsClass) {
    function buildResultsPage(_instance) {
      var resultTemplate = _instance.querySelector('.hs-search-results__template');
      var resultsSection = _instance.querySelector('.hs-search-results__listing');
      var searchPath = _instance.querySelector('.blog-pagination').getAttribute('data-search-path');
      var prevLinkFooter = _instance.querySelector('.previous-button');
      var nextLinkFooter = _instance.querySelector('.next-button');
      var searchParams = new URLSearchParams(window.location.search.slice(1));
      function getTerm() {
        return searchParams.get('term') || '';
      }
      function getOffset() {
        return parseInt(searchParams.get('offset')) || 0;
      }
      function getLimit() {
        return parseInt(searchParams.get('limit'));
      }

      $('.hs-search-results__term').append("<span class='primary-blue'>" + getTerm() + '</span>');

      function addResult(
        title,
        url,
        description,
        type,
        score,
        domain,
        featuredImage,
        authorFullName,
        tags,
        id,
        publishedDate,
      ) {
        var newResult = document.importNode(resultTemplate.content, true);
        function isFeaturedImageEnabled() {
          if (newResult.querySelector('.hs-search-results__featured-image img')) {
            return true;
          }
        }

        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        newResult.querySelector('.hs-search-results__title').innerHTML = title;
        //newResult.querySelector('.hs-search-results__type').innerHTML = type;
        // newResult.querySelector('.hs-search-results__score').innerHTML = "Score : " + score;
        // newResult.querySelector('.hs-search-results__domain').innerHTML = domain;
        // newResult.querySelector('.hs-search-results__term').innerHTML = searchTerm;
        /* newResult.querySelector('.blog-post__timestamp').innerHTML = new Date(publishedDate).toLocaleDateString(
          'fr-FR',
          options,
        ); */
        /* newResult.querySelector('.hs-search-results__tags').innerHTML = tags; */
        newResult.querySelector('.hs-search-results__title').href = url;
        /* newResult.querySelector('.hs-search-results__author').innerHTML = authorFullName; */
        newResult.querySelector('.hs-search-results__description').innerHTML = description;
        if (typeof featuredImage !== 'undefined' && isFeaturedImageEnabled()) {
          newResult.querySelector('.hs-search-results__featured-image img').dataset.src = featuredImage;
        }

        function httpRequestCustomTest(portalId, term) {
          return new Promise(function(resolve, reject) {
            var SEARCH_URL =
              'https://api.hubapi.com/contentsearch/v2/search?portalId=32001795720&term=hubspot',
              /* 'https://api.hubapi.com/contentsearch/v2/search?portalId=32001795720&term=hubspot&type=BLOG_POST&length=SHORT', */
                /* 'https://api.hubapi.com/content/api/v2/blog-posts/32001795720?hapikey=8672c84a-a798-43e1-8e09-6cfb7e6a171c', */
              requestUrl = SEARCH_URL,
              request = new XMLHttpRequest();
            console.log(SEARCH_URL);
            request.open('GET', requestUrl, true);
            request.onload = function() {
              if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                console.log(data);
                resolve(data);
              } else {
                console.error('Server reached, error retrieving results.');
              }
            };
            request.onerror = function() {
              console.error('Could not reach the server.');
            };
            request.send();
          });
        }

        resultsSection.appendChild(newResult);
      }
      function fillResults(results) {
        results.results = results.results.sort(function(a, b) {
          return b.score - a.score;
        });

        results.results.forEach(function(result, i) {
          addResult(
            result.title.replace(/<[^>]*>?/gm, '').substring(0, 60) + '...',
            result.url,
            result.description.replace(/<\/?[^>]+>/gi, ' ').substring(0, 60) + '...',
            result.type,
            result.score,
            result.domain,
            result.featuredImageUrl,
            result.authorFullName,
            result.tags,
            result.id,
            result.publishedDate,
          );
        });
        var lazyLoadInstance = new LazyLoad({
          elements_selector: 'img.lazy',
        });
      }
      function emptyPagination() {
        prevLinkFooter.remove();
        nextLinkFooter.remove();
      }
      function setSearchBarDefault(searchedTerm) {
        $('.wrapper-content .hs-search-field__input')
          .first()
          .val(searchedTerm);
        /* document.getElementById('search_term').innerHTML = 'Recherche en cours...'; */
      }
      function httpRequestCustom(portalId, term) {
        return new Promise(function(resolve, reject) {
          var SEARCH_URL =
              'https://api.hubapi.com/contentsearch/v2/search?portalId=' +
              portalId +
              '&term=' +
              term +
              '&offset=' +
              getOffset() +
              '&limit=' +
              9,
            requestUrl = SEARCH_URL,
            request = new XMLHttpRequest();
          console.log(SEARCH_URL);
          request.open('GET', requestUrl, true);
          request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              resolve(data);
            } else {
              console.error('Server reached, error retrieving results.');
            }
          };
          request.onerror = function() {
            console.error('Could not reach the server.');
          };
          request.send();
        });
      }
      function paginate(results) {
        console.log('Results : ', results);
        console.log('TEST : ', window.location);
        if (results.total > 9) {
          let yes = results.total / 9;
          for (let i = 0; i < Math.ceil(yes); i++) {
            console.log('a href -> ', i * 9);
            var nextParams = new URLSearchParams(searchParams.toString());
            nextParams.set('offset', i * 9);
            nextLinkFooter.href = searchPath + '?' + nextParams;
            let page_number = i + 1;
            $('.search-results-pagination .numbers-pagination').append(
              "<a class='blog-pagination__link blog-pagination__number-link' href=" +
                nextLinkFooter.href +
                '>' +
                page_number +
                '</a>',
            );
          }
          let currentUrl = window.location.href;
          if (currentUrl.includes('offset') == false || currentUrl.includes('offset=0') == true) {
            $('.search-results-pagination .numbers-pagination a')
              .first()
              .addClass('blog-pagination__link--active');
          } else if (currentUrl.includes('offset=9') == true) {
            $('.blog-pagination__number-link:nth-child(2)').addClass('blog-pagination__link--active');
          } else if (currentUrl.includes('offset=18') == true) {
            $('.blog-pagination__number-link:nth-child(3)').addClass('blog-pagination__link--active');
          } else if (currentUrl.includes('offset=27') == true) {
            $('.blog-pagination__number-link:nth-child(4)').addClass('blog-pagination__link--active');
          }
        }
        var updatedLimit = getLimit() || results.limit;
        function hasPreviousPage() {
          return results.page > 0;
        }
        function hasNextPage() {
          return results.offset <= results.total - updatedLimit;
        }

        if (hasPreviousPage()) {
          var prevParams = new URLSearchParams(searchParams.toString());
          prevParams.set('offset', results.page * updatedLimit - parseInt(updatedLimit));
          prevLinkFooter.href = searchPath + '?' + prevParams;
          prevLinkFooter.style.display = 'block';
        } else {
          prevLinkFooter.remove();
        }

        if (hasNextPage()) {
          var nextParams = new URLSearchParams(searchParams.toString());
          nextParams.set('offset', results.page * updatedLimit + parseInt(updatedLimit));
          nextLinkFooter.href = searchPath + '?' + nextParams;
          nextLinkFooter.style.display = 'block';
          console.log(searchPath);
          console.log('nextParams : ', nextParams);
          console.log('nextLinkFooter.href : ', nextLinkFooter.href);
        } else {
          nextLinkFooter.remove();
        }
      }
      var getResults = (function () {
        console.log("research");
        if (getTerm()) {
          var data;
          setSearchBarDefault(getTerm());

          return httpRequestCustom('8191022', getTerm()).then(function(results) {
            data = results;
            data.total = results.total;
            if (data['results'].length > 0) {
              /* document.getElementById('search_term').innerHTML = 'Résultat de la recherche pour ' + getTerm(); */
              fillResults(data);
              paginate(data);
            } else {
              /* document.getElementById('search_term').innerHTML = 'Pas de résultat pour ' + getTerm(); */
              emptyPagination();
            }
          });
        } else {
        /* document.getElementById('search_term').innerHTML = 'Pas de résultat pour ' + getTerm(); */
          console.log("fail");
        }
      })();
    }

    (function() {
      var searchResults = document.querySelectorAll(_resultsClass);
      Array.prototype.forEach.call(searchResults, function(el) {
        buildResultsPage(el);
      });
    })();
  };

  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    var resultsPages = hsResultsPage('.hs-search-results');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      var resultsPages = hsResultsPage('.hs-search-results');
      console.log('ici ok oui');
    });
  }
});
