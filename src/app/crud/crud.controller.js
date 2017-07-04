(function() {
    'use strict';

    angular
        .module('application.crud')
        .controller('CrudController', CrudController);

    CrudController.$inject = ['$translate', '$stateParams'];

    function CrudController($translate, $stateParams) {
        var crudCtrl = this;

        crudCtrl.init = function() {
            crudCtrl.items = [];
        };

        crudCtrl.autoIncId = function() {
            return crudCtrl.items.length + 1;
        };
        crudCtrl.addItem = function(item) {
            if (item) {
                console.log(item);
                crudCtrl.item.id = crudCtrl.items.length + 1;
                crudCtrl.items.push(item);
                crudCtrl.item = {};
            }
        };

        crudCtrl.removeItem = function(index) {
            console.log(index);
            crudCtrl.items.splice(index, 1);
        };
        crudCtrl.editItem = function(index) {
            crudCtrl.editing = crudCtrl.items.indexOf(index);
        };


        crudCtrl.edit = function() {
            console.log($stateParams);

        };

        crudCtrl.toggleLang = function() {
            if ($translate.use() === 'en_EN') {
                $translate.use('de_DE');
            } else {
                $translate.use('en_EN');
            }
        };

        crudCtrl.getInteceptorRequest = function() {
            $http.get('https://api.github.com/users/naorye/repos').then(function(response) {
                home.interceptorTime = response.config.responseTimestamp - response.config.requestTimestamp;
                console.log('The request took ' + (home.interceptorTime / 1000) + ' seconds.');
            });

        };
    }
})();