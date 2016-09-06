/*angular.module('myModule', ['lumx']);*/
app = angular.module("app", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state("home",{
			url:"/home",
			templateUrl:"templates/home.html",
			controller: "homeCtrl"
		})
		.state("tenis",{
			url:"/articulos/tenis",
			templateUrl:"templates/articulos.html",
			controller: "tenisCtrl"
		})
		.state("padle",{
			url:"/articulos/padle",
			templateUrl:"templates/articulos.html",
			controller: "padleCtrl"
		})
		$urlRouterProvider.otherwise("/home");
})

.controller("homeCtrl", function($scope, $state){

})
.controller("padleCtrl",function($scope, $state, $http){
	$scope.productos = [];
	$http.get('articles.json')
		.success(function(data){

			$scope.productos = data;
		});
	$scope.depo = 'padle';
	$scope.nombre='paleta';
	$scope.seleccion='Orden';
	$scope.valor = 0;

	$scope.tipos = [
		{"id":"nombre"},
		{"id":"marca"},
		{"id":"precio"}
		];
	$scope.valor =	0;


})
.controller("tenisCtrl",function($scope, $state, $http){

	$scope.depo = 'tenis';
	$scope.seleccion='Orden';
	$scope.nombre='raqueta';

	$scope.tipos = [
		{"id":"nombre"},
		{"id":"marca"},
		{"id":"precio"}
		];
	$scope.valor =	0;
	$scope.productos = [];
	$http.get('articles.json')
		.success(function(data){

			$scope.productos = data;
		});



})
