$(document).ready( function(){
	console.log("Estamos listos!")

	$(".js-menu").hide();

	 $(".js-show-recipe").click(function(){
 		$(".page").removeClass("make");
	 });
 	
	 $(".js-show-make").click(function(){
 		$(".page").addClass("make");
 	});	

});
	



