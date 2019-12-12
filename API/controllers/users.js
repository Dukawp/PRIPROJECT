var User = require('../models/users');

module.exports.find = () => {
    return User
        .find()
        .exec()
}

module.exports.findOne = id => {
    return User
        .findOne({_id: id})
        .exec()
}