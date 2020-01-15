var express = require('express');
var router = express.Router();
var passport = require('passport');

var Groups = require('../controllers/groups');

router.get('/', function(req, res) {

  // GET one group by name
  if(req.query.name){

    Groups.findByName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all groups
    Groups.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }

});

// GET one group by id
router.get('/:id', function(req, res) {

  var id = req.params.id;
  Groups.findOne(d)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new group
router.post('/', function(req, res){

  console.log('API:');
  console.log(req.body);
  Groups.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE group
router.delete('/:id', function(req, res){

  var id = req.params.id;
  Groups.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;