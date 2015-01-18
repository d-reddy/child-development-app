angular.module('Math', []).controller('MathController', function($scope) {
    $scope.lessons = [
        {
            id: 'addFlash',
            img: '/img/addition.jpg',
            action: function () {
               location.href = '/math/addition';
            }
        },
        {
            id: 'subtractFlash',
            img: '/img/construction.jpg',
            action: function () {
                location.href = '/math/subtraction';
            }
        },
        {
            id: 'multiplicationFlash',
            img: '/img/construction.jpg',
            action: function () {
                location.href = '/math/multiplication';
            }
        }
    ]

});