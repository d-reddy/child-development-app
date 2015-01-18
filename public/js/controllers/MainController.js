angular.module('Main', ['ngMaterial']).controller('MainController', function($scope, $timeout, $mdBottomSheet) {
    $scope.showGridBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
})
.controller('GridBottomSheetCtrl', function ($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Home', icon: 'hangout', location: '/' },
        { name: 'Math', icon: 'mail', location: '/math' },
        { name: 'Spelling', icon: 'message', location: '/spelling' },
        { name: 'Reading', icon: 'copy', location: '/reading' },
        { name: 'Games', icon: 'facebook', location: '/games' },
        { name: 'YouTube', icon: 'twitter', location: '/video' },
    ];
    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
        window.location.href = clickedItem.location;
    };
});;