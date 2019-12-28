var express = require('express');
var router = express.Router();

var Groups = require('../controllers/groups')

router.get('/', function(req, res) {

  // GET one group by name
  if(req.query.name){

    Groups.findByName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));

  }
  else{

    //GET all groups
    Events.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).json(error));

  }

});

// GET one group by id
router.get('/:id', function(req, res) {

  Groups.findOne(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).json(error));
  
});

module.exports = router;