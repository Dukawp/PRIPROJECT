var express = require('express');
var router = express.Router();
var passport = require('passport');

var Users = require('../controllers/users')

router.get('/', passport.authenticate('jwt', {session:false}), function(req, res) {

  //GET all users
  Users.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// GET one user by number
router.get('/:number', passport.authenticate('jwt', {session:false}), function(req, res) {

  Users.findOne(req.params.number)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(perror));
  
});

// POST new user
router.post('/', passport.authenticate('jwt', {session:false}), function(req, res){

  Users.insert(req.body)
    .then(data => res.jsonp(date))
    .catch(error => res.status(500).jsonp(error));

});

module.exports = router;