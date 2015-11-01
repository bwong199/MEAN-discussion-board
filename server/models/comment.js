var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({  
	name: String, 
	comment: String,
    _postId: {type: Schema.ObjectId, ref: 'Post'},
    _userId: {type: Schema.ObjectId, ref: 'User'},   
});

mongoose.model('Comment', CommentSchema);
