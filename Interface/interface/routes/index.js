var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET home page
router.get('/', function(req, res, next) {

  if(req.isAuthenticated())
    var user = 1;
  res.render('index', {user});

});

// GET team page
router.get('/team', function(req, res) {

  if(req.isAuthenticated())
    var user = 1;
  res.render('team', {user});

});

// GET about page
router.get('/about', function(req, res) {

  if(req.isAuthenticated())
    var user = 1;
  res.render('about', {user});
  
});

module.exports = router;