angular.module('admin')
.controller('article', function ($scope, Upload, categoriesService) {
  // upload on file select or drop
  $scope.upload = function (file) {
    file.upload = Upload.upload({
      url: 'http://localhost/tennis-shop/data/file.php',
      data: {
        code: $scope.code,
        trade_id: $scope.trade_id,
        sub_category_id: $scope.sub_category_id,
        description: $scope.description,
        price: $scope.price,
        stock: $scope.stock,
        size: $scope.size,
        submit: true,
        file: file
      }
    })

    file.upload.then(function (response) {
      // $timeout(function () {
      file.result = response.data
      // })
    }, function (response) {
      if (response.status > 0) {
        $scope.errorMsg = response.status + ': ' + response.data
      }
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total))
    })
  }
  $scope.stepsModel = []

  $scope.imageUpload = function (element) {
    var reader = new FileReader()
    reader.onload = $scope.imageIsLoaded
    reader.readAsDataURL(element.files[0])
  }

  $scope.imageIsLoaded = function (e) {
    $scope.$apply(function () {
      $scope.stepsModel[0] = e.target.result
    })
  }

  categoriesService.category().then(function (response) {
    $scope.categories = response.data
  })
})
