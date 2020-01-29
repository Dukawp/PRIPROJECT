var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// Protects admin route
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    var userNumber = req.session.passport.user;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: Admin permissions granted');
        res.redirect('../admin/users');

    }
    else{

        if(req.query.search){

            var name = req.query.search;
            console.log('INTERFACE: get users by name');
            axios.get('http://localhost:5012/users?name=' + name)
                .then(data => res.render('users', {users:data.data, user, userNumber}))
                .catch(error => res.render('error', {error: error}))

        }
        else{

            console.log('INTERFACE: get all users');
            axios.get('http://localhost:5012/users/')
                .then(data => res.render('users', {users:data.data, user, userNumber}))
                .catch(error => res.render('error', {error: error}))

        }
    }
});


router.get('/profile/:number', function(req, res) {

    var user = 1;
    var number = req.params.number;

    if(req.query.search){

        var tag = req.query.search;
        console.log('INTERFACE: get profile and get publications by tag');
        axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(userInfo => {

            axios.get('http://localhost:5012/publications?tag=' + tag)
                .then(data => res.render('userProfile', {feed: data.data, user, profile: userInfo.data}))
                .catch(error => res.render('error', {error: error}))

        })
        .catch(error => res.render('error', {error: error}));

    }
    else{

        console.log('INTERFACE: get profile');
        axios.get('http://localhost:5012/users/' + number + '/profile')
            .then(userInfo => {

                axios.get('http://localhost:5012/publications/')
                    .then(data => res.render('userProfile', {feed: data.data, user, profile: userInfo.data}))
                    .catch(error => res.render('error', {error: error}))

            })
            .catch(error => res.render('error', {error: error}));

        }
});


// GET user profile
router.get('/myProfile', function(req, res) {

    var user = 1;
    var number = req.session.passport.user;

    if(req.query.search){

        var tag = req.query.search;
        console.log('INTERFACE: get user profile and get publications by tag');
        axios.get('http://localhost:5012/users/' + number + '/profile')
            .then(userInfo => {

                axios.get('http://localhost:5012/publications?tag=' + tag)
                    .then(data => res.render('profile', {feed: data.data, user, profile: userInfo.data}))
                    .catch(error => res.render('error', {error: error}))

            })
            .catch(error => res.render('error', {error: error}));

    }

    console.log('INTERFACE: get user profile');
    axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(userInfo => {

            axios.get('http://localhost:5012/publications/')
                .then(data => res.render('profile', {feed: data.data, user, profile: userInfo.data}))
                .catch(error => res.render('error', {error: error}))

        })
        .catch(error => res.render('error', {error: error}));

});

router.post('/myProfile/change/name', function(req, res) {

    var newName = req.body.name;
    var number = req.session.passport.user;
    console.log('INTERFACE: post change name. New name: ' + newName);
    axios.post('http://localhost:5012/users/' + number + '/change/name', {newName: newName})
        .then(data => res.redirect('/users/myProfile'))
        .catch(error => res.render('error', {error: error}));

});

router.post('/myProfile/change/email', function(req, res) {

    var newEmail = req.body.email;
    var number = req.session.passport.user;
    console.log('INTERFACE: post change email. New email: ' + newEmail);
    axios.post('http://localhost:5012/users/' + number + '/change/email', {newEmail: newEmail})
        .then(data => res.redirect('/users/myProfile'))
        .catch(error => res.render('error', {error: error}));

});

router.post('/myProfile/change/password', function(req, res) {

    var newPassword = req.body.password;
    var hash = bcrypt.hashSync(newPassword, 10)
    var number = req.session.passport.user;
    console.log('INTERFACE: post change password. New password: ' + hash);
    axios.post('http://localhost:5012/users/' + number + '/change/password', {newPassword: hash})
        .then(data => res.redirect('/users/myProfile'))
        .catch(error => res.render('error', {error: error}));

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