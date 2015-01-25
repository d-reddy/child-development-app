angular.module('MemoryService', []).factory('memory', ['$http', function($http) {
        
        var self = this;

	    self.win = false;

        self.cards = [];

        self.Card = function(picIndex) {
	        return {
		        flipped: false,
                srcImg: 'img' + picIndex,
                complete: false
	        };
        };
        
        self.evaluate = function () {
            //run through the game logic
            var flippedCards = _.filter(self.cards, function (val) {
                return val.flipped && !val.complete;
            });
            
            //have 2 cards been flipped?
            if (flippedCards.length == 2) {
                if (flippedCards[0].srcImg == flippedCards[1].srcImg) {
                    flippedCards[0].complete = true;
                    flippedCards[1].complete = true;
	                flippedCards[0].srcImg = 'done';
	                flippedCards[1].srcImg = 'done';
                } else {
                    flippedCards[0].flipped = false;
                    flippedCards[1].flipped = false;
                }
            }
            
            var completeCards = _.filter(self.cards, function (val) {
                return val.complete;
            });
            
            if (completeCards.length == self.cards.length) {
	            self.win = true;
            }
            
            return self.win;    
        }

        self.canClick = function (card) {
            
            if (card.complete || card.flipped) {
                return false;
            }

		    //run through the game logic
		    var flippedCards = _.filter(self.cards, function(val) {
			    return val.flipped && !val.complete;
		    });

		    return flippedCards.length < 2;
	    };

        self.cardClick = function (card) {
            card.flipped = !card.flipped;
        };

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
            self.cards = [];
            if (numberOfCards % 4 !== 0) {
                throw "Invalid number of initialization cards.  Count must be even.";
            } 
            else {
                for (var i = 0; i < numberOfCards / 2; i++) {
                    self.cards.push(new self.Card(i));
                }
                
                for (var i = numberOfCards / 2, j = 0; i < numberOfCards; i++, j++) {
                    self.cards.push(new self.Card(j));
                }
                
                //randomize the cards
                self.cards = self.shuffle(self.cards);
            }
            
            return{
                cards: self.cards
            };
          
        };

        return {
            cards: self.cards,
            initialize: self.initialize,
            cardClick: self.cardClick,
            evaluate: self.evaluate,
            canClick: self.canClick,
            win: self.win
        };
}]);