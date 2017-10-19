var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("index.html", {root: path.join(__dirname, '../../news-front/build/')} );
});

module.exports = router;