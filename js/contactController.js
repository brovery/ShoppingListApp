(function(){
    'use strict';

    angular.module('contactController', [])
        .controller('contactController', contactController);

    contactController.$inject = ["$location"];

    function contactController($location)
    {
        //console.log("In contactController");
        var contact = this;
        contact.send = send;

        function send() {
            console.log("In Send Function");
        }
    }

}());
