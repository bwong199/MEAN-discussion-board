
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

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
            Post.findOne({_id: req.body._userId}, function(err, post){
                var comment = new Comment(req.body);
                comment._postId = post._id;
                post.comment.push(comment);
                comment.save(function(err){
                    post.save(function(err){
                        if(err) {
                            console.log('Error');
                        } else {
                            console.log('Successfully added comment', comment);
                            res.redirect('/');
                        }
                    })
                })                
            });
        } 
    }
})();