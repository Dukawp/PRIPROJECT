var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        res.redirect('../admin/groups');

    }
    else{

        axios.get('http://localhost:5012/groups/')
            .then(data => res.render('groups', {groups: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});  

router.get('/newGroup', verifyAuthetication, function(req, res) {

    res.render('newGroup');
  
});

router.get('/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    axios.get('http://localhost:5012/groups/' + id)
        .then(data => res.render('group', {group: data.data}))
        .catch(error => res.render('error', {error: error}))
  
});

router.post('/newGroup', verifyAuthetication, function(req, res) {

    axios.post('http://localhost:5012/groups', {

        name: req.body.name,
        description: req.body.description

    })
      .then(data => res.redirect('../feed'))
      .catch(error => res.render('error', {error: error}))
});

router.post('/:id', function(req, res) {

    var id = req.params.id;

});

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