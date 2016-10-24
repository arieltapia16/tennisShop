angular.module('app')
.controller('artCtrl', function ($scope, articlesService, $stateParams) {
  $scope.category = $stateParams.cat
  $scope.subcategory = $stateParams.sub
  $scope.oneItem = false

  if ($stateParams.code) {
    // $scope.code = $stateParams.code;
    $scope.oneItem = true
  }

  $scope.nav = {
    subcategory: 'todos',
    trade: 'todas'
  }

  var trade = ''
  var subcat = ''
  var stock = ''

  $scope.all = function () {
    trade = ''; subcat = ''; stock = ''
  }

  $scope.tradeFilter = function (trd) {
    trade = trd
  }
  $scope.subcatFilter = function (subc) {
    subcat = subc
  }
  $scope.filterArticles = function (tra, sub, al) {
    if (!trade && !subcat && !stock) {
      return true
    } else {
      if (trade && !subcat) {
        if (trade === tra) {
          $scope.nav = tra
          return true
        }
      } else if (subcat && !trade) {
        if (subcat === sub) {
          return true
        }
      } else {
        if (subcat === sub && trade === tra) { return true }
      }
    }
  }
  articlesService.articles().then(function (response) {
      // console.log(response.data);
    $scope.articles = []
    angular.forEach(response.data, function (data) {
      if (data.category === $scope.category) {
        if ($scope.subcategory) {
          if (data.subcategory === $scope.subcategory) {
            $scope.articles.push(data)
          }
        } else {
          $scope.articles.push(data)
        }
      }
    })

     // unique in array function
    function onlyUnique (value, index, self) {
      return self.indexOf(value) === index
    }
    $scope.trades = []
    angular.forEach($scope.articles, function (item) {
      $scope.trades.push(item.trade)
    })

    $scope.trades = $scope.trades.filter(onlyUnique)

    $scope.subcategories = []
    angular.forEach($scope.articles, function (item) {
      $scope.subcategories.push(item.subcategory)
    })

    $scope.subcategories = $scope.subcategories.filter(onlyUnique)
  })
})
