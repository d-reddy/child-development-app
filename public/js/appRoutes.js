angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

		// home page
		.when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

		.when('/math', {
            templateUrl: 'views/math/math.html',
            controller: 'MathController'
        })

        .when('/math/addition', {
            templateUrl: 'views/math/addition.html',
            controller: 'AdditionController'
        })

         .when('/math/subtraction', {
            templateUrl: 'views/math/subtraction.html',
            controller: 'SubtractionController'
        })

		.when('/spelling', {
            templateUrl: 'views/default.html',
            controller: 'SpellingController'
        })

		.when('/reading', {
            templateUrl: 'views/default.html',
            controller: 'ReadingController'
        })

		.when('/games', {
            templateUrl: 'views/games/games.html',
            controller: 'GameController'
        })

   		.when('/games/memory', {
            templateUrl: 'views/games/memory.html',
            controller: 'MemoryController'
        })

        .when('/games/puzzle', {
            templateUrl: 'views/games/puzzle.html',
            controller: 'PuzzleController'
        })

         .when('/games/shapegroup', {
            templateUrl: 'views/games/shapegroup.html',
            controller: 'ShapeGroupController'
        })

		.when('/videos', {
			templateUrl: 'views/default.html',
			controller: 'VideoController'	
		})
		
		;

	$locationProvider.html5Mode(true);

}]);