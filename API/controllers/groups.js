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