angular.module('admin')

.controller("loginCtrl", function($scope,$rootScope, $state, loginService, $location){
    $rootScope.login = true;
$scope.admin = function(){

    if ($scope.user) {
        loginService.login($scope.user,$scope.pass)
        .then( function(response){
            console.log(response.data);
            if (response.data == 'access') {
                $location.path('/main')
                $rootScope.login = false;    
            }

        })
    }
}

})
