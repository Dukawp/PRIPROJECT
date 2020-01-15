var express = require('express');
var router = express.Router();
var passport = require('passport');

var Users = require('../controllers/users');

router.get('/', function(req, res) {

  //GET all users
  Users.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// GET one user by number
router.get('/:number', passport.authenticate('jwt', {session: false}), function(req, res) {

  var number = req.params.number;
  Users.findOne(req.params.number)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new user
router.post('/', function(req, res) {

  Users.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE user
router.delete('/:id', function(req, res) {

  var id = req.params.id;
  Users.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;