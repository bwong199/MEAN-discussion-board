discussions_app.controller("ProfilesController", function($scope, $routeParams, UserFactory) {

     UserFactory.getUser(function (data) {
        $scope.users2 = data;

    });

});