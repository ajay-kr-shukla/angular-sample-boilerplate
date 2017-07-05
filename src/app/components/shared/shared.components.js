/**
* Here we are defining components  Ex. headerComponent and footerComponent
* This Components can be used across app ex Header,Footer
* params : template: path of HTML file
* Controller: Controller to be invoked for component
* controllerAs : Aliasing of controller
*/

(function () {
    'use strict';

    angular
        .module('application.components')
        .component('headerComponent', {
            templateUrl: 'components/shared/templates/header.tpl.html',
            controller: 'HeaderController',
            controllerAs: 'headerCtrl'
        })
        .component('footerComponent', {
            templateUrl: 'components/shared/templates/footer.tpl.html',
            controller: 'FooterController',
            controllerAs: 'footerCtrl'
        });
})();
