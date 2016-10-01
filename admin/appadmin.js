angular.module('appadmin',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state("/",{
			url:"/",
			templateUrl:"templates/login.html",
			controller: "loginCtrl"
		})
		.state("main",{
			url:"/main",
			templateUrl:"templates/main.html",
			controller:"mainCtrl"
		})

		$urlRouterProvider.otherwise("/");
})
