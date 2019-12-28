var express = require('express');
var router = express.Router();

var Publications = require('../controllers/publications')

router.get('/', function(req, res) {

  //GET all publications
  Publications.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));

});

// GET one publication by id
router.get('/:id', function(req, res) {

  Publications.findOne(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));
  
});

module.exports = router;