angular.module("app")
.controller("artCtrl", function($scope, articlesService, $stateParams){

    $scope.category = $stateParams.cat;

    $scope.nav={
        subcategory : "todos los rubros",
        trade : "todas las marcas"
    }


    var trade = "", subcat="", stock="";

    $scope.all = function(){
        trade = ""; subcat=""; stock="";
        $scope.nav.trade = "todas las marcas";
        $scope.nav.subcategory = "todos los rubros";
    }

    $scope.tradeFilter = function(trd){
        trade = trd;
    }
    $scope.subcatFilter = function(subc){
        subcat = subc;
    }
    $scope.filterArticles = function(tra, sub , al){
        if (!trade && !subcat && !stock) {
            return true
        }else {
            if (trade && !subcat) {
                if (trade == tra) {
                    $scope.nav.trade = tra;
                    return true
                }
            }else if (subcat && !trade ) {
                if (subcat == sub) {
                    $scope.nav.subcategory = subcat;
                    return true
                }
            }else {
                if (subcat == sub && trade == tra) {
                    $scope.nav.trade = tra;
                    $scope.nav.subcategory = subcat;
                    return true
                }
            }
        }
    }
    articlesService.articles().then(function(response){

        // console.log(response.data);
        $scope.articles=[];
        angular.forEach(response.data ,function(data){
            if (data.category == $scope.category) {
                $scope.articles.push(data)
            }
        })
        // console.log('data.category',data.category, 'category',category);


        //unique in array function
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        $scope.trades =[];
        angular.forEach($scope.articles ,function(item){
            $scope.trades.push(item.trade);
        })

        $scope.trades = $scope.trades.filter(onlyUnique);

        $scope.subcategories =[];
        angular.forEach($scope.articles ,function(item){
            $scope.subcategories.push(item.subcategory);
        })

        $scope.subcategories = $scope.subcategories.filter(onlyUnique);




        // console.log($scope.subcategories);
    })

})
