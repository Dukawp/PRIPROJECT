const mongoose = require('mongoose')

var publicationsSchema = new mongoose.Schema({

    title: {type: String, required: true},
    text: {type:String, required: true},
    files: [String],
    tags: [String],
    idUser: {type: String, required: true},
    idGroup: String

},
{
    versionKey: false
});

module.exports = mongoose.model('publications', publicationsSchema);