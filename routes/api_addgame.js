var express = require('express');
var redis = require("redis");
var router = express.Router();

var gameDatabase = redis.createClient();

gameDatabase.on("error", function(err){
  console.log("Error" + err);
});

gameDatabase.on('connect', function() {
    console.log('[init] Database Available To Add Games');
});

function addGame(server_name, server_ip, server_owner, server_game, server_desc){
	var formJson = "{'server_name': '" + server_name +"',"
				  + "'server_ip': '" + server_ip + "',"
				  + "'server_owner': '" + server_owner + "',"
				  + "'server_game': '" + server_game + "',"
				  + "'server_desc': '" + server_desc + "'}";

	console.log("Adding Game: " + formJson);

	gameDatabase.rpush(['games', formJson], function(err, reply) {
   		console.log(reply); //prints 2
	});
}

/* GET home page. */
router.get('/:name/:ip/:owner/:game/:desc', function(req, res, next) {
  var gameAdded = addGame(req.params.name, req.params.ip, req.params.owner, req.params.game,req.params.desc);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('success');
});

module.exports = router;
