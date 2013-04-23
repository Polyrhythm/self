'use strict';

angular.module('selfApp', [])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/landing',
    controller: 'LandingCtrl'
  })
  .when('/login', {
    templateUrl: 'partials/login',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
    templateUrl: 'partials/signup',
    controller: 'SignupCtrl'
  })
  .when('/app/profile', {
    templateUrl: 'partials/profile',
    controller: 'AppProfileCtrl'
  })
  .when('/app/feed', {
    templateUrl: 'partials/feed',
    controller: 'AppFeedCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
  // $locationProvider.html5Mode(true);
});
