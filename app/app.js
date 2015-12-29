(function () {
	'use strict';

	angular.module('myApp', [
		'ngNewRouter',
		'ngRoute',
		'ngAnimate',
		'ngAria',
		'ngMaterial',
		'navigation',
    'home'
  ])

  .directive('mainNavigation', function(){
  	return {
  		scope: {},
  		controller: 'NavigationController',
  		controllerAs: 'navctrl',
  		templateUrl: 'components/navigation/navigation.html',
  		replace: true,
  		restrict: 'E'
  	};
  })

  .controller('AppController', ['$router', function($router){
  	$router.config([
			{ path: '/', component: 'home' }
  	]);
  }]);
})();