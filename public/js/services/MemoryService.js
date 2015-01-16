angular.module('MemoryService', []).factory('Memory', ['$http', function($http) {
        
        var self = this;
        
        self.cards = [];

        function Card(picIndex) {
            var flipped = false;
            var srcImg = picIndex;
        };    

        function initialize(numberOfCards) {
            if (numberOfCards % 2 !== 0) {
                throw "Invalid number of initialization cards.  Count must be even.";
            } 
            else {
                for (var i = 0; i < numberOfCards/2 - 1 ; i++) {
                    self.cards.push(new Card(i));
                }

                for (var i = numberOfCards / 2; i < numberOfCards - 1 ; i++) {
                    self.cards.push(new Card(i));
                }

            }
        };
        
        function cardFlip(card){

        }

        return {
            cards: self.cards,
            initialize: initialize,
            cardFlip: cardFlip
        };

}]);