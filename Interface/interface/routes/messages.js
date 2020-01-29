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
          var group = req.query.group;
          console.log('INTERFACE: get feed of group. Group: ' + group);
          axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/publications?group=' + group)
                  .then(data => res.render('messages', {feed: data.data, user, userI: userInfo.data}))
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));
    }
});

router.post('/newPm', verifyAuthetication, function(req, res) {
  var reg = new Date();
  var number = req.session.passport.user;
  console.log("------------------------>" + number)
  axios.post('http://localhost:5012/messages', {
    date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
    author1: number,
    author2: req.body.myId,
    text: req.body.text
  })
    .then(data => res.redirect('/messages'))
    .catch(error => res.render('error', {error: error}))
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