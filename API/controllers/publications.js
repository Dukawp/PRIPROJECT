var Publication = require('../models/publications');

module.exports.find = () => {
    console.log('MONGO: find()');
    return Publication
        .find()
        .exec()
}

module.exports.findOne = id => {
    console.log('MONGO: findOne(' + id + ')');
    return Publication
        .findOne({_id: id})
        .exec()
}

module.exports.sortByDate = () => {
    console.log('MONGO: sortByDate()');
    return Publication
        .find()
        .sort({date: -1})
        .exec()
}

module.exports.sortByDateByGroup = group => {
    console.log('MONGO: sortByDateByGroup(' + group + ')');
    return Publication
        .find({target: group})
        .sort({date: -1})
        .exec()
}

module.exports.sortByDateByEvent = event => {
    console.log('MONGO: sortByDateByEvent(' + event + ')');
    return Publication
        .find({target: event})
        .sort({date: -1})
        .exec()
}

module.exports.getByTag = tag => {
    console.log('MONGO: getByTag(' + tag + ')');
    return Publication
        .find({tags: {$regex: '.*' + tag + '.*'}})
        .sort({date: -1})
        .exec()
}

module.exports.insert = p => {
    console.log('MONGO: insert(' + p + ')');
    var newPublication = new Publication(p);
    return newPublication.save();
}

module.exports.insertComment = (id, commentAuthor, commentText) => {
    console.log('MONGO: insertComment(' + id + ', ' + commentAuthor + ', ' + commentText);
    var newComment = {commentAuthor: commentAuthor, commentText: commentText};
    return Publication
        .update({_id: id}, {$push: {comments: newComment}})
        .exec()
}

module.exports.remove = id => {
    console.log('MONGO: remove(' + id + ')');
    return Publication
        .deleteOne({_id: id})
        .exec()
}