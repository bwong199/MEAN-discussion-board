var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TopicSchema = new mongoose.Schema({
    topic: String,
    name:String,
    description: String, 
    category: String,
    _userId: {type: Schema.ObjectId, ref: 'User'},
    post: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    
    
});


mongoose.model('Topic', TopicSchema);
