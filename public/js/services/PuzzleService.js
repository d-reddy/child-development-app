angular.module('PuzzleService', []).factory('puzzle', ['$http', function($http) {
        
        var self = this;
        
        self.numPuzzles = 7;
        self.win = false;
        self.puzzleIndex = (Math.round(Math.random() * (self.numPuzzles-1)));
        
        self.pieces = [];
        self.gridSpaces = [];
        self.img = 'img' + self.puzzleIndex;

        self.GridSpace = function(index) {
            return {
                index: index,
                occupiedPieces: []
            }
        }

        self.Piece = function (index, numPieces, numPerRow, pieceSize) {
            
            var rowOfPiece = Math.floor(index / numPerRow);
            var colOfPiece = index < numPerRow ? index : index % numPerRow;

            this.clipTop = rowOfPiece * pieceSize;
            this.clipBottom = this.clipTop + pieceSize;
            this.clipLeft = colOfPiece * pieceSize;
            this.clipRight = this.clipLeft + pieceSize;

            return {
                index: index,
                clipTop: this.clipTop,
                clipBottom: this.clipBottom,
                clipLeft: this.clipLeft,
                clipRight: this.clipRight  
            };
        };
        
        self.initialize = function (length, width) {
            
            self.win = false;
            self.gridSpaces = [];
            self.pieces = [];

            if (length !== width) {
                throw "Must be a square image.";
            }
            
            if (length % 100 !== 0) {
                throw "Image must allow for 100x100 square pieces.";
            }

            var numPieces = ((length / 100) * (width / 100));
            var numPerRow = length / 100;
            
            //initialize grid spaces and pieces
            for (var i = 0; i < numPieces; i++) {
                self.gridSpaces.push(new self.GridSpace(i));
                self.pieces.push(new self.Piece(i, numPieces, numPerRow, 100));
            }            
            
            self.pieces = self.shuffle(self.pieces);

            return {
                pieces: self.pieces,
                gridSpaces: self.gridSpaces,
                img: self.img
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
            
            var correctGridSpaces = _.filter(self.gridSpaces, function (gridSpace) {
                if (gridSpace.occupiedPieces.length == 1) {
                    if (gridSpace.occupiedPieces[0].index == gridSpace.index) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            });
            
            if (correctGridSpaces.length == self.pieces.length) {
                self.win = true;
            } else {
                self.win = false;
            }

            return self.win;
        };
        
        self.nextPuzzle = function (){
            self.puzzleIndex++;

            if (self.puzzleIndex > (self.numPuzzles-1)) {
                self.puzzleIndex = 0;
            }

            return self.puzzleIndex;
        }
        
       return {
            evaluate: self.evaluate,
            initialize: self.initialize,
            nextPuzzle: self.nextPuzzle
        };
}]);