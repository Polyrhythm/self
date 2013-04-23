'use strict';

describe('Controller: AppProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('selfApp'));

  var AppProfileCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
               scope = $rootScope.$new();
               AppProfileCtrl = $controller('AppProfileCtrl', {
                 $scope: scope
               });
             }));
});
