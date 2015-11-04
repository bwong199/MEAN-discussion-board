discussions_app.factory("UserFactory", function($http, $routeParams) {
    var currentUser = {};
    var factory = {};

    factory.getUser = function(callback) {
        $http.get("/user").success(function(output) {
            users2 = output;
            callback(users2);
        });
    };


    factory.searchUser = function(callback) {
        $http.get("/searchUser/" + $routeParams.id).success(function(output) {
            userResult = output;
            callback(userResult);
        });
    };

    factory.getCurrentUser = function(callback){
      callback(currentUser);
    }

    factory.addNewUser = function(info, callback) {
        $http.post("/saveUser", info).success(function() {
            users2.push({name: info.name});
            callback(users2);
        });
    };
    return factory;
});
