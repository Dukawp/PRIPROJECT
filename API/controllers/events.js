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

module.exports.findByName = name => {
    return Event
        .find({name: {$regex: '.*' + name + '.*'}})
        .exec()
}

module.exports.sortByStartDate = () => {
    return Event
        .find()
        .sort({startDate: 1})
        .exec()
}

module.exports.sortByEndDate = () => {
    return Event
        .find()
        .sort({endDate: 1})
        .exec()
}

module.exports.insert = e => {
    var newEvent = new Event(e);
    return newEvent.save();
}