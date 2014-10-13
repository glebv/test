'use strict';


/**
 * @ngdoc function
 * @name test.service:User
 * @description
 * # User
 * Service of the test
 */
angular.module('test')
  .factory('User', function (APIURL, $http, $q, $timeout) {
    var user = {
      data: {}
    };
    user.create = function(data) {
      return $http.post(
        APIURL + 'createUser',
        data
      );
    };
    user.verify = function(data) {
      return $http.post(
          APIURL + 'verifyUser',
        data
      );
    };
    user.get = function(email) {

//    try to get email from property
      email = angular.isUndefined(email) ? this.data.email : email;

//    if email is not specified should be return promise
      if ( ! email) {
        var deferred = $q.defer();
        deferred.reject('email is undefined');
        return deferred.promise;
      }

      return $http.get(
          APIURL + 'user/' + email
      );
    };

    user.update = function(data) {
      return $http.put(
          APIURL + 'user/'+data.email
      );
    };

    return user;
  });