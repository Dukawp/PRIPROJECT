var Publication = require('../models/publications');

module.exports.find = () => {
    return Publication
        .find()
        .exec()
}

module.exports.findOne = id => {
    return Publication
        .findOne({_id: id})
        .exec()
}

module.exports.sortByDate = () => {
    return Publication
        .find()
        .sort({date: -1})
        .exec()
}

module.exports.insert = p => {
    var newPublication = new Publication(p);
    return newPublication.save();
}