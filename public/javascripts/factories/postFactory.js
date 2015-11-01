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

    factory.addPost = function(info, callback) {
        $http.post("/savePost/" + $routeParams.id, info).success(function() {
            posts.push({name: info.name, age: info.description, category: info.category});
            callback(posts);
        });
    };

    factory.addComment = function(info, callback) {
        $http.post("/saveComment" , info).success(function() {
            comments.push({name: info.name, age: info.description, category: info.category});
            callback(posts);
        });
    };
    return factory;
});