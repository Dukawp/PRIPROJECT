const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({

    filePath: {type: String, required: true},
    fileMimetype: {type: String, required: true}

},
{
    versionKey: false
});

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
    files: [fileSchema],
    tags: [String],
    author: {type: String, required: true},
    target: {type: String, required: true},
    comments: [commentSchema]

},
{
    versionKey: false
});

module.exports = mongoose.model('publications', publicationsSchema);