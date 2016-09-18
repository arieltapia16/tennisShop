angular.module("app")
.controller("headerCtrl", function($scope, $state , subCategoriesService){
    $scope.option = function(opt){
        $scope.articles_option = opt
    }

    subCategoriesService.subcategory().then(function(response){
            $scope.test = response;
             $scope.popups = [];

            var extradata_obj_array=[
                {
                    name:'tennis',
                    src: "img/tennis.jpg",
                },
                {
                    name:'padel',
                    src: "img/padel.jpg",
                },
                {
                    name:'calzado',
                    src: "img/calzado.jpg",
                },
                {
                    name:'indumentaria',
                    src: "img/indumentaria.jpg",
                }
            ]

             angular.forEach(response.data, function(subcat){

                obj = {
                    title : subcat.category,
                    option:subcat.category[0],
                    items : subcat.items,
                    img:'',
                }

                angular.forEach(extradata_obj_array,function(ext){
                    if (ext.name == subcat.category) {
                        obj.img = ext.src;
                    }
                })

                $scope.popups.push(obj);
             })
            //  console.log($scope.popups);

        }, function(error){
          console.log('error',error);
      });
})
