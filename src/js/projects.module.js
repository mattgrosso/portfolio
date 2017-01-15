(function() {
  'use strict';

  angular
    .module('projects', ['ui.router'])
    .config(projectsConfig);

  projectsConfig.$inject = ['$stateProvider'];

  function projectsConfig($stateProvider) {

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: '/templates/projects.template.html'
      })
      .state('gametable', {
        url: '/projects/gametable',
        templateUrl: '/templates/gametable.template.html'
      })
      .state('tictactoe', {
        url: '/projects/tictactoe',
        templateUrl: '/templates/tictactoe.template.html'
      })
      .state('evolution', {
        url: '/projects/evolution',
        templateUrl: '/templates/evolution.template.html'
      })
      .state('popsci', {
        url: '/projects/popsci',
        templateUrl: '/templates/popsci.template.html'
      });
  }


})();
