var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/', verifyAuthetication, function(req, res) {

    if(req.session.passport.user == "admin"){

        res.redirect('../admin/users');

    }
    else
      res.redirect('../');

});

router.get('/:number', verifyAuthetication, function(req, res) {

    var number = req.params.number;
    axios.get('http://localhost:5012/users/' + number)
        .then(data => res.render('user', {user: data.data}))
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