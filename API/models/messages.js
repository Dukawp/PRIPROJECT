const mongoose = require('mongoose')

var messagesSchema = new mongoose.Schema({

    date: String,
    author1: {type: String, required: true},
    author2: {type: String, required: true},
    author2Name: {type: String, required: true},
    text: {type:String, required: true},
    file: [String]
},
{
    versionKey: false
});

module.exports = mongoose.model('messages', messagesSchema);