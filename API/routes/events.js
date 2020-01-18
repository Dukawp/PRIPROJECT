var express = require('express');
var router = express.Router();

var Events = require('../controllers/events');

router.get('/', function(req, res) {

  // GET one event by name
  if(req.query.name){

    var name = req.query.name;
    console.log('API: get one event by name. Name: ' + name);
    Events.findByName(name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    // GET all events
    console.log('API: get all events');
    Events.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
});

// GET one event by ID
router.get('/:id', function(req, res) {

  var id = req.params.id;
  console.log('API: get one event my ID. ID: ' + id);
  Events.findOne(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new event
router.post('/', function(req, res){

  console.log('API: post new event');
  Events.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE event
router.delete('/:id', function(req, res){

  var id = req.params.id;
  console.log('API: delete event. ID: ' + id);
  Events.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;