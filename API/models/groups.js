const mongoose = require('mongoose')

var groupsSchema = new mongoose.Schema({

    name: {type: String, required: true},
    photo: {type:String, required: true},
    descripton: {type: String, required: true}

},
{
    versionKey: false
});

module.exports = mongoose.model('groups', groupsSchema);