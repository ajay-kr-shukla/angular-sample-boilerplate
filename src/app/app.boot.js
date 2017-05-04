(function() {
  'use strict';

  angular
    .module('application', [
        'templates-app',
        'templates-common',
        'application.home',
        'ui.router',
        'pascalprecht.translate',
	'services.math',
	'factory.math',
	'application.filters',
	'application.components',
	'factory.interceptor',
	'factory.APIWrapper',
	'constants.APIMessages'
    ])
    .run(run);

  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      // react on state change events
    });
  }
})();
