var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET all groups
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/groups');

    }
    else{

        console.log('INTERFACE: get all groups');
        axios.get('http://localhost:5012/groups/')
            .then(data => res.render('groups', {groups: data.data, user}))
            .catch(error => res.render('error', {error: error}))

    }
});  

// GET new group page
router.get('/newGroup', verifyAuthetication, function(req, res) {

    var user = 1;
    res.render('newGroup', {user});
  
});

// GET group by ID
router.get('/:id', verifyAuthetication, function(req, res) {

    var user = 1;
    var id = req.params.id;
    console.log('INTERFACE: get group by ID. ID: ' + id);
    axios.get('http://localhost:5012/groups/' + id)
        .then(data => res.render('group', {group: data.data, user}))
        .catch(error => res.render('error', {error: error}))
  
});

// POST new group
router.post('/newGroup', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new group');
    axios.post('http://localhost:5012/groups', {

        name: req.body.name,
        description: req.body.description

    })
      .then(data => res.redirect('../groups'))
      .catch(error => res.render('error', {error: error}))
});

// POST user joins group
router.post('/join/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    var number;
    console.log('INTERFACE: post user joins group. ID: ' + id);
    axios.post('htpp://localhost:5012/groups/join/' + id, {

        number: req.session.passport.user

    })
        .then(res.redirect('/feed'))
        .catch(error => res.render('error', {error: error}))

});

// POST user exits group
router.post('/exit/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    console.log('INTERFACE: ' + req.session.passport.user);
    console.log('INTERFACE: post user exits group. ID: ' + id);
    axios.post('http://localhost:5012/groups/exit/' + id, {

        number: req.session.passport.user
  
    })
        .then(res.redirect('/feed'))
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