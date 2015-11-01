var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DownSchema = new mongoose.Schema({  
	down: Number,
    _postId: {type: Schema.ObjectId, ref: 'Post'}
    
    
});

mongoose.model('Down', DownSchema);
