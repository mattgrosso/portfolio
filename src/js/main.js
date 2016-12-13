(function() {
  'use strict';

  var hashList = {
    home: {
      top: '-209vh',
      left: '-163vw'
    },
    projects: {
      top: '-72vh',
      left: '-121vw'
    },
    bootstrap: {
      top: '-75vh',
      left: '-329vw'
    },
    responsive: {
      top: '-265vh',
      left: '-273vw'
    },
    recommend: {
      top: '-329vh',
      left: '-83vw'
    },
    about: {
      top: '-215vh',
      left: '-400vw'
    }
  }

  if (window.location.hash === '') {
    console.log('/');
    $('.moveable-canvas').css({
      'top': hashList.home.top,
      'left': hashList.home.left,
    });
  }
  else if (window.location.hash === '#projects') {
    console.log('projects');
    $('.moveable-canvas').css({
      'top': hashList.projects.top,
      'left': hashList.projects.left,
    });
  }
  else if (window.location.hash === '#bootstrap') {
    console.log('bootstrap');
    $('.moveable-canvas').css({
      'top': hashList.bootstrap.top,
      'left': hashList.bootstrap.left,
    });
  }
  else if (window.location.hash === '#responsive') {
    console.log('responsive');
    $('.moveable-canvas').css({
      'top': hashList.responsive.top,
      'left': hashList.responsive.left,
    });
  }
  else if (window.location.hash === '#recommend') {
    console.log('recommend');
    $('.moveable-canvas').css({
      'top': hashList.recommend.top,
      'left': hashList.recommend.left,
    });
  }
  else if (window.location.hash === '#about') {
    console.log('about');
    $('.moveable-canvas').css({
      'top': hashList.about.top,
      'left': hashList.about.left,
    });
  }

  window.addEventListener('hashchange', function hashNav() {
    var hash = window.location.hash;

    if (hash === '') {
      $('.moveable-canvas').css({
        'top': hashList.home.top,
        'left': hashList.home.left,
      });
    }
    else if (hash === '#projects') {
      console.log('projects');
      $('.moveable-canvas').css({
        'top': hashList.projects.top,
        'left': hashList.projects.left,
      });
    }
    else if (hash === '#bootstrap') {
      console.log('bootstrap');
      $('.moveable-canvas').css({
        'top': hashList.bootstrap.top,
        'left': hashList.bootstrap.left,
      });
    }
    else if (hash === '#responsive') {
      console.log('responsive');
      $('.moveable-canvas').css({
        'top': hashList.responsive.top,
        'left': hashList.responsive.left,
      });
    }
    else if (hash === '#recommend') {
      console.log('recommend');
      $('.moveable-canvas').css({
        'top': hashList.recommend.top,
        'left': hashList.recommend.left,
      });
    }
    else if (hash === '#about') {
      console.log('about');
      $('.moveable-canvas').css({
        'top': hashList.about.top,
        'left': hashList.about.left,
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
