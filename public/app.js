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
			templateUrl:"/templates/articles.html",
			controller: "artCtrl"
		})
		.state("padle",{
			url:"/articulos/padle",
			templateUrl:"templates/articulos.html",
			controller: "padleCtrl"
		})

		$urlRouterProvider.otherwise("/");
})
