(function() {
  'use strict';

  if (window.location.hash.split('/')[1] === 'about') {
    detectHash();
  }

  window.addEventListener('hashchange', function aboutPageRouter() {
    detectHash();
  });

  function detectHash() {
    var hashSplit = window.location.hash.split('/');
    if (hashSplit[2] && hashSplit[1] === 'about') {
      $('.about-page').css({
        'display': 'none'
      });
      $('#about-' + hashSplit[2]).css({
        'display': 'block'
      });
    }
    else if (hashSplit[1] === 'about') {
      $('.about-page').css({
        'display': 'none'
      });
      $('#about-start').css({
        'display': 'block'
      });
    }

  }
})();
