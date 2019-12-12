var express = require('express');
var router = express.Router();

var Users = require('../controllers/users')

router.get('/', function(req, res) {

    //GET all users
    Users.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));

});

// GET one user
router.get('/:id', function(req, res) {

    Users.findOne(req.params.id)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));
  
  });

module.exports = router;