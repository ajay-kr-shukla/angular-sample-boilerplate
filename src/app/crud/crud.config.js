/**
* Crud Module Config file 
* Here we are defining Routing, Controller, aliases and HTML template file
*/

(function() {
    'use strict';

    angular
        .module('application.crud', ['ui.router'])
        .config(CrudConfig);

    function CrudConfig($stateProvider) {

        var states = [{
                name: 'crud',
                url: '/crud/list',
                views: {
                    "main": {
                        controller: 'CrudController',
                        controllerAs: 'crudCtrl',
                        templateUrl: 'crud/templates/list.tpl.html'
                    }
                }
            },
            {
                name: 'edit',
                url: '/crud/edit/:id',
                views: {
                    "main": {
                        controller: 'CrudController',
                        controllerAs: 'crudCtrl',
                        templateUrl: 'crud/templates/edit.tpl.html'
                    }
                }
            }

        ];


        states.forEach(function(state, index) {
            $stateProvider.state(state);
        });

    }
})();
