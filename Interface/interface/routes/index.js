var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');

});

router.get('/team', function(req, res) {

  res.render('team');

});

router.get('/about', function(req, res) {

  res.render('about');
  
});

module.exports = router;