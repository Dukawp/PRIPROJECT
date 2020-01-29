var express = require('express');
var router = express.Router();


var Publications = require('../controllers/publications');

router.get('/', function(req, res) {

  if(req.query.group){

    var group = req.query.group;
    console.log('API: get all publications of a group. Group: ' + group);
    Publications.sortByDateByGroup(group)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else if(req.query.event){

    var event = req.query.event;
    console.log('API: get all publications of an event. Event: ' + event);
    Publications.sortByDateByEvent(event)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else if(req.query.tag){

    var tag = req.query.tag;
    console.log('API: get publications by tag');
    Publications.getByTag(tag)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }
  else{

    //GET all publications
    console.log('API: get all publications');
    Publications.sortByDate()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));

  }

});

// GET one publication by ID
router.get('/:id', function(req, res) {

  var id = req.params.id;
  console.log('API: get one publication by ID. ID: ' + id);
  Publications.findOne(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
  
});

// POST new publication
router.post('/', function(req, res) {

  console.log('API: post new publication');
  console.log(req.body.title);
  Publications.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// POST new comment
router.post('/newComment', function(req, res) {

  console.log('API: post new comment');
  var id = req.body.id;
  var commentAuthor = req.body.commentAuthor;
  var commentText = req.body.commentText;
  Publications.insertComment(id, commentAuthor, commentText)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));

});

// DELETE publication
router.delete('/:id', function(req, res){

  var id = req.params.id;
  console.log('API: delete publication ID: ' + id);
  Publications.remove(id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))

});

module.exports = router;