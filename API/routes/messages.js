var express = require('express');
var router = express.Router();


var Messages = require('../controllers/messages');

router.get('/', function(req, res) {

      console.log('API: get all messages');
      Messages.find()
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