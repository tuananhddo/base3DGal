var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  const data = [{name : 'model1'}, {name : 'models2'}];
  res.send(JSON.stringify(data))
});

module.exports = router;
