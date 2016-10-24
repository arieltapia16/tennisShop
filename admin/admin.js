angular.module('admin', ['ui.router', 'ngFileUpload'])
.run(function ($rootScope) {
  $rootScope.login = false
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
	.state('/', {
  url: '/',
  templateUrl: 'templates/login.html',
  controller: 'loginCtrl'
	})
	.state('main', {
  url: '/main',
  templateUrl: 'templates/main.html',
  controller: 'mainCtrl'
	})
	.state('new', {
  url: '/newArticle',
  templateUrl: 'templates/newArticle.html',
  controller: 'article'
	})
  $urlRouterProvider.otherwise('/')
})
