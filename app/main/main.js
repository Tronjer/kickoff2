(function (angular) {
	'use strict';
	
  var main = angular.module('main', []);

  main.controller('MainController', ['$scope', '$log', function($scope, $log){
  	$log.debug('In MainController');

  	$scope.foo = 'Hello World';
  }]);
})(angular);
