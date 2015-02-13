angular.module('SubtractionService', []).factory('subtraction', ['$http', function($http) {
        
        var self = this;

	    self.win = false;

        self.num1 = 0;
    	self.num2 = 0;
    	self.choices = [];
        
        self.initialize = function () {
            self.num1 = Math.round(Math.random() * 20) + 1;
            self.num2 = Math.round(Math.random() * self.num1);
            self.choices = [];
            self.choices.push(self.num1 - self.num2);

            for (var i = 0; i < 3;) {
                var wrongChoice = Math.round(Math.random() * 99) + 1;
                
                //if not answer and not in array already then add to array
                if (wrongChoice != (self.num1 - self.num2) && self.choices.indexOf(wrongChoice) == -1) {
                    self.choices.push(wrongChoice);
                    i++;
                }
            }
            
            self.choices = self.shuffle(self.choices);

            return {
                num1: self.num1,
                num2: self.num2,
                choices: self.choices
            };
        }

        self.shuffle = function (array) {
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

	    self.evaluate = function(choice) {
            if (choice == (self.num1 - self.num2)) {
	            self.win = true;
            } else {
                self.win = false;
            }

		    return self.win;
        };
        
       return {
            evaluate: self.evaluate,
            initialize: self.initialize
        };
}]);