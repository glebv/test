'use strict';


/**
 * @ngdoc function
 * @name test.service:Alert
 * @description
 * # User
 * Service of the test
 */
angular.module('test')
  .factory('Alert', function ($rootScope, $timeout) {
    var alert =  {
      alerts: []
    };
    var _addAlert = function(data) {
      alert.alerts.push(data);

      if ( ! data.hasOwnProperty('autoClose') ||  data.autoClose === true) {
        $timeout(function(){
          var index = alert.alerts.length - 1;
          $timeout( function(){
           alert.alerts.splice(index, 1);
          }, 5000);
        });
      }
    };

    alert.error = function(msg, autoClose) {
        if ( ! msg ) msg = 'Server error!';
        _addAlert({type: 'danger', msg: msg, autoClose: false});
    };
    alert.success = function(msg, autoClose) {
        _addAlert({type: 'success', msg: msg});
    };

    return alert
  });