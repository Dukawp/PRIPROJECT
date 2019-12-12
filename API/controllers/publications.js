var Publication = require('../models/publications');

module.exports.find = () => {
    return Publication
        .find()
        .exec()
}

module.exports.findOne = id => {
    return Publication
        .findOne({_id: id})
        .exec()
}