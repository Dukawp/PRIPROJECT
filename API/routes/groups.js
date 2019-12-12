var express = require('express');
var router = express.Router();

var Groups = require('../controllers/groups')

router.get('/', function(req, res) {

    //GET all groups
    Groups.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));

});

// GET one group
router.get('/:id', function(req, res) {

    Groups.findOne(req.params.id)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));
  
  });

module.exports = router;