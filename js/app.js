(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "basicController",
        "listService",
        "homeDirectives",
        "app.filters",
        "ngAnimate",
        "firebase"
    ])

    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: "basicController as bc"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "templates/about.html"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());
