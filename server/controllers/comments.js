// server controller

// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');




// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
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

        saveComment: function(req, res) {
            
           console.log(req.body);

            Post.findOne({_id: req.body.postId}, function(err, post){

                post.comment.push({name: req.body.name, comment: req.body.comment});
         
                post.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        console.log('Successfully added comments to post', comment);
                        // res.redirect('/');
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
                        }
                    })
                })                
           
            });

        },




    }
})();