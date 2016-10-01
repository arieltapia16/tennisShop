angular.module('appadmin')

.service('loginService', function($http){
    this.login = function(user, pass){
        return $http.post('http://tennisapi.lilab.com.ar/login.php',
             {user: user, pass: pass},
             {
                headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }
        )
    }
})
