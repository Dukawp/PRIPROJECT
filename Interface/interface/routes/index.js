var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res) {
  res.render('login', {
      title: 'Login'
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
      title: 'About'
  });
});



module.exports = router;