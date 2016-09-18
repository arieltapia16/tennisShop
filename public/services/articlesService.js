angular.module("app")

.service('articlesService', function($http){
    this.articles = function(){
        return  $http.get('http://tennisapi.lilab.com.ar/articles.php');

    };
});
