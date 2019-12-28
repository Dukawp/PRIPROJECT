var User = require('../models/users');

module.exports.find = () => {
    return User
        .find()
        .exec()
}

module.exports.findOne = number => {
    return User
        .findOne({number: number})
        .exec()
}