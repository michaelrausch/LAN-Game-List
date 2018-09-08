$(function() {
	function displayLoading(){
    	$('.current_games').html("<h1>Loading Game List...</h1>");
    }

    function displayError (message) {
    	var errHTML = "<h1>"+ message +"</h1>"
    	$('.current_games').html(errHTML);
    }

    function displayGames(result){
    	console.log(result);
    	var gameListHtml = "";
    	var gameIcon = "/img/game-icon.png";

    	if(result.length == 0){
			displayError("There are no games");
    	}
    	else{
    		for (var i = result.length - 1; i >= 0; i--) {
	    		console.log(result[i]);
	    		gameListHtml += '<div class="game"><div class="icon"><img src="' + gameIcon + '" height="80px" width="80px"></div>'
	    					 +  '<div class="description"><h3>' + result[i]['server_name'] + ' | '+ result[i]['server_ip'] + "</h3>"
	    					 +  '<p>' + result[i]['server_desc'] + '. This server is hosted by ' + result[i]['server_owner'] + '</p>'
	    					 +  '</div></div>';
    		};
    		$('.current_games').html(gameListHtml);
    	}

    	//console.log(gameListHtml);
    }

    function refreshGameList(){
    	$.ajax({
    		type: 'GET', 
			dataType: 'json',
    		url: "/api/gamelist",
    		success: function(result){
				console.log(result)
        		displayGames(result);
    		},
    		error: function(){
    			displayError("Disconnected From Server");
    		}
    	});
    }

    displayLoading();
    setInterval(function(){
    	refreshGameList();
 	}, 3000);
});