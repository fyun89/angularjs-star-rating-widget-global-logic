//var review = angular.module("productReview", []);

productReview.component("starReview", {
  template: 
    '<p ng-click="handleFirstClick(1)">[{{$ctrl.star1}}]</p>' + 
    '<p ng-click="handleFirstClick(2)">[{{$ctrl.star2}}]</p>' +
    '<p ng-click="handleFirstClick(3)">[{{$ctrl.star3}}]</p>' + 
    '<p ng-click="handleFirstClick(4)">[{{$ctrl.star4}}]</p>' +
    '<p ng-click="handleFirstClick(5)">[{{$ctrl.star5}}]</p>',
  controller: function StarReviewController($scope) {
    var clickedStarCount = 0;

    if (clickedStarCount === 0) {
      this.star1 = ' ';
      this.star2 = ' ';
      this.star3 = ' ';
      this.star4 = ' ';
      this.star5 = ' ';
    } else if (clickedStarCount === 1) {
      this.star1 = '*';
      this.star2 = ' ';
      this.star3 = ' ';
      this.star4 = ' ';
      this.star5 = ' ';
    } else if (clickedStarCount === 2) {
      this.star1 = '*';
      this.star2 = '*';
      this.star3 = ' ';
      this.star4 = ' ';
      this.star5 = ' ';
    } else if (clickedStarCount === 3) {
      this.star1 = '*';
      this.star2 = '*';
      this.star3 = '*';
      this.star4 = ' ';
      this.star5 = ' ';
    } else if (clickedStarCount === 4) {
      this.star1 = '*';
      this.star2 = '*';
      this.star3 = '*';
      this.star4 = '*';
      this.star5 = ' ';
    } else if (clickedStarCount === 5) {
      this.star1 = '*';
      this.star2 = '*';
      this.star3 = '*';
      this.star4 = '*';
      this.star5 = '*';
    };
    $scope.handleFirstClick = function(x) {
      clickedStarCount = x;
      console.log('You\'ve rated, ' + x)
    }
  }
});