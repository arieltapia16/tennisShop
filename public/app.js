angular.module("app", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state("/",{
			url:"/",
			templateUrl:"templates/home.html",
			controller: "homeCtrl"
		})
		.state("tennis",{
			url:"/tennis",
			templateUrl:"/templates/articulos.html",
			controller: "artCtrl"
		})
		.state("padle",{
			url:"/articulos/padle",
			templateUrl:"templates/articulos.html",
			controller: "padleCtrl"
		})

		$urlRouterProvider.otherwise("/");
})
