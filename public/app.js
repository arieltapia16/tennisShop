angular.module("app", ["ui.router"])

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
