angular.module('assessment').controller('mainCtrl', function($scope, mainService) {
  $scope.getProducts = function() {
    mainService.getProducts().then(function(dataFromService) {
      $scope.products = dataFromService;
    });
  };

  $scope.getProducts();

});
