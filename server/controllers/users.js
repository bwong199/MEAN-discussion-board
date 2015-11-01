var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
    return {

        showOne: function(req, res) {

            User.findOne({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show User Errors:", err);
                }
                else {
                    
                    res.json(results);
                    // console.log(results)
                }

            }).sort({_id: -1}).limit(1);

        },

        showUser: function(req, res) {
            
           User.findOne({_id: req.params.id})
            .populate('topic')
            .populate('post')
            .populate('comment')
         
            .exec(function(err, result) {
            res.json(result)
        });

        },

        saveUser: function(req, res) {
            // console.log('hello');

            var user = new User(req.body);

            // console.log(req.body)

            user.save(function(err) {

                if(err) {
                    console.log("Adding user error:", err);
                    res.redirect("/");
                }
                else {

                    console.log("User POSTED", user);

                }

            });

        },


        deleteUser: function(req, res) {

            User.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("User delete error:", err);
                }
                else {
                    console.log("User deleted!");
                    res.redirect("/");
                }



            });

        }

    }
})();