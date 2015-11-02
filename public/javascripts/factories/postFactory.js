discussions_app.factory("postFactory", function( $http, $routeParams) {
    var factory = {};

    factory.getPost = function(callback) {
        $http.get("/post/" + $routeParams.id).success(function(output) {
            posts = output;
            callback(posts);
        });
    };


    factory.getComment = function(callback) {
        $http.get("/comment/" + $routeParams.id).success(function(output) {
            callback(output);
        });
    };

    factory.getLike = function(callback) {
        $http.get("/like/" + $routeParams.id).success(function(output) {
            callback(output);
        });
    };

    factory.addPost = function(info, callback) {
        $http.post("/savePost/" + $routeParams.id, info).success(function() {
        });
    };

    factory.addComment = function(id, info, callback) {

        $http.post("/saveComment/" + id , info).success(function() {
        });
    };

    factory.addUp = function(id, info, callback) {

        $http.post("/saveUp/" + id, info).success(function() {
        });
    };

    factory.addDown = function(id, info, callback) {
        console.log(info);
        $http.post("/saveDown/" + id, info).success(function() {
        });
    };
    return factory;
});