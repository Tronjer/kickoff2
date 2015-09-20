(function (angular) {

	'use strict';

	var myApp = angular.module('myApp', [
		'ngRoute',
		'ngAnimate',
		'ngAria',
		'ngMaterial',
    'main'
  ]);

	myApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'main/main.tpl.html',
				controller: 'MainController'
			})
			.otherwise({
        redirectTo: '/'
      });
	}]);


})(angular);