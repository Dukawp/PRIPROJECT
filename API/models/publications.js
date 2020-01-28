const mongoose = require('mongoose')


const Files = require('./files').schema;


var commentSchema = new mongoose.Schema({

    commentAuthor: {type: String, required: true},
    commentText: {type: String, required: true}

},
{
    versionKey: false
});


var publicationsSchema = new mongoose.Schema({

    title: {type: String, required: true},
    text: {type:String, required: true},
    date: String,
    tags: String,
    author: {type: String, required: true},
    authorName: {type: String, required: true},
    target: {type: String, required: true},
    comments: [commentSchema],
    files : [Files]

},
{
    versionKey: false
});

module.exports = mongoose.model('publications', publicationsSchema);