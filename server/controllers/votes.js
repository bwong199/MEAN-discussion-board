// server controller

// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var Up = mongoose.model('Up');
var Down = mongoose.model('Down');


var count = 0; 

// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        show: function(req, res) {


            // Show friend documents from the
            // "FullMean" Mongo database
        //   Topic.find({_id: req.params.id})
        // .populate('post')
        //   .exec(function(err, posts) {
        //     // console.log(posts);
        //     // res.send(messages);
        //     res.json(posts);
        // });

        },

        saveUp: function(req, res) {

          
            if (!(req.body.userId == req.body.postAuthorId)){
                console.log("save up vote")
            
            Post.findOne({_id: req.params.id}, function(err, post){
            // data from form on the front end
            //  set the reference like this:

                var up = new Up(req.body);

                up._postId = post._id;

                post.up.push(up);
            // now save both to the DB
                up.save(function(err){
                    post.save(function(err){
                        if(err) {
                            console.log('Error');
                        } else {
                            console.log('Successfully added up vote', up);
                            // res.redirect('/');
                        }
                    })
                })                
            });
            } else {
            console.log("You can't vote your own post")
        }
        },

         saveDown: function(req, res) {

            if (!(req.body.userId == req.body.postAuthorId)){
                console.log("save down vote")
            Post.findOne({_id: req.params.id}, function(err, post){
            // data from form on the front end
            //  set the reference like this:

                var down = new Down(req.body);

                down._postId = post._id;

                post.down.push(down);
            // now save both to the DB
                down.save(function(err){
                    post.save(function(err){
                        if(err) {
                            console.log('Error');
                        } else {
                            console.log('Successfully added down vote', down);
                            // res.redirect('/');
                        }
                    })
                })                
            });
        } else {
            console.log("You can't vote your own post")
        }

    }

}
})();