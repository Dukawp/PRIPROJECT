const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    data: String,
    name: String,
    path: String,
    mimetype: String,
    size: Number
})

module.exports = mongoose.model('files', fileSchema)
