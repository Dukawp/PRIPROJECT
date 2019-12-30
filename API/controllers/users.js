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

module.exports.insert = u => {
    var newUser = new User(u);
    return newUser.save();
}

module.exports.remove = id => {
    return User
        .deleteOne({_id: id})
        .exec()
}