discussions_app.controller("UsersController", function($scope, $location,  UserFactory) {
    UserFactory.getUser(function (data) {
        $scope.users2 = data;
    });

    UserFactory.searchUser(function (data) {
        $scope.userResult = data;
    });

    $scope.addUser = function() {
        UserFactory.addNewUser($scope.new_user2, function () {
            UserFactory.getUser(function (data) {
                $scope.users2 = data;
            });
            $scope.new_user2 = {};
        });
    };
});
