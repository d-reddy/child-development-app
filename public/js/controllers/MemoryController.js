angular.module('Memory', []).controller('MemoryController', function ($scope, memory) {
    
    memory.initialize(12);

	$scope.cards = memory.cards;

    $scope.cardClick = function (card, $event) {
        
        if (memory.canClick()) {
            memory.cardClick(card);
            setTimeout(function () {
                memory.evaluate();
                $scope.$apply();

                if (memory.win) {
	                
                }

            }, 3000);
	        
        }
    }
});

