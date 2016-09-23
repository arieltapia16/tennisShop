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
		// .state("articlesAll",{
		// 	url:"/articles",
		// 	templateUrl:"/templates/articles.html",
		// 	controller: "artCtrl"
		// })
		.state("articles", {
            url: "/articles/:cat",
            templateUrl: "/templates/articles.html",
            controller: "artCtrl"
        })
		$urlRouterProvider.otherwise("/");
})
