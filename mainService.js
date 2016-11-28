angular.module('assessment').service('mainService', function($http, $q) {

  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response){
      return response.data;
      // console.log(response.data);
    });
  };

});
