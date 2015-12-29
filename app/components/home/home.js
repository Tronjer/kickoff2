(function () {
	'use strict';

  angular.module('home', [])
  .controller('HomeController', ['$log', function($log){
  	$log.debug('In HomeController');
  }]);
})();
