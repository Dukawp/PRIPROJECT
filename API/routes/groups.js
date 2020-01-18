var express = require('express');
var router = express.Router();

var Groups = require('../controllers/groups');

router.get('/', function(req, res) {

  // GET one group by name
  if(req.query.name){

    var name = req.query.name;
    console.log('API: get one group by name. Name: ' + name);
    Groups.findByName(name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all groups
    console.log('API: get all groups');
    Groups.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }

});

// GET one group by ID
router.get('/:id', function(req, res) {

  var id = req.params.id;
  console.log('API: get one group by ID. ID: ' + id);
  Groups.findOne(d)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new group
router.post('/', function(req, res){

  console.log('API: post new group.');
  Groups.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE group
router.delete('/:id', function(req, res){

  var id = req.params.id;
  console.log('API: delete group. ID: ' + id);
  Groups.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;