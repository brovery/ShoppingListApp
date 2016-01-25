(function(){
    'use strict';

    angular.module('homeDirectives', [])
        .directive('tdItem', tdItem)
        .directive('tdNonefound', tdNonefound)
        .directive('modal', showModal);

    function tdItem() {
        return {
            restrict: 'A',
            templateUrl: 'templates/tdItem.html'
        };
    }

    function tdNonefound() {
        return {
            restrict: 'A',
            template: '<td><i>No items in this list</i></td>'
        };
    }

    function showModal() {

    }


}());
