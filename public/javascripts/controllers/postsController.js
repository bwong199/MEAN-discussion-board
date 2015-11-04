discussions_app.controller("PostsController", function($scope, topicFactory, postFactory, $routeParams, UserFactory) {

    postFactory.getPost(function (data) {   
        console.log(data);
        $scope.posts = data;
    });

    postFactory.getComment(function (data) {
        $scope.comments = data;

    });

    topicFactory.getTopic(function (data) {
        $scope.topics = data;
    });

    topicFactory.getOneTopic(function (data) {
        $scope.oneTopic = data;
    });

    UserFactory.getUser(function (data) {
        $scope.users = data;
    });

    UserFactory.getCurrentUser(function(info){
      $scope.current_user = info;
    });

    UserFactory.getUser(function (data) {
        $scope.users2 = data;
    });



    $scope.addPost = function() {

        $scope.new_post.name = $scope.users2.name;

        $scope.new_post._userId = $scope.users2._id;

        $scope.new_post._topicId =  $scope.oneTopic._id;

        postFactory.addPost($scope.new_post, function () {

            postFactory.getPost(function (data) {
                $scope.posts = data;
            });
            $scope.new_post = {};
        });
    };

    $scope.addComment = function(id, comment, userName, userId) {

        var commentValue = comment.comment;

        var newComment = {comment: commentValue, name: userName, userId: userId};

        postFactory.addComment(id, newComment, function () {

            postFactory.getComment(function (data) {
                $scope.comments = data;
            });

            $scope.new_comment = {};
        });
    };

    $scope.addUp = function(id, up) {

        postFactory.addUp(id, up, function () {

            postFactory.getLike(function (data) {
                $scope.ups = data;
            });

            $scope.new_up = {};
        });
    };

    $scope.addDown = function(id, like) {

        postFactory.addDown(id, like, function () {

            postFactory.getUp(function (data) {
                $scope.downs = data;
            });

            $scope.new_down = {};
        });
    };
});