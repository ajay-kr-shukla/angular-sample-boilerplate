(function() {
  'use strict';

  angular
  .module('application.home')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$translate', 'MathService', 'MathFactory'];
  function HomeController($translate, MathService, MathFactory) {
    var home = this;
	
    home.init = function() {	
	
	home.date = new Date();
	home.title = 'Home';
	home.sum = MathService.add(3,7);
	home.subtract = MathService.subtract(10,7);
	home.multiply = MathFactory.multiply(3,7);
	home.cube = MathFactory.cube(7);
	console.log('Math Service', MathService);
	console.log('Math Factory', MathFactory);
    };

    home.toggleLang = function() {
      if ($translate.use() === 'en_EN') {
        $translate.use('de_DE');
      } else {
        $translate.use('en_EN');
      }
    };
  }
})();
