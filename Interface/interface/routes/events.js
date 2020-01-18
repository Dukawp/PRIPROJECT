var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET all events
router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/events');

    }
    else{

        console.log('INTERFACE: get all events');
        axios.get('http://localhost:5012/events/')
            .then(data => res.render('events', {events: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});  

// GET new event page
router.get('/newEvent', verifyAuthetication, function(req, res) {

    res.render('newEvent');
  
});

// GET event by ID
router.get('/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    console.log('INTERFACE: get event by ID. ID: ' + id);
    axios.get('http://localhost:5012/events/' + id)
        .then(data => res.render('event', {event: data.data}))
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