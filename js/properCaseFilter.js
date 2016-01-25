(function() {
    "use strict";

    angular
        .module('app.filters')
        .filter('properCase', properCase);

    function properCase() {
        return function(input) {
            //return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        }
    }
})();