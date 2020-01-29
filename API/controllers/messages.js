var Message = require('../models/messages');

module.exports.findMyFriends = id => {
    console.log('MONGO: find()');
    return Message
        .find({author1: id})
        .exec()
}

module.exports.findMessages = (id1, id2) => {
    console.log('MONGO: findMessages de : ');
    console.log(id1 + 'e ' + id2)
    return Message
        .find( {$or: [ {author1: id1, author2: id2}  , {author1: id2, author2: id1} ]})
        .sort({date: -1})
        .exec()
}



module.exports.insert = p => {
    console.log('MONGO: insert Message (' + p + ')');
    var newMessage = new Message(p);
    return newMessage.save();
}