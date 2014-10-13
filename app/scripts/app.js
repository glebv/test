'use strict';

/**
 * @ngdoc overview
 * @name Test
 * @description
 * # Test
 *
 * Main module of the application.
 */


angular
  .module('test', [
    'ui.router',
    'ui.bootstrap'
  ])
  .constant('APIURL','http://api-test.ivanfarms.com/')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/views/signin.html',
        controller: 'SignInCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/views/signup.html',
        controller: 'SignUpCtrl'
      })
      .state('updateUser', {
        url: '/updateUser',
        templateUrl: 'app/views/signup.html',
        controller: 'UpdateUserCtrl'
      });
  })
  .config(function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  })
;

