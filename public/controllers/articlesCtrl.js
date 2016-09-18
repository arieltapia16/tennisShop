angular.module("app")
.controller("artCtrl", function($scope, articlesService){

    $scope.all =false; 

    articlesService.articles().then(function(response){
        //unique in array function
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        $scope.trades =[];
        angular.forEach(response.data ,function(item){
            $scope.trades.push(item.trade);
        })

        $scope.trades = $scope.trades.filter(onlyUnique);

        $scope.subcategories =[];
        angular.forEach(response.data ,function(item){
            $scope.subcategories.push(item.subcategory);
        })

        $scope.subcategories = $scope.subcategories.filter(onlyUnique);


        $scope.articles = response.data;

        // console.log($scope.subcategories);
    })

})
