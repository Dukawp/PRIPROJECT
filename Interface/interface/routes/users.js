var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// Protects admin route
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: Admin permissions granted');
        res.redirect('../admin/users');

    }
    else{
        var userNumber = req.session.passport.user;
        var user = 1;
        console.log('INTERFACE: get all users');
        axios.get('http://localhost:5012/users/' + userNumber + '/profile')
            .then(userInfo => {
                axios.get('http://localhost:5012/users/')
                .then(data => res.render('users', {users:data.data, user, userI: userInfo.data}))
                .catch(error => res.render('error', {error: error}))
            })
    }

});


router.get('/profile/:id', function(req, res) {

    var user = 1;
    var number = req.params.id;
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => res.render('userProfile', {profile: data.data, user}))
        .catch(error => res.render('error', {error: error}))

});


// GET user profile
router.get('/myProfile', function(req, res) {

    var user = 1;
    var number = req.session.passport.user;
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => res.render('profile', {profile: data.data, user}))
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