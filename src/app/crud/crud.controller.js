/**
 * Crud Module Controller file 
 * Here we performing actions based on event generated on model, HTML file,
 * Services can be injected if needed in controller Ex. $stateParams
 */

(function() {
    'use strict';

    angular
        .module('application.crud')
        .controller('CrudController', CrudController);

    CrudController.$inject = ['$translate', '$stateParams'];

    function CrudController($translate, $stateParams) {
        var crudCtrl = this;

        /*
         * Init method to initialise all controller vairables used 
         */
        crudCtrl.init = function() {
            crudCtrl.items = [];
        };

        /*
         * generating auto incremented iD
         */
        crudCtrl.autoIncId = function() {
            return crudCtrl.items.length + 1;
        };

        /*
         * Adding item to items object, used during listing
         */
        crudCtrl.addItem = function(item) {
            if (item) {
                console.log(item);
                crudCtrl.item.id = crudCtrl.items.length + 1;
                crudCtrl.items.push(item);
                crudCtrl.item = {};
            }
        };

        /*
         * removing item to items object, used during listing
         */
        crudCtrl.removeItem = function(index) {
            console.log(index);
            crudCtrl.items.splice(index, 1);
        };

        /*
         * editing item from  listing
         */
        crudCtrl.editItem = function(index) {
            crudCtrl.editing = crudCtrl.items.indexOf(index);
        };


        crudCtrl.edit = function() {
            console.log($stateParams);

        };
    }
})();