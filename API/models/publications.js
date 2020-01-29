const mongoose = require('mongoose')



var commentSchema = new mongoose.Schema({

    commentAuthor: {type: String, required: true},
    commentText: {type: String, required: true}

},
{
    versionKey: false
});


var publicationsSchema = new mongoose.Schema({

    title: {type: String, required: true},
    text: String,
    date: String,
    tags: String,
    author: {type: String, required: true},
    authorName: {type: String, required: true},
    target: {type: String, required: true},
    comments: [commentSchema],
    files : [String]

},
{
    versionKey: false
});

module.exports = mongoose.model('publications', publicationsSchema);