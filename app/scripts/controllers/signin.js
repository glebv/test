'use strict';

/**
 * @ngdoc function
 * @name test.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the test
 */
angular.module('test')
  .controller('SignInCtrl', function ($scope, User, $state, $log, Alert) {
    $scope.userData = {};

    $scope.verify = function() {

      User.verify($scope.userData)
        .success(function(data) {
          $log.debug(data);
          if (data === "true" ) {
            User.data = { email: $scope.userData.email };
            $state.go('updateUser');
          } else {
            Alert.error('Incorrect email or code is displayed');
          }
        })
        .error(function(data) {
          $log.debug(data);
          Alert.error(data.message);
        });
    };
  });