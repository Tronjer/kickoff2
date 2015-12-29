(function () {
	'use strict';

  angular.module('navigation', [])
  .controller('NavigationController', ['$scope', '$log', function($scope, $log){
  	$log.debug('In NavigationController');
  	this.text = 'My Navigation';
  }]);
})();
