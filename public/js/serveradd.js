$(function(){
	function generateURI(server_name, server_ip, your_name, server_game, server_desc){
		var submitString = "http://127.0.0.1:3000/api/addgame/" + server_name + "/" + server_ip + "/"
					     + your_name + "/" + server_game + "/" + server_desc;

		return submitString;
	}


	$(".addGameForm").submit(function( event ) {
	  var server_name 	=	$('#server_name').val();
	  var server_ip 	= 	$('#server_ip').val();
	  var your_name 	= 	$('#your_name').val();
	  var server_desc 	= 	$('#server_desc').val();
	  var server_game 	= 	$('#server_game').val();

	  if(server_name == "" || server_ip   == "" || your_name   == "" || server_desc == "" || server_game == ""){
	  	$('.errorMessage').html("Please Fill Out All Fields");
	  	console.log("Please Fill Out All Fields");
	  }
	  else{
	  	var submitURI = generateURI(server_name, server_ip, your_name, server_game, server_desc);
	  	console.log(submitURI);
	  	$.ajax({
    		type: 'GET',
    		url: submitURI,
    		success: function(result){
        		$('.errorMessage').html("Game Added");
    		},
    		error: function(){
    			$('.errorMessage').html("Could Not Connect To Server");
    		}
    	});

		$('.addGameForm').find("input[type=text], textarea").val("");
	  	
	  }

	  event.preventDefault();
	});

	  

	  
	  
});