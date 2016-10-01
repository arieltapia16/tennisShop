angular.module('appadmin')

.controller("loginCtrl", function($scope, $state, loginService, $location){

$scope.admin = function(){

    // console.log($scope.user,$scope.pass);

    if ($scope.user) {
        loginService.login($scope.user,$scope.pass)
        .then( function(response){
            console.log(response.data);
            if (response.data == 'access') {
                $location.path('/main')
            }

        })
    }
}

})
