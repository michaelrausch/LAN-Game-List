var express = require('express');
var router = express.Router();
var gamedb = require('../lib/gamedb')

/* GET home page. */
router.get('/:name/:ip/:owner/:game/:desc', function(req, res, next) {
  gamedb.addGame(req.params.name, req.params.ip, req.params.owner, req.params.game,req.params.desc);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('success');
});

module.exports = router;
