var app = angular.module('PrototypeApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function ($routeProvider) {

    $routeProvider
        .when("/admin", {
            controller: "adminController",
            templateUrl: "/app/components/admin/adminView.html"
        })
        .when("/support", {
            controller: "supportController",
            templateUrl: "/app/components/support/supportView.html"
        })
        .when("/dashboard", {
            controller: "dashboardController",
            templateUrl: "/app/components/dashboard/dashboardView.html"
        });
    $routeProvider.otherwise({ redirectTo: "/dashboard" });

});