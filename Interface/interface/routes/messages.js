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
          console.log('INTERFACE: get messages ');
          axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/messages/'+ userNumber)
                  .then(data => {
                    var it = data.data
                    var elem = []
                    for(var i = 0; i < it.length; i++){
                      if (elem.indexOf(it[i].author2+ ' - ' +it[i].author2Name) > -1) {
                      } 
                      else {
                        elem.push(it[i].author2+ ' - ' +it[i].author2Name)
                      }

                    }
                    res.render('messages', {elem, user, userI: userInfo.data})
                  })
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));
    }
});

router.get('/from/:id', verifyAuthetication, function(req, res) {
  
  var user = 1;
  if(req.session.passport.user == "admin"){

      console.log('INTERFACE: admin permissions granted');
      res.redirect('../admin/feed');

  }
  else{
    var userNumber = req.session.passport.user;
    userNumber += ' - ' + req.params.id
    axios.get('http://localhost:5012/users/' + req.params.id + '/profile')
              .then(userInfo => {
      axios.get('http://localhost:5012/messages/from/' + userNumber)
        .then(data => res.render('pm', {message: data.data, userId: req.session.passport.user, userI: userInfo.data}))
        .catch(error => res.render('error', {error: error}))
    })
  }
})

router.post('/newPm', verifyAuthetication, function(req, res) {
  var reg = new Date();
  var number = req.session.passport.user;
  

    if(reg.getUTCDate() < 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() < 10){

      axios.post('http://localhost:5012/messages', {
      date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
      author1: number,
      author2: req.body.myId,
      author2Name: req.body.myName,
      text: req.body.text
    })
      .then(data => res.redirect('/messages'))
      .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() >= 10){

      axios.post('http://localhost:5012/messages', {
        date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
        author1: number,
        author2: req.body.myId,
        author2Name: req.body.myName,
        text: req.body.text
      })
        .then(data => res.redirect('/messages'))
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() < 10){

      axios.post('http://localhost:5012/messages', {
      date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
      author1: number,
      author2: req.body.myId,
      author2Name: req.body.myName,
      text: req.body.text
    })
      .then(data => res.redirect('/messages'))
      .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() >= 10){

      axios.post('http://localhost:5012/messages', {
      date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
      author1: number,
      author2: req.body.myId,
      author2Name: req.body.myName,
      text: req.body.text
    })
      .then(data => res.redirect('/messages'))
      .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() < 10){

      axios.post('http://localhost:5012/messages', {
      date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
      author1: number,
      author2: req.body.myId,
      author2Name: req.body.myName,
      text: req.body.text
    })
      .then(data => res.redirect('/messages'))
      .catch(error => res.render('error', {error: error}))


    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() >= 10){

      axios.post('http://localhost:5012/messages', {
        date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
        author1: number,
        author2: req.body.myId,
        author2Name: req.body.myName,
        text: req.body.text
      })
        .then(data => res.redirect('/messages'))
        .catch(error => res.render('error', {error: error}))
  

    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() < 10){

      axios.post('http://localhost:5012/messages', {
        date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
        author1: number,
        author2: req.body.myId,
        author2Name: req.body.myName,
        text: req.body.text
      })
        .then(data => res.redirect('/messages'))
        .catch(error => res.render('error', {error: error}))
  
    }
    else{

      axios.post('http://localhost:5012/messages', {
        date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
        author1: number,
        author2: req.body.myId,
        author2Name: req.body.myName,
        text: req.body.text
      })
        .then(data => res.redirect('/messages'))
        .catch(error => res.render('error', {error: error}))
    }
})



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