var express = require('express');
var router = express.Router();


var Messages = require('../controllers/messages');

router.get('/', function(req, res) {

  console.log('API: get all messages');
 

});

router.get('/:id', function(req, res) {

      console.log('API: get all messages');
      Messages.findMyFriends(req.params.id)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));

});

router.get('/from/:id', function(req, res) {

  var id1 = req.params.id.split(' - ')[0]
  var id2 = req.params.id.split(' - ')[1]
  
  console.log('API: get all messages');
  Messages.findMessages(id1, id2)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

router.post('/', function(req, res) {

    console.log('API: post new publication');
    Messages.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));
  
  });

module.exports = router;