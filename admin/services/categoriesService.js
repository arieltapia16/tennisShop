angular.module('admin')
.service('categoriesService', function ($http) {
  this.category = function () {
    return $http.get('http://tennisapi.lilab.com.ar/sub_categories.php')
  }
})
