var Message = require('../models/messages');

module.exports.find = () => {
    console.log('MONGO: find()');
    return Message
        .find()
        .exec()
}


module.exports.insert = p => {
    console.log('MONGO: insert Message (' + p + ')');
    var newMessage = new Message(p);
    return newMessage.save();
}