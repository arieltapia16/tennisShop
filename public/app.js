angular.module("app", ["ui.router"])
.run(function( $rootScope){
	$rootScope.globaloption = function(){
		$rootScope.articles_option = 'no';
	}
})
.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state("/",{
			url:"/",
			templateUrl:"templates/home.html",
			controller: "homeCtrl"
		})

		.state("category", {
			url: "/category/:cat",
			templateUrl: "/templates/articles.html",
			controller: "artCtrl"
		})
		.state("articles", {
            url: "/articles/:cat/:sub/:id",
            templateUrl: "/templates/articles.html",
            controller: "artCtrl"
        })

		$urlRouterProvider.otherwise("/");
})
