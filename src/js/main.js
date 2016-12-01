(function() {
  'use strict';

  window.addEventListener('hashchange', function hashNav() {
    var hash = window.location.hash;

    if (hash === '#projects') {
      $('.moveable-canvas').css({
        'top': '-110vh',
        'left': '-75vw',
      });
    }
  });

  $('.move-stuff-form').on('submit', function moveStuff(event) {
    event.preventDefault();
    $('.moveable-canvas').css({
      'top': '-' + event.target[0].value + 'vh',
      'left': '-' + event.target[1].value + 'vw',
    });
  });

})();
