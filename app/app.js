var app = angular.module('app', ['ui.router', 'angular-loading-bar']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'AppCtrl'
		});

	$urlRouterProvider.otherwise('/');
})
.config(function($httpProvider){
	$httpProvider.defaults.headers.post["Content-Type"]   = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.put["Content-Type"]   = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
});