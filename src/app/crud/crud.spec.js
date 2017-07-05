/**
* Crud Module Testing file 
* It can be used for writing unit test cases wrt to module controller and services.
*/

describe( 'crud section', function() {

  var controller, rootScope, httpBackend;

  beforeEach(module('pascalprecht.translate'));
  beforeEach( module( 'application' ) );


  beforeEach( module( function( $translateProvider ) {
    $translateProvider.registerAvailableLanguageKeys(['de_DE', 'en_EN']);
  }));

  beforeEach(inject( function($injector){
      controller = $injector.get('$controller');
      rootScope = $injector.get('$rootScope');
      httpBackend = $injector.get('$httpBackend');

  }));

  it( 'should have a predefined language after start', inject(function($translate) {
    expect($translate.use()).toEqual('en_EN');
  }));

  it('should define CrudController', function() {
        var crudController = controller('CrudController', {});
        expect(crudController).toBeDefined();
        console.log('CrudController is Defined.');
    });


});
