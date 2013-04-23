'use strict';

describe('Controller: AppFeedCtrl', function () {

  // load the controller's module
  beforeEach(module('selfApp'));

  var AppFeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppFeedCtrl = $controller('AppFeedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
