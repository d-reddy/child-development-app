angular.module('Subtraction', []).controller('SubtractionController', function($scope, $route, subtraction) {
    var self = this;
    
    self.canCount = false;

    self.initialize = function () {
        var values = subtraction.initialize();
        self.canCount = false;
        $scope.num1 = values.num1;
        $scope.num2 = values.num2;
        $scope.choices = values.choices;
        $("[data-choice]").addClass("disabled");
        $(".card").removeClass("flipped");
        $scope.counter = values.num2;

        setTimeout(function () {
            if ($scope.num2 > 0) {
                for (var i = 0; i < $scope.num2; i++) {
                    $('#card-' + i).fadeTo(3600, .05, function () {
                        if (i == $scope.num2) {
                            self.canCount = true;
                        }
                    });
                }
            } else {
                self.canCount = true;
            }
        }, 900);
    }();
    
    $scope.range1 = function () {
        var input = [];
        for (var i = 1; i <= $scope.num1; i += 1) input.push(i);
        return input;
    }();
    
    $scope.burfderClick = function (card, $event, $index) {
        if (self.canCount && $index == $scope.counter) {
            var closestCard = $($event.target).closest(".card");
            if (!$(closestCard).hasClass("flipped")) {
                closestCard.toggleClass("flipped");
                $($event.target).next(".back").find('p:first').text($scope.counter-$scope.num2+1);
                $scope.counter++;
            }
            
            if ($scope.counter == $scope.num1) {
                $("[data-choice]").removeClass("disabled");
                $("[data-wrong]").addClass("disabled");
            }
        }
    };
    
    $scope.answerClick = function (choice, $event) {
        if (self.canCount) {
            if (subtraction.evaluate(choice)) {
                $($event.target).addClass("btn-success");
                setTimeout(function () {
                    $route.reload();
                }, 1000);
            } 
            else {
                $($event.target).addClass("btn-danger");
                $($event.target).attr('data-wrong', 'true');;
                
                if (($scope.num1 - $scope.num2) != 0) {
                    $("[data-choice]").addClass("disabled");
                    $(".card").removeClass("flipped");
                    $scope.counter = $scope.num2;
                }
            }
        }
    }
});