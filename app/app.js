//angular.module("App",['main']);

var productReview = angular.module("main", []);

angular.module("main").controller("mainController",function($scope){
    $scope.phones = [
      {
        name: 'Product 1',
        description: 'First product to be shown.'
      }, 
      {
        name: 'Product 2',
        description: 'Second product to be shown.'
      },
      {
        name: 'Product 3',
        description: 'Third product to be shown.'
      },
      {
        name: 'Product 4',
        description: 'Fourth product to be shown.'
      }
    ];
    $scope.name = 'productList';
});