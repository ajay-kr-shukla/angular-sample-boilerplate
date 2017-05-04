(function() {
  'use strict';

  angular
  .module('application.home')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$translate', 'MathService', 'MathFactory', '$http', 'APIWrapper'];
  function HomeController($translate, MathService, MathFactory, $http, APIWrapper) {
    var home = this;
	
    home.init = function() {	
	
	home.date = new Date();
	home.title = 'Home';
	home.sum = MathService.add(3,7);
	home.subtract = MathService.subtract(10,7);
	home.multiply = MathFactory.multiply(3,7);
	home.cube = MathFactory.cube(7);
	console.log('Math Service', MathService);
	console.log('APIWrapper ', APIWrapper);
	console.log('Math Factory', MathFactory);
	home.getInteceptorRequest();
	home.getAPIRequest();
    };

    home.toggleLang = function() {
      if ($translate.use() === 'en_EN') {
        $translate.use('de_DE');
      } else {
        $translate.use('en_EN');
      }
    };

    home.getInteceptorRequest = function(){
	$http.get('https://api.github.com/users/naorye/repos').then(function(response) {
	home.interceptorTime = response.config.responseTimestamp - response.config.requestTimestamp;
	console.log('The request took ' + (home.interceptorTime / 1000) + ' seconds.');
    });

    };
  }
})();
