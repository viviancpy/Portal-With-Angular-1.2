mainApp.directive('workspaceView', function () {
    return {
        restrict: 'E',
        controller: 'WorkspaceViewController',
        controllerAs: 'vm',
        templateUrl: '/app/components/dashboard/WorkspaceView/WorkspaceViewTemplate.html'
    }
});