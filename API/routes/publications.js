var express = require('express');
var router = express.Router();
var passport = require('passport');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var Publications = require('../controllers/publications');
var Publication = require('../models/publications')

router.get('/', function(req, res) {

  //GET all publications
  Publications.find()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// GET one publication by id
router.get('/:id', function(req, res) {

  var id = req.params.id;
  Publications.findOne(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new publication
router.post('/', upload.array('file'), function(req, res) {

  console.log('API:');
  console.log(req.body);
  Publications.insert(req.body)
  .then(data => res.jsonp(data))
  .catch(error => res.status(500).jsonp(error));

});

// DELETE publication
router.delete('/:id', function(req, res){

  var id = req.params.id;
  console.log('API: delete publication ID: ' + id);
  Publications.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;