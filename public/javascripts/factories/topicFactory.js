
discussions_app.factory("topicFactory", function($http, $routeParams) {
    var factory = {};
    factory.getTopic = function(callback) {

        $http.get("/topic" ).success(function(output) {
            topics = output;
            callback(topics);
        });
    };

    factory.getOneTopic = function(callback) {
        $http.get("/oneTopic/"  + $routeParams.id).success(function(output) {
            oneTopic = output;
            callback(oneTopic);
        });
    };

    factory.addTopic = function(info, callback) {
        $http.post("/saveTopic", info).success(function() {
            topics.push({name: info.name, age: info.description, category: info.category});
            callback(topics);
        });
    };
    return factory;
});