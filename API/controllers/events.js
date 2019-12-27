var Event = require('../models/events');

module.exports.find = () => {
    return Event
        .find()
        .exec()
}

module.exports.findOne = id => {
    return Event
        .findOne({_id: id})
        .exec()
}