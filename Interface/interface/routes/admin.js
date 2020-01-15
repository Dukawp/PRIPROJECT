var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/feed', verifyAuthetication, function(req, res) {

    console.log('Interface: ' + new Date(Date.now()));
    axios.get('http://localhost:5012/publications/')
        .then(data => res.render('admin-feed', {feed: data.data}))
        .catch(error => res.render('error', {error: error}))  
    
});

router.delete('/feed/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    axios.delete('http://localhost:5012/publications/' + id)
      .then(data => res.render('admin-feed', {feed: data.data}))
      .catch(error => res.render('error', {error: error}))

});

router.get('/users', verifyAuthetication, function(req, res) {

    axios.get('http://localhost:5012/users/')
        .then(data => res.render('admin-users', {users: data.data}))
        .catch(error => res.render('error', {error: error}))  
    
});

router.get('/events', verifyAuthetication, function(req, res) {

    axios.get('http://localhost:5012/events/')
        .then(data => res.render('admin-events', {events: data.data}))
        .catch(error => res.render('error', {error: error}))  
    
});

router.get('/groups', verifyAuthetication, function(req, res) {

    axios.get('http://localhost:5012/groups/')
        .then(data => res.render('admin-groups', {groups: data.data}))
        .catch(error => res.render('error', {error: error}))  
    
});

router.delete('/groups/:id', verifyAuthetication, function(req, res) {

  var id = req.params.id;
  axios.delete('http://localhost:5012/groups/' + id)
    .then(data => res.render('admin-groups', {groups: data.data}))
    .catch(error => res.render('error', {error: error}))

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