angular.module('Main', []).controller('MainController', function ($scope) {
    document.ontouchmove = function (event) {
        event.preventDefault();
    }

    $(function () {
        FastClick.attach(document.body);
    });
});