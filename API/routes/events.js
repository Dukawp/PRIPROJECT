var express = require('express');
var router = express.Router();
var passport = require('passport');

var Events = require('../controllers/events');

router.get('/', function(req, res) {

  // GET one event by name
  if(req.query.name){

    Events.findByName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all events
    Events.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
});

// GET one event by id
router.get('/:id', function(req, res) {

  var id = req.params.id;
  Events.findOne(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new event
router.post('/', function(req, res){

  console.log('API:');
  console.log(req.body);
  Events.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE event
router.delete('/:id', function(req, res){

  var id= req.params.id;
  Events.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;