angular.module('ShapeGroupService', []).factory('shapegroup', ['$http', function($http) {
        
        var self = this;

	    self.win = false;

        self.shapes = [];

        self.Shape = function(shape, sizeIndex) {
	        return {
		        shape: shape,
                sizeImg: shape + sizeIndex
	        };
        };
        
        self.evaluate = function () {
            //run through the game logic
            
            return self.win;    
        }

	    self.shuffle = function(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            
            return array;
	    };

        self.initialize = function (numberOfCards) {
            self.win = false;
            self.shapes = [];
            
            //create shapes
            
            //shuffle shapes (assign to groups maybe)
            
            return{
                shapes: self.shapes
            };
          
        };

        return {
            shapes: self.shapes,
            initialize: self.initialize,
            evaluate: self.evaluate,
            win: self.win
        };
}]);