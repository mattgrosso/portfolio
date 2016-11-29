(function() {
  'use strict';

  $('.move-stuff').on('click', function moveStuff() {
      $('.moveable-canvas').css({
        'top': '-150vh',
        'left': '-150vw',
      });
  });

  angular
    .module('portfolio',['ui.router']);


})();

//# sourceMappingURL=main.js.map