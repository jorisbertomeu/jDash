'use strict';

// Declare app level module which depends on views, and components
angular.module('jDash', [
  'ngRoute',
  'jDash.home',
  'jDash.view2',
  'jDash.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('MainCtrl', function($scope, $timeout) {
	$scope.clock = "Loading clock...";
    $scope.tickInterval = 1000;

    var tick = function () {
        $scope.clock = Date.now();
        $timeout(tick, $scope.tickInterval);
    }

    $timeout(tick, $scope.tickInterval);
});
