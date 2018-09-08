var express = require('express');
var router = express.Router();
var gamedb = require('../lib/gamedb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.contentType = "Application/JSON"
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(gamedb.getAll()); 
});

module.exports = router;
