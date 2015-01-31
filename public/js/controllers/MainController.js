angular.module('Main', []).controller('MainController', function ($scope) {
    document.ontouchmove = function (event) {
        event.preventDefault();
    }

    $(function () {
        FastClick.attach(document.body);
    });

    //var iframe = document.createElement('iframe');
    //iframe.style.display = "none";
    //iframe.src = 'http://www.elearnenglishlanguage.com/sounds/a.wav';
    //document.body.appendChild(iframe);
});