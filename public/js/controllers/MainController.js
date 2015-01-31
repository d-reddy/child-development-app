angular.module('Main', []).controller('MainController', function ($scope) {
    document.ontouchmove = function (event) {
        event.preventDefault();
    }

    $(function () {
        FastClick.attach(document.body);
    });

    $(function () {
        function reorient(e) {
            var portrait = (window.orientation % 180 == 0);
            $("body > div").css("-webkit-transform", portrait ? "rotate(-90deg)" : "");
        }
        window.onorientationchange = reorient;
        window.setTimeout(reorient, 0);
    });

    //var iframe = document.createElement('iframe');
    //iframe.style.display = "none";
    //iframe.src = 'http://www.elearnenglishlanguage.com/sounds/a.wav';
    //document.body.appendChild(iframe);
});