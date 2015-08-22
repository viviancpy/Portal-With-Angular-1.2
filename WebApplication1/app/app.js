var mainApp = angular.module('mainApp', ['ui.router', 'ngResource', 'ui.bootstrap']);
mainApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            controller: "dashboardController",
            templateUrl: "/app/components/dashboard/dashboardView.html"
        })
        .state('support', {
            url: "/support",
            controller: "supportController",
            templateUrl: "/app/components/support/supportView.html"
        })
        .state('admin', {
            url: "/admin",
            controller: "adminController",
            templateUrl: "/app/components/admin/adminView.html"
        });
});

    //.state('route2', {
    //    url: "/route2",
    //    templateUrl: "route2.html"
    //})
    //.state('route2.list', {
    //    url: "/list",
    //    templateUrl: "route2.list.html",
    //    controller: function ($scope) {
    //        $scope.things = ["A", "Set", "Of", "Things"];
    //    }
    //})