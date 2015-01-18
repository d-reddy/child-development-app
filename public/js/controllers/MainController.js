angular.module('Main', ['ngMaterial']).controller('MainController', function($scope, $timeout, $mdBottomSheet) {
    $scope.title = 'Menu';
    alert('this works');
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
        { name: 'Math', icon: 'mail', location: 'math' },
        { name: 'Spelling', icon: 'message', location: 'spelling' },
        { name: 'Reading', icon: 'copy', location: 'reading' },
        { name: 'Games', icon: 'facebook', location: 'games' },
        { name: 'YouTube', icon: 'twitter', location: 'video' },
    ];
    $scope.listItemClick = function ($index) {

        var clickedItem = $scope.items[$index];
        alert('test');
        $mdBottomSheet.hide(clickedItem);
        alert('test1');

        location.href = location.href + clickedItem.location;
    };
});;