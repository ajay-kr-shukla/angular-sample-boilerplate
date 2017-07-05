/**
* Math Factory file 
* Here we are creating a user defined based on defined functions add, subtract, multiply, devide etc
* Returning factory object
*/
angular.module('factory.math', []).factory('MathFactory',  MathFactory);

MathFactory.$inject = [];
function MathFactory() {
   var factory = {};
   
   factory.multiply = function(a, b) {
      return a * b ;
   };

   factory.cube = function(a) {
      return a * a * a ;
   };
   
   return factory;
}
