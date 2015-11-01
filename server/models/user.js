var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({  
    name: String,
    topic: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    post: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


mongoose.model('User', UserSchema);
