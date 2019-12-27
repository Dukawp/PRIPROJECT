const mongoose = require('mongoose')

var groupsSchema = new mongoose.Schema({

    name: {type: String, required: true},
    photo: {type:String, required: true},
    descripton: String

},
{
    versionKey: false
});

module.exports = mongoose.model('groups', groupsSchema);