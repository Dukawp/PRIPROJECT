var Group = require('../models/groups');

module.exports.find = () => {
    return Group
        .find()
        .exec()
}

module.exports.findOne = id => {
    return Group
        .findOne({_id: id})
        .exec()
}

module.exports.findByName = name => {
    return Group
        .find({name: {$regex: '.*' + name + '.*'}})
        .exec()
}

module.exports.insert = g => {
    var newGroup = new Group(g);
    return newGroup.save();
}

module.exports.remove = id => {
    return Group
        .deleteOne({_id: id})
        .exec()
}