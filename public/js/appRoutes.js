angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/math', {
			templateUrl: 'views/default.html',
			controller: 'MathController'
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
		
		.when('/videos', {
			templateUrl: 'views/default.html',
			controller: 'VideoController'	
		})
		
		;

	$locationProvider.html5Mode(true);

}]);