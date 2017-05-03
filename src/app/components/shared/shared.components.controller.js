(function () {
    'use strict';

    angular
        .module('application.components')
        .controller('HeaderController', HeaderController)
        .controller('FooterController', FooterController);


   // HeaderController.$inject = ['$state', '$rootScope', '$scope'];

    function HeaderController($state,  $rootScope, $scope) {
        var headerCtrl = this;

        headerCtrl.init = function () {
             console.log('Header', $state.current);
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('headerCtrl isMobile - change of State' );
        });


        headerCtrl.logout = function(){
            $state.go('logout');
        };
    }

   // FooterController.$inject = [];

    function FooterController() {
        var footerCtrl = this;

        footerCtrl.init = function () {};
    }

})();

