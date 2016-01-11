(function(){
    'use strict';

    angular.module('homeDirectives', [])
        .directive('tdItem', tdItem);

    function tdItem() {
        return {
            restrict: 'A',
            templateUrl: 'templates/tdItem.html'
        };
    }


}());
