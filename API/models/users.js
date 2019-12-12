const mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({

    name: {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    groups: [String],
    photo: {type: String, required: true}

},
{
    versionKey: false
});

module.exports = mongoose.model('users', usersSchema);