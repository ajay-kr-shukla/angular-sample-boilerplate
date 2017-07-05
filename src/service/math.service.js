/**
* Math Service file 
* Here we are creating a user defined based on defined functions add, subtract, multiply, devide etc
* Returning this service object
*/
angular.module('services.math', []).service('MathService', function() {
    this.add = function(a, b) { 
	return a + b ;
    };
    this.subtract = function(a, b) { 
	return a - b ;
    };
    this.multiply = function(a, b) { 
	return a * b ;
    };
    this.divide = function(a, b) { 
	return a / b ;
    };
});
