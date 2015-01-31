angular.module('Main', []).controller('MainController', function ($scope) {
    document.ontouchmove = function (event) {
        event.preventDefault();
    }

    $(function () {
        FastClick.attach(document.body);
    });

    $(document).ready(function () {
        $(window)
          .bind('orientationchange', function () {
            if (window.orientation) {
                if (window.orientation % 180 != 0) {
                    $(document.body).css("-webkit-transform-origin", "")
                       .css("-webkit-transform", "");
                } 
                else {
                    if (window.orientation > 0) { //clockwise
                        $(document.body).css("-webkit-transform-origin", "200px 190px")
                       .css("-webkit-transform", "rotate(-90deg)");
                    }
                    else {
                        $(document.body).css("-webkit-transform-origin", "280px 190px")
                       .css("-webkit-transform", "rotate(90deg)");
                    }
                }
            }
          
        })
          .trigger('orientationchange');
    });

    //var iframe = document.createElement('iframe');
    //iframe.style.display = "none";
    //iframe.src = 'http://www.elearnenglishlanguage.com/sounds/a.wav';
    //document.body.appendChild(iframe);
});