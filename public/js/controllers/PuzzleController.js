angular.module('Puzzle', []).controller('PuzzleController', function($scope, $route, puzzle) {
    $scope.title = 'Puzzle Game';
    var self = this;

    self.initialize = function () {
        var values = puzzle.initialize(300,300);
        $scope.gridSpaces = values.gridSpaces;
        $scope.pieces = values.pieces;
        $scope.img = values.img;
    }();

    $(function () {
        
        $(document).on('document.update.learned', function () {
            
            $('.box').each(function () {
                var innerSelf = $(this);
                
                if (innerSelf.data("box-setup")) {
                    return;
                }
                
                innerSelf.data("box-setup", true);
                
                innerSelf.draggable();
            });
            
            $('div', '#grid').each(function () {
                var innerSelf = $(this);
                
                if (innerSelf.data("grid-setup")) {
                    return;
                }
                
                innerSelf.data("grid-setup", true);
                
                innerSelf.droppable({
                    drop: function (event, ui) {
                        $(ui.draggable).addClass('dropped').
                        css({
                            top: innerSelf.position().top + 20,
                            left: innerSelf.position().left + 100
                        });
                    }
                });
            });
      
        });
    });

    //$('#box').draggable();
    
    //$('div', '#grid').each(function () {
    //    var $div = $(this);
    //    $div.droppable({
    //        drop: function (event, ui) {
    //            $(ui.draggable).addClass('dropped').
    //            css({
    //                top: $div.position().top+20,
    //                left: $div.position().left+100
    //            });
    //            //$('#grid').addClass('focus');
    //        }
    //    });
    //});
});