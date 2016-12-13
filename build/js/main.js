(function() {
  'use strict';

  console.log(window.location);

  if (window.location.hash === '') {
    console.log('/');
    $('.moveable-canvas').css({
      'top': '-204vh',
      'left': '-163vw',
    });
  } else if (window.location.hash === '#projects') {
    console.log('projects');
    $('.moveable-canvas').css({
      'top': '-72vh',
      'left': '-121vw',
    });
  } else if (window.location.hash === '#bootstrap') {
    console.log('bootstrap');
    $('.moveable-canvas').css({
      'top': '-75vh',
      'left': '-329vw',
    });
  } else if (window.location.hash === '#responsive') {
    console.log('responsive');
    $('.moveable-canvas').css({
      'top': '-265vh',
      'left': '-273vw',
    });
  } else if (window.location.hash === '#recommend') {
    console.log('recommend');
    $('.moveable-canvas').css({
      'top': '-329vh',
      'left': '-83vw',
    });
  } else if (window.location.hash === '#about') {
    console.log('about');
    $('.moveable-canvas').css({
      'top': '-215vh',
      'left': '-400vw',
    });
  }

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

//# sourceMappingURL=main.js.map