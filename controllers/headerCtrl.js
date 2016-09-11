angular.module("app")
.controller("headerCtrl", function($scope, $state){
  $scope.option = function(opt){
    // console.log(opt);
    $scope.articles_option = opt
  }

})
