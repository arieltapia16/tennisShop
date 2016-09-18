angular.module("app")

.service('subCategoriesService', function($http){
    this.subcategory = function(){
        return  $http.get('http://tennisapi.lilab.com.ar/sub_categories.php');

    };
});
