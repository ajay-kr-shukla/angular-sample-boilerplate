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
