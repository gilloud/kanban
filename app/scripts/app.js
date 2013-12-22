'use strict';

angular.module('kanbanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize','ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
