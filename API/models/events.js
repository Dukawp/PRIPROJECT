const mongoose = require('mongoose')

var eventsSchema = new mongoose.Schema({

    name: {type: String, required: true},
    descripton: String,
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    idUsers: [String]

},
{
    versionKey: false
});

module.exports = mongoose.model('events', eventsSchema);