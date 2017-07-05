/**
 * Home Module Controller file 
 * Here we are performing actions and events, injection on html models
 * Method Init: Initialing controller variables
 * Method toggleLang: Toggling language from english to dutch and vice versa
 */

(function() {
    'use strict';

    angular
        .module('application.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$translate', 'MathService', 'MathFactory', '$http', 'APIWrapper'];

    function HomeController($translate, MathService, MathFactory, $http, APIWrapper) {
        var home = this;

        /*
         * Init method to initialise all controller vairables used 
         */
        home.init = function() {

            home.date = new Date();
            home.title = 'Home';
            home.sum = MathService.add(3, 7);
            home.subtract = MathService.subtract(10, 7);
            home.multiply = MathFactory.multiply(3, 7);
            home.cube = MathFactory.cube(7);
            console.log('Math Service', MathService);
            console.log('APIWrapper ', APIWrapper);
            console.log('Math Factory', MathFactory);
            home.getInteceptorRequest();
        };


        /*
         * Toggling language language
         */
        home.toggleLang = function() {
            if ($translate.use() === 'en_EN') {
                $translate.use('de_DE');
            } else {
                $translate.use('en_EN');
            }
        };


        /*
         * Http interceptor - working for tracking request
         */
        home.getInteceptorRequest = function() {
            $http.get('https://api.github.com/users/naorye/repos').then(function(response) {
                home.interceptorTime = response.config.responseTimestamp - response.config.requestTimestamp;
                console.log('The request took ' + (home.interceptorTime / 1000) + ' seconds.');
            });

        };
    }
})();