angular.module('ShapeGroup', []).controller('ShapeGroupController', function ($scope, $route, shapegroup) {
    
   var sort = Sortable.create($('#multi')[0], {
        animation: 150,
        draggable: '.tile',
        handle: '.tile__name'
    });
    
    $.each($('.tile__list'), function (i, el) {
        Sortable.create(el, {
            group: 'photo',
            animation: 150
        });
    });

    //sort.destroy();
       
});
