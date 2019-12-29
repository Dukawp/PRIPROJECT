var express = require('express');
var router = express.Router();
var passport = require('passport');

var Publications = require('../controllers/publications')

router.get('/', passport.authenticate('jwt', {session:false}), function(req, res) {

  //GET all publications
  Publications.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));

});

// GET one publication by id
router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {

  Publications.findOne(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));
  
});

// POST new publication
router.post('/', passport.authenticate('jwt', {session:false}), function(req, res){

  Publications.insert(req.body)
    .then(data => res.jsonp(date))
    .catch(error => res.status(500).jsonp(error));

});

module.exports = router;