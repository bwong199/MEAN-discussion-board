var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({  
    name:String, 
    post:String,
    _userId: {type: Schema.ObjectId, ref: 'User'},
    _topicId: {type: Schema.ObjectId, ref: 'Topic'},
    comment: [{name: String, comment: String}],
    up: [{type: Schema.Types.ObjectId, ref: 'Up'}],
    down: [{type: Schema.Types.ObjectId, ref: 'Down'}]
});

mongoose.model('Post', PostSchema);
