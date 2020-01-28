var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// Protects admin route
router.get('/', verifyAuthetication, function(req, res) {

  var user = 1;
  if(req.session.passport.user == "admin"){

      console.log('INTERFACE: admin permissions granted');
      res.redirect('../admin/feed');

  }
  else{

    console.log('INTERFACE: admin permissions blocked');
      axios.get('http://localhost:5012/publications/')
          .then(data => res.render('feed', {feed: data.data, user}))
          .catch(error => res.render('error', {error: error}))

  }
});

// GET all publications
router.get('/feed', verifyAuthetication, protectsAdminRoute, function(req, res) {

    if(req.query.search){

      var tag = req.query.search;
      var user = 1;
      axios.get('http://localhost:5012/publications?tag=' + tag)
          .then(data => res.render('admin-feed', {feed: data.data, user}))
          .catch(error => res.render('error', {error: error}))  

    }
    else{

      var user = 1;
      console.log('INTERFACE: get all publications');
      axios.get('http://localhost:5012/publications/')
          .then(data => res.render('admin-feed', {feed: data.data, user}))
          .catch(error => res.render('error', {error: error}))  

    }
    
});

// DELETE publication
router.delete('/feed/:id', verifyAuthetication, protectsAdminRoute, function(req, res) {

    var user = 1;
    var id = req.params.id;
    console.log('INTERFACE: delete publication. ID: ' + id);
    axios.delete('http://localhost:5012/publications/' + id)
      .then(data => res.render('admin-feed', {feed: data.data, user}))
      .catch(error => res.render('error', {error: error}))

});

// GET all users
router.get('/users', verifyAuthetication, protectsAdminRoute, function(req, res) {

    if(req.query.search){

      var name = req.query.search;
      console.log('INTERFACE: get users by name');
      var user = 1;
      axios.get('http://localhost:5012/users?name=' + name)
        .then(data => res.render('admin-users', {users: data.data, user}))
        .catch(error => res.render('error', {error: error}))  

    }
    else{

      var user = 1;
      console.log('INTERFACE: get all users');
      axios.get('http://localhost:5012/users/')
          .then(data => res.render('admin-users', {users: data.data, user}))
          .catch(error => res.render('error', {error: error}))  
          
    }
    
});

// DELETE user
router.delete('/users/:id', verifyAuthetication, protectsAdminRoute, function(req, res) {

  var id = req.params.id;
  var user = 1;
  console.log('INTERFACE: delete user. ID: ' + id);
  axios.delete('http://localhost:5012/users/' + id)
    .then(data => res.render('admin-users', {users: data.data, user}))
    .catch(error => res.render('error', {error: error}))

});

// GET all groups
router.get('/groups', verifyAuthetication, protectsAdminRoute, function(req, res) {

    if(req.query.search){

      var desc = req.query.search;
      console.log('INTERFACE: get groups by description');
      var user = 1;
      axios.get('http://localhost:5012/groups?desc=' + desc)
        .then(data => res.render('admin-groups', {groups: data.data, user}))
        .catch(error => res.render('error', {error: error}))  

    }
    else{

      var user = 1;
      console.log('INTERFACE: get all groups');
      axios.get('http://localhost:5012/groups/')
          .then(data => res.render('admin-groups', {groups: data.data, user}))
          .catch(error => res.render('error', {error: error}))  

    }
  
});

// DELETE group
router.delete('/groups/:id', verifyAuthetication, protectsAdminRoute, function(req, res) {

    var user = 1;
    var id = req.params.id;
    console.log('INTERFACE: delete group. ID: ' + id);
    axios.delete('http://localhost:5012/groups/' + id)
      .then(data => res.render('admin-groups', {groups: data.data, user}))
      .catch(error => res.render('error', {error: error}))

});

// GET all events
router.get('/events', verifyAuthetication, protectsAdminRoute, function(req, res) {

    if(req.query.search){

      var desc = req.query.search;
      console.log('INTERFACE: get events by description');
      var user = 1;
      axios.get('http://localhost:5012/events?desc=' + desc)
        .then(data => res.render('admin-events', {events: data.data, user}))
        .catch(error => res.render('error', {error: error}))  

    }
    else{

      var user = 1;
      console.log('INTERFACE: get all events');
      axios.get('http://localhost:5012/events/')
          .then(data => res.render('admin-events', {events: data.data, user}))
          .catch(error => res.render('error', {error: error}))  

    }
    
});

// DELETE event
router.delete('/events/:id', verifyAuthetication, protectsAdminRoute, function(req, res) {

  var user = 1;
  var id = req.params.id;
  console.log('INTERFACE: delete event. ID: ' + id);
  axios.delete('http://localhost:5012/events/' + id)
    .then(data => res.render('admin-events', {events: data.data, user}))
    .catch(error => res.render('error', {error: error}))

});

// Verify if user is authenticated
function verifyAuthetication(req, res, next){

    if(req.isAuthenticated()){
      //req.isAuthenticated() will return true if user is logged in
      next();
    }
    else{

      console.log('INTERFACE: User not logged in')
      res.redirect('../auth/login');
      
    }
};

// Protects admin route
function protectsAdminRoute(req, res, next){

  if(req.session.passport.user == "admin"){

      console.log('INTERFACE: Admin permissions granted');
      next();

  }
  else{

    console.log('INTERFACE: Admin permissions blocked');
    res.redirect('../');

  }

};

module.exports = router;