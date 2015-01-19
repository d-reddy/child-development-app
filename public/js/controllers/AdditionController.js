angular.module('Addition', []).controller('AdditionController', function($scope, addition) {
	$scope.counter = 1;
    
    $scope.title = 'Math time';
	$scope.num1 = addition.num1;
	$scope.num2 = addition.num2;
    $scope.choices = addition.choices;

    $scope.range1 = function () {
        var input = [];
        for (var i = 1; i <= $scope.num1; i += 1) input.push(i);
        return input;
    }();

    $scope.range2 = function () {
        var input = [];
        for (var i = 1; i <= $scope.num2; i += 1) input.push(i);
        return input;
    }();

    $scope.burfderClick = function (card, $event) {
        var closestCard = $($event.target).closest(".card");
        if (!$(closestCard).hasClass("flipped")) {
            closestCard.toggleClass("flipped");
	        $($event.target).next(".back").find('p:first').text($scope.counter);
            $scope.counter++;
        }

        if ($scope.counter == ($scope.num1 + $scope.num2 + 1)) {
            $("[data-choice]").removeClass("disabled");
        }
       
    }

    $scope.answerClick = function (choice, $event) {
        if (addition.evaluate(choice)) {
	        alert('You won! Good Job!');
	        //reset app nicely
        } 
        else {
            $("[data-choice]").addClass("disabled");
            $(".card").removeClass("flipped");
	        $scope.counter = 1;
        }

    }

	var initialize = function() {

	};
});