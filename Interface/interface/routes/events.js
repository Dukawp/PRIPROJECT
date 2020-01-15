var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        res.redirect('../admin/events');

    }
    else{

        axios.get('http://localhost:5012/events/')
            .then(data => res.render('events', {events: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});  

router.get('/newEvent', verifyAuthetication, function(req, res) {

    res.render('newEvent');
  
});

router.get('/:id', verifyAuthetication, function(req, res) {

    var id = req.params.id;
    axios.get('http://localhost:5012/events/' + id)
        .then(data => res.render('event', {event: data.data}))
        .catch(error => res.render('error', {error: error}))
  
});

router.post('/newEvent', verifyAuthetication, function(req, res) {

    axios.post('http://localhost:5012/events', {

        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startYear + '/' + req.body.startMonth + '/' + req.body.startDay + ' ' + req.body.startHours + ':' + req.body.startMinutes,
        endDate: req.body.endYear + '/' + req.body.endMonth + '/' + req.body.endDay + ' ' + req.body.endHours + ':' + req.body.endMinutes

    })
      .then(data => res.redirect('../feed'))
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