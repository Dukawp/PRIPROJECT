var Event = require('../models/events');

module.exports.find = () => {
    console.log('MONGO: find()');
    return Event
        .find()
        .exec()
}

module.exports.findOne = id => {
    console.log('MONGO: findOne(' + id + ')');
    return Event
        .findOne({_id: id})
        .exec()
}

module.exports.findByName = name => {
    console.log('MONGO: findName(' + name + ')');
    return Event
        .find({name: {$regex: '.*' + name + '.*'}})
        .exec()
}

module.exports.getName = id => {
    console.log('MONGO: getName(' + id + ')');
    return Event
        .findOne({_id: id}, {_id: 0, name: 1})
        .exec()
}

module.exports.sortByStartDate = () => {
    console.log('MONGO: sortByStartDate()');
    return Event
        .find()
        .sort({startDate: 1})
        .exec()
}

module.exports.sortByEndDate = () => {
    console.log('MONGO: sortByEndDate()');
    return Event
        .find()
        .sort({endDate: 1})
        .exec()
}

module.exports.getByDescription = desc => {
    console.log('MONGO: getByDescription(' + desc + ')');
    return Event
        .find({description: {$regex: '.*' + desc + '.*'}})
        .exec()
}

module.exports.insert = e => {
    console.log('MONGO: insert(' + e + ')');
    var newEvent = new Event(e);
    return newEvent.save()
}

module.exports.remove = id => {
    console.log('MONGO: remove(' + id + ')');
    return Event
        .deleteOne({_id: id})
        .exec()
}