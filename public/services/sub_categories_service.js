angular.module("app")

.service('subCategoriesService', function($http){
    this.subcategory = function(){
        return  $http.get('http://localhost/tennis-shop/data/sub_categories.php');

    };
});
