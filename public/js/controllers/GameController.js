angular.module('Game', []).controller('GameController', function($scope) {

	$scope.tagline = 'Game controller';	

    $scope.games = [
        {
            id: 'memory',
            img: '/img/memory.jpg',
            action: function (){
                window.location.href = '/games/memory';
            }
        },
        {
            id: 'lemonpop',
            img: '/img/lemonpop.jpg',
            action: function (){
                window.location.href = 'games/lemonpop';
            }
        }
    ]
});

