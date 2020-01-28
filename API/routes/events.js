var express = require('express');
var router = express.Router();

var Events = require('../controllers/events');
var Users = require('../controllers/users');

router.get('/', function(req, res) {

  // GET one event by name
  if(req.query.name){

    var name = req.query.name;
    console.log('API: get one event by name. Name: ' + name);
    Events.findByName(name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else if(req.query.desc){

    var desc = req.query.desc;
    console.log('API: get events by description');
    Events.getByDescription(desc)
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

// POST user joins event
router.post('/join/:id', function(req, res) {

  var id = req.params.id;
  var number = req.body.number;
  console.log('API: post user joins event. User number: ' + number + '. Event ID: ' + id);

  Events.getName(id)
    .then(data => {

      console.log('API: event name: ' + data.name);
      Users.joinEvent(number, data.name)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));

    })
    .catch(error => res.status(500).jsonp(error));

});

// POST user exits event
router.post('/exit/:id', function(req, res) {

  var id = req.params.id;
  var number = req.body.number;
  console.log('API: delete user exits event. User number: ' + number + '. Event ID: ' + id);

  Events.getName(id)
    .then(data => {

      console.log('API: event name: ' + data.name);
      Users.exitEvent(number, data.name)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));

    })
    .catch(error => res.status(500).jsonp(error))

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