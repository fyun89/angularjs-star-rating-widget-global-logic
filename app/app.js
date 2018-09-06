var productReview = angular.module("productReview", []);

productReview.controller("productReviewController",function($scope) {
    $scope.products = [
      {
        "name": 'Product 1',
        "description": 'Description for Product 1.'
      }, 
      {
        "name": 'Product 2',
        "description": 'Description for Product 2.'
      },
      {
        "name": 'Product 3',
        "description": 'Description for Product 3.'
      },
      {
        name: 'Product 4',
        description: 'Description for Product 4.'
      }
    ];
    $scope.name = 'productList';
});