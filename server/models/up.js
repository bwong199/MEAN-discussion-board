var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UpSchema = new mongoose.Schema({  
	up: Number,
    _postId: {type: Schema.ObjectId, ref: 'Post'}
    
    
});

mongoose.model('Up', UpSchema);
