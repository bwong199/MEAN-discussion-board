var users = require("./../controllers/users.js");

var topics = require("./../controllers/topics.js");

var posts = require("./../controllers/posts.js");

var comments = require("./../controllers/comments.js");

var votes = require("./../controllers/votes.js");

module.exports = function(app) {

    app.post("/main", function(req, res) {

        req.session.name = req.body.name;

        res.render("/dashboard", {name: req.session.name} );
    });

    app.get("/", function(req, res) {
       
        res.render("index");
    });

    app.get("/showTopic", function(req, res) {

        res.render("main", {name: req.session.name} );
    });

    app.get("/topic", function(req, res) {

        topics.show(req, res);
    });

    app.get("/comment", function(req, res) {

        comments.show(req, res);
    });

    app.get("/oneTopic/:id", function(req, res) {

        topics.showOne(req, res);
    });


    app.get("/post/:id", function(req, res) {

        posts.show(req, res);
    });

    app.post("/savePost/:id", function(req, res) {
 
        posts.savePost(req, res);
    });

    app.post("/saveComment/:id", function(req, res) {
      
        posts.saveComment(req, res);
    });

    app.post("/saveUp/:id", function(req, res) {   

        posts.saveUp(req, res);
    });

    app.post("/saveDown/:id", function(req, res) {   

        posts.saveDown(req, res);
    });

    app.get("/comment/:id", function(req, res) {
        
        posts.showComment(req, res);
    });

    app.get("/like/:id", function(req, res) {
        
        posts.showLike(req, res);
    });

    app.post("/up/:id", function(req, res) {

        votes.saveUp(req, res);
    });

    app.post("/down/:id", function(req, res) {

        votes.saveDown(req, res);
    });

    app.get("/user", function(req, res) {

        users.showOne(req, res);
    });

    app.get("/searchUser/:id", function(req, res) {

        users.showUser(req, res);
    });

     app.post("/saveUser", function(req, res) {

        users.saveUser(req, res);
    });

    app.post("/saveTopic", function(req, res) {

        topics.saveTopic(req, res);
    });

    app.get("/topic/:id", function(req, res) {

        topics.showOne(req, res);
    });

    app.get("/deleteTopic/:id", function(req, res) {

        topics.deleteTopic(req, res);
    });

};