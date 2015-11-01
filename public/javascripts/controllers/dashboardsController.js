discussions_app.controller("DashboardController", function($scope, topicFactory, UserFactory) {

    UserFactory.getCurrentUser(function(info){
      $scope.current_user = info;
    });

    topicFactory.getTopic(function (data) {
        $scope.topics = data;
    });

    UserFactory.getUser(function (data) {
        $scope.users2 = data;
    });

    $scope.addTopic = function() {

        $scope.new_topic.name = $scope.users2.name

        $scope.new_topic._userId = $scope.users2._id

        topicFactory.addTopic($scope.new_topic, function () {

            topicFactory.getTopic(function (data) {

                $scope.topics = data;

            });
            $scope.new_topic = {};
        });
    };
});