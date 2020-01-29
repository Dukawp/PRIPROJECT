var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcryptjs');

const fs = require('fs')
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

//var File = require('../models/file')


// GET feed
router.get('/', verifyAuthetication, function(req, res) {

    var user = 1;
    if(req.session.passport.user == "admin"){

        console.log('INTERFACE: admin permissions granted');
        res.redirect('../admin/feed');

    }
    else{

        if(req.query.group){

          var userNumber = req.session.passport.user;
          var group = req.query.group;
          console.log('INTERFACE: get feed of group. Group: ' + group);
          axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/publications?group=' + group)
                  .then(data => res.render('feed', {feed: data.data, user, userI: userInfo.data}))
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));
        }
        else if(req.query.event){

          var userNumber = req.session.passport.user;
          var event = req.query.event;
          console.log('INTERFACE: get feed of event. Event: ' + event);
          axios.get('http://localhost:5012/users/' + userNumber + '/profile')
              .then(userInfo => {

                axios.get('http://localhost:5012/publications?event=' + event)
                  .then(data => res.render('feed', {feed: data.data, user, userI: userInfo.data}))
                  .catch(error => res.render('error', {error: error}))

              })
              .catch(error => res.render('error', {error: error}));

        }
        else if(req.query.search){

            var tag = req.query.search;
            console.log('INTERFACE: search. Search: ' + tag);
            var userNumber = req.session.passport.user;
            axios.get('http://localhost:5012/users/' + userNumber + '/profile')
                .then(userInfo => {

                  axios.get('http://localhost:5012/publications?tag=' + tag)
                    .then(data => res.render('feed', {feed: data.data, user, userI: userInfo.data}))
                    .catch(error => res.render('error', {error: error}))

                })
                .catch(error => res.render('error', {error: error}));

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
router.post('/newPublication', upload.array('file'), verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new publication');
    var reg = new Date();
    var number = req.session.passport.user;
    console.log("AAAAAAAAAAAAAAAA-----> "+ req.files.length)

    var allFiles = []
    var listaErros = []
    for(let i = 0 ; i < req.files.length ; i++){
        let oldPath = __dirname + '/../' + req.files[i].path
        console.log('O CAMINHO ONDE VOU BUSCAR  -> '+oldPath)
        let newPath = __dirname + '/../public/files/' + req.files[i].originalname
        console.log('ONDE VOU GUARDAR -> ' + newPath)
        fs.rename(oldPath, newPath, function(err) {
            if (err) throw err
        })
        allFiles.push(newPath)
    }
    if(reg.getUTCDate() < 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() < 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles
          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() >= 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() < 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() < 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() >= 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + '0' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() < 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() < 10 && reg.getUTCMinutes() >= 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + '0' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else if(reg.getUTCDate() >= 10 && reg.getUTCHours() >= 10 && reg.getUTCMinutes() < 10){

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + '0' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
    else{

      axios.get('http://localhost:5012/users/' + number + '/profile')
        .then(data => {
      
          axios.post('http://localhost:5012/publications', {

            title: req.body.title,
            text: req.body.text,
            date: reg.getUTCFullYear() + '/' + reg.getUTCMonth()+1 + '/' + reg.getUTCDate() + ' ' + reg.getUTCHours() + ':' + reg.getUTCMinutes(),
            tags: req.body.tags,
            author: number,
            authorName: data.data.name,
            target: req.body.target,
            files: allFiles

          })
          .then(data => res.redirect('/feed'))
          .catch(error => res.render('error', {error: error}))
        })
        .catch(error => res.render('error', {error: error}))

    }
});

// POST new comment
router.post('/newComment', verifyAuthetication, function(req, res) {

    console.log('INTERFACE: post new comment');
    var number = req.session.passport.user;
    axios.post('http://localhost:5012/publications/newComment', {

      id: req.body.myId,
      commentAuthor: number,
      commentText: req.body.commentText
      
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