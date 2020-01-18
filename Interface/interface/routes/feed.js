var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var sleep = require('sleep');

// GET feed
router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/feed');

    }
    else{

        console.log('INTERFACE: get feed');
        axios.get('http://localhost:5012/publications/')
            .then(data => res.render('feed', {feed: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});

// GET new publication page
router.get('/newPublication', verifyAuthetication, function(req, res) {

  res.render('newPublication');

});

// GET publication by ID
router.get('/:id', verifyAuthetication, function(req, res) {

  var id = req.params.id;
  console.log('INTERFACE: get publication by ID. ID: ' + id);
  axios.get('http://localhost:5012/publications/' + id)
      .then(data => res.render('publication', {publication: data.data}))
      .catch(error => res.render('error', {error: error}))

});

// POST new publication
router.post('/newPublication', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new publication');
    var reg = new Date();
    axios.post('http://localhost:5012/publications', {

      title: req.body.title,
      text: req.body.text,
      date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDay() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
      tags: req.body.tags,
      author: req.session.passport.user,
      target: req.body.target

    })
      .then(data => res.redirect('/feed'))
      .catch(error => res.render('error', {error: error}))
});
  
// Verify authentication
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

module.exports = router;