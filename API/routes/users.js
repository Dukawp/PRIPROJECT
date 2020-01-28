var express = require('express');
var router = express.Router();
var passport = require('passport');

var Users = require('../controllers/users');

router.get('/', function(req, res) {

  if(req.query.name){

    var name = req.query.name;
    console.log('API: get users by name');
    Users.getByName(name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all users
    console.log('API: get all users');
    Users.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }

});

// GET one user by number
router.get('/:number/profile', function(req, res) {

  var number = req.params.number;
  console.log('API: get one user by number. Number: ' + number);
  Users.findOne(number)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// GET one user by number
router.get('/:number', passport.authenticate('jwt', {session: false}), function(req, res) {

  var number = req.params.number;
  //console.log('API: get one user by number. Number: ' + number);
  Users.findOne(number)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new user
router.post('/', function(req, res) {

  console.log('API: post new user');
  console.log(req.body);
  Users.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// POST change name
router.post('/:number/change/name', function(req, res) {

  var number = req.params.number;
  var newName = req.body.newName;
  console.log('API: post change name. New name: ' + newName);
  Users.editName(number, newName)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// POST change email
router.post('/:number/change/email', function(req, res) {

  var number = req.params.number;
  var newEmail = req.body.newEmail;
  console.log('API: post change email. New email: ' + newEmail);
  Users.editEmail(number, newEmail)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// POST change password
router.post('/:number/change/password', function(req, res) {

  var number = req.params.number;
  var newPassword = req.body.newPassword;
  console.log('API: post change password. New password: ' + newPassword);
  Users.editPassword(number, newPassword)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE user
router.delete('/:id', function(req, res) {

  var id = req.params.id;
  console.log('API: delete user. ID: ' + id);
  Users.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;