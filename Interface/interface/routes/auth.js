var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET login page
router.get('/login', function(req, res) {

  res.render('login');

});

// POST user login
router.post('/login', passport.authenticate('local',
  
  { successRedirect: '../feed',
    successFlash: 'Authentication successful!',
    failureRedirect: '/auth/login',
    failureFlash: 'Wrong credentials...'
  }
));

// GET register page
router.get('/register', function(req, res) {

  res.render('register');
  
});


// POST new user
router.post('/register', function(req, res) {

  console.log('INTERFACE: post new user');
  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:5012/users', {

    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: hash

  })
    .then(res.redirect('/auth/login'))
    .catch(error => res.render('error', {error: error}))

});

// GET user logout
router.get('/logout', verifyAuthetication, function(req, res) {

  console.log('INTERFACE: logout');
  req.logout();
  res.redirect('../');

});

// Verify authentication
function verifyAuthetication(req, res, next){

  if(req.isAuthenticated()){
    //req.isAuthenticated() will return true if user is logged in
    next();
  }
  else{
    res.redirect('/auth/login');
  }
};

module.exports = router;