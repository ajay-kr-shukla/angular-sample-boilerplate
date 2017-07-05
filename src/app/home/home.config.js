/**
* Home Module Config file 
* Here we are defining Routing, Controller, aliases and HTML template file
*/

(function() {
  'use strict';

  angular
    .module('application.home', ['ui.router'])
    .config(HomeConfig);

  function HomeConfig($stateProvider) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeController',
          controllerAs: 'home',
          templateUrl: 'home/templates/home.tpl.html'
        }
      }
    });
  }
})();
