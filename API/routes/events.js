var express = require('express');
var router = express.Router();

var Events = require('../controllers/events')

router.get('/', function(req, res) {

  // GET one event by name
  if(req.query.name){

    Events.findByName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));

  }
  else{

    //GET all events
    Events.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));

  }
});

// GET one event by id
router.get('/:id', function(req, res) {

  Events.findOne(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));
  
});

module.exports = router;