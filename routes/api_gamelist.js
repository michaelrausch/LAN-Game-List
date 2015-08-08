var express = require('express');
var redis = require("redis");
var router = express.Router();

var gameDatabase = redis.createClient();

gameDatabase.on("error", function(err){
  console.log("Error" + err);
});

gameDatabase.on('connect', function() {
    console.log('[init] Database Available To Remove Games');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonResponse = '{ "games": [';
  gameDatabase.lrange('games', 0, -1, function(err, reply) {
    for (var i = reply.length - 1; i >= 0; i--) {
    	if(i == 0){
			jsonResponse += "" + reply[i] + "";
    	} 
    	else{
    		jsonResponse += "" + reply[i] + ", ";
    	}
    };
    jsonResponse += "]}";
    nres = jsonResponse.replace(/'/g, '"');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(nres); 
  });

});

module.exports = router;
