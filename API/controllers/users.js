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

module.exports.getNameByNumber = number => {
    return User
        .findOne({number: number}, {_id: 0, name: 1})
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

module.exports.joinGroup = (number, name) => {
    console.log('MONGO: joinGroup(' + name + ')');
    return User
        .updateOne({number: number}, {$push: {groups: name}})
}

module.exports.exitGroup = (number, name) => {
    console.log('MONGO: exitGroup(' + name + ')');
    return User
        .updateOne({number: number}, {$pull: {groups: name}})
}

module.exports.joinEvent = (number, name) => {
    console.log('MONGO: joinEvent(' + name + ')');
    return User
        .updateOne({number: number}, {$push: {events: name}})
}

module.exports.exitEvent = (number, name) => {
    console.log('MONGO: exitEvent(' + name + ')');
    return User
        .updateOne({number: number}, {$pull: {events: name}})
}

module.exports.getByName = name => {
    console.log('MONGO: getByName(' + name + ')');
    return User
        .find({name: {$regex: '.*' + name + '.*'}})
        .exec()
}

module.exports.remove = id => {
    console.log('MONGO: remove(' + id + ')');
    return User
        .deleteOne({_id: id})
        .exec()
}
