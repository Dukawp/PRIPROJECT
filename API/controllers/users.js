var bcrypt = require('bcrypt');
var User = require('../models/users');

module.exports.find = () => {
    console.log('MONGO: find()');
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
    console.log('MONGO: insert(' + u + ')');
    var newUser = new User(u);
    return newUser.save();
}

module.exports.editName = (number, newName) => {
    console.log('MONGO: editName(' + number + ', ' + newName + ')');
    return User
        .updateOne({number: number}, {name: newName})
}

module.exports.editEmail = (number, newEmail) => {
    console.log('MONGO: editEmail(' + number + ', ' + newEmail + ')');
    return User
        .updateOne({number: number}, {email: newEmail})
}

module.exports.editPassword = (number, newPassword) => {
    var hash = bcrypt.hashSync(newPassword, 10);    
    console.log('MONGO: editPassword(' + number + ', ' + hash + ')');
    return User
        .updateOne({number: number}, {password: newPassword})
}

module.exports.remove = id => {
    console.log('MONGO: remove(' + id + ')');
    return User
        .deleteOne({_id: id})
        .exec()
}