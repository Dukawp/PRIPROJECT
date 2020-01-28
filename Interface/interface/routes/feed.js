var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

// GET feed
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/feed');

    }
    else{

        var userNumber = req.session.passport.user;
        console.log('INTERFACE: get feed');
        axios.get('http://localhost:5012/users/' + userNumber + '/profile')
            .then(userInfo => {

              axios.get('http://localhost:5012/publications/')
                .then(data => res.render('feed', {feed: data.data, user, userI: userInfo.data}))
                .catch(error => res.render('error', {error: error}))

            })
            .catch(error => res.render('error', {error: error}));
    }
});

// GET new publication page
router.get('/newPublication', verifyAuthetication, function(req, res) {

  var user = 1;
  res.render('newPublication', {user});

});

// GET publication by ID
router.get('/:id', verifyAuthetication, function(req, res) {

  var user = 1;
  var id = req.params.id;
  console.log('INTERFACE: get publication by ID. ID: ' + id);
  axios.get('http://localhost:5012/publications/' + id)
      .then(data => res.render('publication', {publication: data.data, user}))
      .catch(error => res.render('error', {error: error}))

});

// POST new publication
router.post('/newPublication', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new publication');
    var reg = new Date();
    var number = req.session.passport.user;
    // ESTA A DAR ERRO AQUI. QUERO BUSCAR O NOME DO UTILIZADOR A PARTIR DO NUMBER, MAS NAO ESTA A DAR
    axios.get('http://localhost:5012/users/' + number + '/profile')
      .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDay() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target

        })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
      })
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