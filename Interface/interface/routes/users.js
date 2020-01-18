var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// Protects admin route
router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: Admin permissions granted');
        res.redirect('../admin/users');

    }
    else{

        res.render('users');

    }

});

// GET user profile
router.get('/myProfile', function(req, res) {

    var number = req.session.passport.user;
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => res.render('profile', {user: data.data}))
        .catch(error => res.render('error', {error: error}))

});

// GET user by number
router.get('/:number', verifyAuthetication, function(req, res) {

    var number = req.params.number;
    console.log('INTERFACE: get user by number. Number: ' + number);
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => res.render('profile', {user: data.data}))
        .catch(error => res.render('error', {error: error}))
  
});

// Verify authentication
function verifyAuthetication(req, res, next){

    if(req.isAuthenticated()){
      //req.isAuthenticated() will return true if user is logged in
      next();
    }
    else{
      res.redirect('../auth/login');
    }
};

module.exports = router;