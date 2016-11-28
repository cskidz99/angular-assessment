angular.module('assessment').controller('detailCtrl',function($scope,mainService,$stateParams){

  $scope.getProductDetail = function() {
    mainService.getProducts().then(function(dataFromService) {
      for(var i=0; i < dataFromService.length; i++){
        if(dataFromService[i].id == $stateParams.id){
          $scope.selected = dataFromService[i];
        }
      }
    });
  };

  $scope.getProductDetail();

});
