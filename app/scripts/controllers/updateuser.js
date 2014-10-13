'use strict';

/**
 * @ngdoc function
 * @name test.controller:UpdateUserCtrl
 * @description
 * # UpdateUserCtrl
 * Controller of the test
 */
angular.module('test')
  .controller('UpdateUserCtrl', function ($scope, User, Alert, $log, $state, $stateParams) {
    $scope.userData = {};
    $scope.state = $state;

    User.get()
      .then(function(data) {
        $log.debug(data);

        var result = angular.fromJson(data.data);
          if ( angular.isObject(result) ) {
            $scope.userData = result;
          } else {
            $scope.userData.email = User.data.email;
          }
        },
        function(data) {
          $log.debug(data);
          Alert.error(data.message);
        }
      );

    $scope.update = function() {
      var data = angular.extend({}, $scope.userData, {email: User.data.email});
      User.update(data)
        .success(function(data) {
          $log.debug(data);
          Alert.success('The user was successfully updated');
        })
        .error(function(data) {
          $log.debug(data);
          Alert.error(data.message);

        });
    };

  });