//var review = angular.module("productReview", []);

productReview.component("starReview", {
  template: '<p>[{{$ctrl.star1}}][{{$ctrl.star2}}][{{$ctrl.star3}}][{{$ctrl.star4}}][{{$ctrl.star5}}]</p>',
  controller: function StarReviewController() {
    let clickedStarCount = 0
    if (clickedStarCount === 0) {
      this.star1 = ' '
      this.star2 = ' '
      this.star3 = ' '
      this.star4 = ' '
      this.star5 = ' '
    } else if (clickedStarCount === 1) {
      this.star1 = '*'
      this.star2 = ' '
      this.star3 = ' '
      this.star4 = ' '
      this.star5 = ' '
    } else if (clickedStarCount === 2) {
      this.star1 = '*'
      this.star2 = '*'
      this.star3 = ' '
      this.star4 = ' '
      this.star5 = ' '
    } else if (clickedStarCount === 3) {
      this.star1 = '*'
      this.star2 = '*'
      this.star3 = '*'
      this.star4 = ' '
      this.star5 = ' '
    } else if (clickedStarCount === 4) {
      this.star1 = '*'
      this.star2 = '*'
      this.star3 = '*'
      this.star4 = '*'
      this.star5 = ' '
    } else if (clickedStarCount === 5) {
      this.star1 = '*'
      this.star2 = '*'
      this.star3 = '*'
      this.star4 = '*'
      this.star5 = '*'
    }
  }
});