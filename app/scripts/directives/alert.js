'use strict';

/**
 * @ngdoc function
 * @name test.directive:SignUpCtrl
 * @description
 * # AppAlert
 * Directive of the test
 */
angular.module('test')
  .directive('appAlert', function () {
    return {
      replace: true,
      restrict: 'E',
      template: '<div class="app-alert">' +
        '<alert ng-repeat="alert in alerts" type="alert.type" close="alerts.splice($index,1)">{{alert.msg}}</alert>' +
        '</div>',
      controller: function($scope, Alert) {
        $scope.alerts =  Alert.alerts;
      }
    }
  });