var bcrypt = require('bcrypt');
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

module.exports.editName = (number, newName) => {
    return User
        .updateOne({number: number}, {name: newName})
}

module.exports.editNumber = (number, newNumber) => {
    return User
        .updateOne({number: number}, {number: oldNumber})
}

module.exports.editEmail = (number, newEmail) => {
    return User
        .updateOne({number: number}, {email: newEmail})
}

module.exports.editPassword = (number, newPassword) => {
    var hash = bcrypt.hashSync(newPassword, 10);    
    return User
        .updateOne({number: number}, {password: newPassword})
}

module.exports.remove = id => {
    return User
        .deleteOne({_id: id})
        .exec()
}