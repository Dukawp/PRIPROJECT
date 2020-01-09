var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        res.redirect('../admin/feed');

    }
    else{

        axios.get('http://localhost:5012/publications/')
            .then(data => res.render('feed', {feed: data.data}))
            .catch(error => res.render('error', {error: error}))

    }
});

router.get('/newPublication', verifyAuthetication, function(req, res) {

  res.render('newPublication', { title: 'Create New Publication' });

});

router.get('/:id', verifyAuthetication, function(req, res) {

  axios.get('http://localhost:5012/publications/' + req.params.id)
      .then(data => res.render('publication', {publication: data.data}))
      .catch(error => res.render('error', {error: error}))

});

router.post('/newPublication', verifyAuthetication, function(req, res) {

    axios.post('http://localhost:5012/publications', {

      title: req.body.title,
      text: req.body.text,
      date: new Date(Date.now()).toISOString,
      tags: req.body.tags,
      author: req.session.passport.user,
      target: req.body.target

    })
      .then(data => res.redirect('/feed'))
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