
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = (function() {
    return {
        show: function(req, res) {
            Topic.findOne({_id: req.params.id})
                .populate('post')
                .populate('comment')
                .exec(function(err, result) {
                res.json(result)
            });
        },

        showComment: function(req, res) {
            Topic.findOne({_id: req.params.id})
                .populate('post')
                .exec(function(err, result) {
                res.json(result)
            });
        },

        showLike: function(req, res) {
            Topic.findOne({_id: req.params.id})
                .populate('post')
                .exec(function(err, result) {
                res.json(result)
            });
        },

        savePost: function(req, res) {
            Topic.findOne({_id: req.body._topicId}, function(err, topic){
                var post = new Post(req.body);
                post._topicId = topic._id;
                topic.post.push(post);
                post.save(function(err){
                    topic.save(function(err){
                        if(err) {
                            console.log('Error');
                        } else {
                            console.log('Successfully added posts to topic', post);
                            res.redirect('/');
                        }
                    })
                })                
            });

            User.findOne({_id: req.body._userId}, function(err, user){
                var post = new Post(req.body);
                post._userId = user._id;
                user.post.push(post);
                post.save(function(err){
                    user.save(function(err){
                        if(err) {
                            console.log('Error');
                        } else {
                            console.log('Successfully added posts to user', post);
                            res.redirect('/');
                        }
                    })
                })                
            });
        },

        saveComment: function(req, res) {
            Post.findById(req.params.id, function(err, post){
                console.log(post);
                console.log(req.body);
                
                var comment = req.body; 
                post.comment.push(comment);
                post.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        console.log('Successfully added comment to post', comment);
                        res.redirect('/');
                    }
                })                
            });

            User.findOne({_id: req.body.userId}, function(err, user){
            var comment = new Comment(req.body);
            comment._userId = user._id;
            user.comment.push(comment);
            comment.save(function(err){
                user.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        console.log('Successfully added comments to user', comment);
                        res.redirect('/');
                        }
                    })
                })                
           
            });

        
        },

        saveUp: function(req, res) {
            Post.findById(req.params.id, function(err, post){
                var up = req.body; 

                post.up.push(up);
                post.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        console.log('Successfully added upvote', up);
                        res.redirect('/');
                    }
                })                
            });
        }, 

        saveDown: function(req, res) {


            Post.findById(req.params.id, function(err, post){
                var down = req.body; 

                post.down.push(down);
                post.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        console.log('Successfully added downvote', down);
                        res.redirect('/');
                    }
                })                
            });
        }, 


    }
})();