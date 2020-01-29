var express = require('express');
var router = express.Router();
var axios = require('axios');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var antlr4 = require('antlr4/index');
var RegisterLexer = require('../grammar/registerLexer').registerLexer;
var RegisterParser = require('../grammar/registerParser').registerParser;
var RegisterListener = require('../grammar/registerListener').registerListener;
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

// GET login page
router.get('/login', function(req, res) {

  res.render('login');

});

// POST user login
router.post('/login', passport.authenticate('local',
  
  { successRedirect: '../feed',
    successFlash: 'Authentication successful!',
    failureRedirect: '/auth/login',
    failureFlash: 'Wrong credentials...'
  }
));

// GET register page
router.get('/register', function(req, res) {

  res.render('register');
  
});

// GET register by ANTLR page
router.get('/register/antlr', function(req, res) {

  res.render('antlr');
  
});


// POST new user
router.post('/register', function(req, res) {

  console.log('INTERFACE: post new user');
  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:5012/users', {

    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: hash

  })
    .then(res.redirect('/auth/login'))
    .catch(error => res.render('error', {error: error}))

});

// POST new user with ANTLR
router.post('/register/antlr', function(req, res) {

  var chars = new antlr4.InputStream(req.body.text);
  var lexer = new RegisterLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new RegisterParser(tokens);

  parser.buildParseTrees = true;
  var tree = parser.register();
  var registerListener = new RegisterListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(registerListener, tree);
  var hash = bcrypt.hashSync(tree.password, 10);

  axios.post('http://localhost:5012/users', {

    name: tree.name,
    number: tree.number,
    email: tree.email,
    password: hash

  })
    .then(res.redirect('/auth/login'))
    .catch(error => res.render('error', {error: error}))

});

// POST new user with ANTLR with file
router.post('/register/antlr/file', upload.single('file'), function(req, res) {

  console.log('INTERFACE: req.file: ' + req.file);
  console.log('INTERFACE: req.file.path: ' + req.file.path);
  let filepath = __dirname + '/../' + req.file.path
  console.log('INTERFACE: filepath: ' + filepath);
  var contents = fs.readFileSync(filepath, 'utf8');
  console.log('INTERFACE: file: ' + contents);

  var chars = new antlr4.InputStream(contents);
  var lexer = new RegisterLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new RegisterParser(tokens);

  parser.buildParseTrees = true;
  var tree = parser.register();
  var registerListener = new RegisterListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(registerListener, tree);
  var hash = bcrypt.hashSync(tree.password, 10);

  axios.post('http://localhost:5012/users', {

    name: tree.name,
    number: tree.number,
    email: tree.email,
    password: hash

  })
    .then(res.redirect('/auth/login'))
    .catch(error => res.render('error', {error: error}))

});

// GET user logout
router.get('/logout', verifyAuthetication, function(req, res) {

  console.log('INTERFACE: logout');
  req.logout();
  res.redirect('../');

});

// Verify authentication
function verifyAuthetication(req, res, next){

  if(req.isAuthenticated()){
    //req.isAuthenticated() will return true if user is logged in
    next();
  }
  else{
    res.redirect('/auth/login');
  }
};

module.exports = router;