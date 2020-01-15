const mongoose = require('mongoose')

var groupsSchema = new mongoose.Schema({

    name: {type: String, required: true},
    description: String

},
{
    versionKey: false
});

module.exports = mongoose.model('groups', groupsSchema);