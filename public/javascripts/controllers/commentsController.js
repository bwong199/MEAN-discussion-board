
// Now lets create a controller with some hardcoded data!
discussions_app.controller("postsController", function($scope, topicFactory, postFactory, $routeParams) {


    postFactory.getPost(function (data) {
        $scope.posts = data;
        console.log($scope.posts)
    });

    topicFactory.getTopic(function (data) {
        $scope.topics = data;
    });

    topicFactory.getOneTopic(function (data) {

        $scope.oneTopic = data;
        // console.log($scope.oneTopic)

    });


    $scope.addPost = function() {

       

        postFactory.addPost($scope.new_post, function () {

            postFactory.getPost(function (data) {

                $scope.posts = data;

            });

            $scope.new_post = {};

        });

    };

     $scope.addComment = function() {

        
        postFactory.addComment($scope.new_comment, function () {

            postFactory.getComment(function (data) {

                $scope.comments = data;

            });

            $scope.new_comment = {};

        });

    };


});