var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET user profile
router.get('/', function(req, res) {

    var user = 1;
    var number = req.session.passport.user;
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => res.render('profile', {profile: data.data, user}))
        .catch(error => res.render('error', {error: error}))

});

module.exports = router;