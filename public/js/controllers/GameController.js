angular.module('Game', []).controller('GameController', function($scope) {
    $scope.games = [
        {
            id: 'memory',
            img: '/img/memory.jpg',
            action: function (){
                location.href = '/games/memory';
            }
        },
        {
            id: 'puzzle',
            img: '/img/puzzle.jpg',
            action: function (){
               location.href = '/games/puzzle';
            }
        },
        {
            id: 'inprog2',
            img: '/img/construction.jpg',
            action: function () {
                location.href = '/games/inprog2';
            }
        }
    ]
});

