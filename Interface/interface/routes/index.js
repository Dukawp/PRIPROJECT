var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/team', function(req, res) {
  res.render('team', { title: 'Team' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

module.exports = router;