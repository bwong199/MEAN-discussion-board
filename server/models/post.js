var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({  
    name:String, 
    post:String,
    _userId: {type: Schema.ObjectId, ref: 'User'},
    _topicId: {type: Schema.ObjectId, ref: 'Topic'},
    comment: [{name: String, comment: String}],
    up: [{count: Number}],
    down: [{count: Number}],
});

mongoose.model('Post', PostSchema);
