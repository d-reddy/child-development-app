angular.module('Puzzle', []).controller('PuzzleController', function($scope, $route, puzzle) {
    $scope.title = 'Puzzle Game';
    var self = this;

    self.initialize = function () {
        var values = puzzle.initialize(300,300);
        $scope.gridSpaces = values.gridSpaces;
        $scope.pieces = values.pieces;
        $scope.img = values.img;
    };
    
    self.initialize();

    $scope.handleDrop = function(scope, args) {
        var innerSelf = $(scope.target);
        
        //seems dirty
        var gridSpace = angular.element(scope.target).data().$scope ? angular.element(scope.target).data().$scope.gridSpace : null;
        var piece = angular.element(args.draggable).data().$scope ? angular.element(args.draggable).data().$scope.piece : null;
        
        if (gridSpace && piece) {
            gridSpace.occupiedPieces.push(piece);
            
            if (gridSpace.occupiedPieces.length == 1) {
                $(scope.toElement).addClass('dropped').
                css({
                    top: innerSelf.position().top + 20,
                    left: innerSelf.position().left + 40
                });
            } else {
                $(scope.toElement).addClass('dropped').
                css({
                    top: innerSelf.position().top + 20 + gridSpace.occupiedPieces.length,
                    left: innerSelf.position().left + 40 + gridSpace.occupiedPieces.length,
                    'z-index' : self.maxZIndex()
                });
            
            }
            
            if (puzzle.evaluate()) {
                $scope.img = 'win';
                $('.box').hide();

                setTimeout(function () {
                    puzzle.newPuzzle(300, 300);
                    $route.reload();
                }, 3000);
            }

        }
    }

    $scope.handleOnOut = function(scope, args) {
        var gridSpace = angular.element(scope.target).data().$scope ? angular.element(scope.target).data().$scope.gridSpace : null;
        var piece = angular.element(args.draggable).data().$scope ? angular.element(args.draggable).data().$scope.piece : null;

        if (gridSpace && piece) {

            gridSpace.occupiedPieces = _.filter(gridSpace.occupiedPieces, function(gridPiece) {
                return gridPiece.index !== piece.index;
            });
        }

    };

    self.maxZIndex = function() {
        var best;
        var maxz;
        $('.box').each(function() {
            var z = parseInt($(this).css('z-index'), 10);
            if (!best || maxz < z) {
                best = this;
                maxz = z;
            }
        });

        return maxz+1;
    };
    
    self.newPuzzle = function (scope, args) {
        puzzle.newPuzzle(300, 300);
        self.initialize();
    };

    $scope.newPuzzle = self.newPuzzle;
});