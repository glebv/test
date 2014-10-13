'use strict';

/**
 * @ngdoc function
 * @name test.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the test
 */
angular.module('test')
  .controller('SignUpCtrl', function ($scope, User, Alert, $log, $state) {
    $scope.userData = {};

    $scope.signup = function() {
      User.create($scope.userData)
        .success(function(data) {
          $log.debug(data);
          $state.go('home');
          Alert.success('The user has been successfully created.');
        })
        .error(function(data) {
          $log.debug(data);
          Alert.error(data.message);

        });
      };
  });