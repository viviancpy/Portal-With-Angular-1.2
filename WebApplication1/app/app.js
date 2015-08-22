var app = angular.module('PrototypeApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function ($routeProvider) {

    $routeProvider
        .when("/alerts", {
            controller: "alertsController",
            templateUrl: "/app/views/alertsMain.html"
        })
        .when("/support", {
            controller: "supportController",
            templateUrl: "/app/views/supportMain.html"
        })
        .when("/dashboard", {
            controller: "dashboardController",
            templateUrl: "/app/views/dashboardMain.html"
        });
    $routeProvider.otherwise({ redirectTo: "/dashboard" });

});