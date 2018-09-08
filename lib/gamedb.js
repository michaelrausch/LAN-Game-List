var gameList = [];

module.exports.addGame = function(server_name, server_ip, server_owner, server_game, server_desc){
	var game = {
		'server_name': server_name,
		'server_ip': server_ip,
		'server_owner': server_owner,
		'server_game': server_game,
		'server_desc': server_desc
	}
	
	gameList.push(game)
}

module.exports.getAll = function(){
    return gameList;
}

