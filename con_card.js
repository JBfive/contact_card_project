


$(document).ready(function(){
	
	

	$("#basic").submit(function(){
		var firstname= $("input[name=firstname").val();
		var lastname= $("input[name=lastname").val();
		var describe= $("textarea").val();
			
	
		$("#con_card").append("<div class='card'><h1>"+firstname+"</h1><h1>"+lastname+"</h1><h3>"+describe+"</h3><p>Click to flip</p></div>");
	

		return false;
		
	});
	$(document).on("click", ".card", function(){
		$(this).children().toggle();

	});
});