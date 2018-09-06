//var review = angular.module("productReview", []);

productReview.component("starReview", {
  template: 
    '<p ng-click="handleFirstClick(1)">[{{star1}}]</p>' + 
    '<p ng-click="handleFirstClick(2)">[{{star2}}]</p>' +
    '<p ng-click="handleFirstClick(3)">[{{star3}}]</p>' + 
    '<p ng-click="handleFirstClick(4)">[{{star4}}]</p>' +
    '<p ng-click="handleFirstClick(5)">[{{star5}}]</p>',
  controller: function StarReviewController($scope) {
    var clickedStarCount = 0;

    $scope.star1 = ' ';
    $scope.star2 = ' ';
    $scope.star3 = ' ';
    $scope.star4 = ' ';
    $scope.star5 = ' ';

    $scope.handleFirstClick = function(x) {
      clickedStarCount = x;

      if (clickedStarCount === 1) {
        $scope.star1 = '*';
        $scope.star2 = ' ';
        $scope.star3 = ' ';
        $scope.star4 = ' ';
        $scope.star5 = ' ';
      } else if (clickedStarCount === 2) {
        $scope.star1 = '*';
        $scope.star2 = '*';
        $scope.star3 = ' ';
        $scope.star4 = ' ';
        $scope.star5 = ' ';
      } else if (clickedStarCount === 3) {
        $scope.star1 = '*';
        $scope.star2 = '*';
        $scope.star3 = '*';
        $scope.star4 = ' ';
        $scope.star5 = ' ';
      } else if (clickedStarCount === 4) {
        $scope.star1 = '*';
        $scope.star2 = '*';
        $scope.star3 = '*';
        $scope.star4 = '*';
        $scope.star5 = ' ';
      } else if (clickedStarCount === 5) {
        $scope.star1 = '*';
        $scope.star2 = '*';
        $scope.star3 = '*';
        $scope.star4 = '*';
        $scope.star5 = '*';
      };
      console.log('You\'ve rated, ' + x)
    }
  }
});