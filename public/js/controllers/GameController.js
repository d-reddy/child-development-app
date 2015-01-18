angular.module('Game', []).controller('GameController', function($scope) {
    $scope.games = [
        {
            id: 'memory',
            img: '/img/memory.jpg',
            action: function (){
                location.href = location.href + 'games/memory';
            }
        },
        {
            id: 'inprog1',
            img: '/img/construction.jpg',
            action: function (){
               location.href = location.href + 'games/inprog1';
            }
        },
        {
            id: 'inprog2',
            img: '/img/construction.jpg',
            action: function () {
                location.href = location.href + 'games/inprog2';
            }
        }
    ]
});

