var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET all groups
router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/groups');

    }
    else{

        console.log('INTERFACE: get all groups');
        axios.get('http://localhost:5012/groups/')
            .then(data => res.render('groups', {groups: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});  

// GET new group page
router.get('/newGroup', verifyAuthetication, function(req, res) {

    res.render('newGroup');
  
});

// GET group by ID
router.get('/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    console.log('INTERFACE: get group by ID. ID: ' + id);
    axios.get('http://localhost:5012/groups/' + id)
        .then(data => res.render('group', {group: data.data}))
        .catch(error => res.render('error', {error: error}))
  
});

// POST new group
router.post('/newGroup', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new group');
    axios.post('http://localhost:5012/groups', {

        name: req.body.name,
        description: req.body.description

    })
      .then(data => res.redirect('../feed'))
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