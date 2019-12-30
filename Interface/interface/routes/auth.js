var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/', verifyAuthetication, function(req, res) {

  axios.get('http://localhost:5012/publications')
    .then(dados => res.render('feed', {list: dados.data}))
    .catch(error => res.render('error', {error: error}))

});

router.get('/:id', verifyAuthetication, function(req, res) {

  axios.get('http://localhost:5012/publications/' + req.params.id)
    .then(dados => res.render('publication', {publication: dados.data}))
    .catch(error => res.render('error', {error: error}))

});

router.get('/logout', verifyAuthetication, function(req, res) {

  req.logout();
  res.redirect('/login');

});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'Register' });
});

router.post('/login', passport.authenticate('local',

  { successRedirect: '/feed',
    successFlash: 'Authentication successful!',
    failureRedirect: '/login',
    failureFlash: 'Wrong credentials...'
  }
));

function verifyAuthetication(req, res, next){

  if(req.isAuthenticated()){
    //req.isAuthenticated() will return true if user is logged in
    next();
  }
  else{
    res.redirect('/login');
  }
}

module.exports = router;