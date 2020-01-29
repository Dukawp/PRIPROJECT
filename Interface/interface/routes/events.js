var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET all events
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/events');

    }
    else{

        if(req.query.search){

            var desc = req.query.search;
            console.log('INTERFACE: get events by description');
            var userNumber = req.session.passport.user;
            axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/events?desc=' + desc)
                  .then(data => res.render('events', {events: data.data, user, userI: userInfo.data}))
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));

        }
        else{

            var userNumber = req.session.passport.user;
            console.log('INTERFACE: get events');
            axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/events/')
                  .then(data => res.render('events', {events: data.data, user, userI: userInfo.data}))
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));

        }
    }
}); 

// GET new event page
router.get('/newEvent', verifyAuthetication, function(req, res) {

    var user = 1;
    res.render('newEvent', {user});
  
});

// GET event by ID
router.get('/:id', verifyAuthetication, function(req, res) {

    var user = 1;
    var id = req.params.id;
    console.log('INTERFACE: get event by ID. ID: ' + id);
    axios.get('http://localhost:5012/events/' + id)
        .then(data => res.render('event', {event: data.data, user}))
        .catch(error => res.render('error', {error: error}))
  
});

// POST new event
router.post('/newEvent', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new event');
    axios.post('http://localhost:5012/events', {

        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startYear + '/' + req.body.startMonth + '/' + req.body.startDay + ' ' + req.body.startHours + ':' + req.body.startMinutes,
        endDate: req.body.endYear + '/' + req.body.endMonth + '/' + req.body.endDay + ' ' + req.body.endHours + ':' + req.body.endMinutes

    })
      .then(data => res.redirect('../events'))
      .catch(error => res.render('error', {error: error}))
});

// POST user joins event
router.post('/join/:id', verifyAuthetication, function(req, res) {

  var id = req.params.id;
  console.log('INTERFACE: post user joins event. ID: ' + id);
  axios.post('htpp://localhost:5012/events/join/' + id, {

      number: req.session.passport.user

  })
      .then(res.redirect('/feed'))
      .catch(error => res.render('error', {error: error}))

});

// POST user exits event
router.post('/exit/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    console.log('INTERFACE: post user exits event. ID: ' + id);
    axios.post('http://localhost:5012/events/exit/' + id, {

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