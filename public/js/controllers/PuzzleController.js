angular.module('Puzzle', []).controller('PuzzleController', function($scope, $route, puzzle) {
    $scope.title = 'Puzzle Game';

    $('#box').draggable();

    $('div', '#grid').each(function() {
        var $div = $(this);
        $div.droppable({
            drop: function() {
                $('#box').addClass('dropped').
                css({
                    top: $div.offset().top,
                    left: $div.offset().left
                });
                $('#grid').addClass('focus');
            }
        });
    });
	//$scope.counter = 1;
    
 //   var self = this;
    
 //   self.initialize = function () {
 //       var values = addition.initialize();
 //       $scope.num1 = values.num1;
 //       $scope.num2 = values.num2;
 //       $scope.choices = values.choices;
 //       $("[data-choice]").addClass("disabled");
 //       $(".card").removeClass("flipped");
 //       $scope.counter = 1;
 //   }();
    
 //   self.canClick = function (index, numId) {
 //       if (numId === 'num1' && self.clickableIndexG1 <= ($scope.num1 - 1) && index == self.clickableIndexG1) {
 //           self.clickableIndexG1++;
 //           return true;
 //       }
 //       else if (numId === 'num2' && self.clickableIndexG1 == $scope.num1 && self.clickableIndexG2 <= ($scope.num2 - 1) && index == self.clickableIndexG2) {
 //           self.clickableIndexG2++;
 //           return true;
 //       }
 //       return false;
 //   };

 //   $scope.range1 = function () {
 //       var input = [];
 //       for (var i = 1; i <= $scope.num1; i += 1) input.push(i);
 //       return input;
 //   }();
    
 //   $scope.burfderClick = function (card, $event, $index, numId) {
 //       if (self.canClick($index, numId)) {
 //           var closestCard = $($event.target).closest(".card");
 //           if (!$(closestCard).hasClass("flipped")) {
 //               closestCard.toggleClass("flipped");
 //               $($event.target).next(".back").find('p:first').text($scope.counter);
 //               $scope.counter++;
 //           }
            
 //           if ($scope.counter == ($scope.num1 + $scope.num2 + 1)) {
 //               $("[data-choice]").removeClass("disabled");
 //               $("[data-wrong]").addClass("disabled");
 //           }
 //       }
 //   }

});