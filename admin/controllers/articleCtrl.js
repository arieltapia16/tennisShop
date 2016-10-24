angular.module('admin')
.controller('article', function ($scope, Upload) {
  // upload on file select or drop
  $scope.upload = function (file) {
    Upload.upload({
      url: 'http://localhost/tennis-shop/data/file.php',
      data: {file: file, 'username': $scope.username},
      headers: {
        'Content-Type': 'Access-Control-Allow-Origin'
      }
    }).then(function (resp) {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data)
    }, function (resp) {
      console.log('Error status: ' + resp.status)
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
    })
  }
})
