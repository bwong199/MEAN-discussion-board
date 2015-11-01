var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function() {
    return {
        show: function(req, res) {
            Topic.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show Topic Errors:", err);
                }
                else {
                    res.json(results);
                }
            });
        },

        showOne: function(req, res) {
            Topic.findOne({_id: req.params.id}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show Topic Errors:", err);
                }
                else {
                    res.json(results);  
                }

            });
        },

        deleteTopic: function(req, res) {
            Topic.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Topic delete error:", err);
                }
                else {
                    console.log("Topic deleted!");
                    res.redirect("/displayTopic");
                }
            });
        },

        saveTopic: function(req, res) {
            User.findOne({_id: req.body._userId}, function(err, user){
                var topic = new Topic(req.body);
                topic._userId = user._id;
                user.topic.push(topic);
                    topic.save(function(err){
                        user.save(function(err){
                            if(err) {
                                console.log('Error');
                            } else {
                                console.log('Successfully added topic', topic);
                                res.redirect('/');
                            }
                        })
                    })                
                });
            }
        }
    })();