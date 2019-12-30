var express = require('express');
var router = express.Router();
var passport = require('passport');

var Groups = require('../controllers/groups');

router.get('/', passport.authenticate('jwt', {session:false}), function(req, res) {

  // GET one group by name
  if(req.query.name){

    Groups.findByName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all groups
    Events.find()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }

});

// GET one group by id
router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {

  Groups.findOne(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new group
router.post('/', passport.authenticate('jwt', {session:false}), function(req, res){

  Group.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE group
router.delete('/:id', passport.authenticate('jwt', {session:false}), function(req, res){

  Groups.remove(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;