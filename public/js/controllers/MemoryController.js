angular.module('Memory', []).controller('MemoryController', function ($scope, $route, memory) {
    
    var result = memory.initialize(12);

	$scope.cards = result.cards;

    $scope.cardClick = function (card, $event) {
        
        if (memory.canClick(card)) {
            memory.cardClick(card);
            setTimeout(function () {
                var win = memory.evaluate();
                $scope.$apply();

                if (win) {
                    setTimeout(function () {
                        $route.reload();
                    }, 1200);
                }

            }, 3000);
	        
        }
    }
});
