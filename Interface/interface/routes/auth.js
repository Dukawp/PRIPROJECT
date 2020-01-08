var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.post('/login', passport.authenticate('local',

  { successRedirect: '/feed',
    successFlash: 'Authentication successful!',
    failureRedirect: '/login',
    failureFlash: 'Wrong credentials...'
  }
));

router.get('/register', function(req, res) {
  res.render('register', { title: 'Register' });
});

router.post('/register', function(req, res) {

  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:5012/users', {

    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: hash

  })
    .then(data => res.redirect('/login'))
    .then(error => res.render('error', {error: error}))

});

router.get('/logout', verifyAuthetication, function(req, res) {

  req.logout();
  res.redirect('../');

});

function verifyAuthetication(req, res, next){

  if(req.isAuthenticated()){
    //req.isAuthenticated() will return true if user is logged in
    next();
  }
  else{
    res.redirect('/login');
  }
};

module.exports = router;