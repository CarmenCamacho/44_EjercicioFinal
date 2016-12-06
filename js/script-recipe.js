$(document).ready( function(){
	console.log("Estamos listos!")

	$(".js-menu").hide();

	 $(".js-show-recipe").click(function(){
 		$(".page").removeClass("make");
 		$(this).addClass("active");
 		$(".js-show-make").removeClass("active");
	 });
 	
	 $(".js-show-make").click(function(){
 		$(".page").addClass("make");
 		$(this).addClass("active");
 		console.log("no se que pasa")
 		$(".js-show-recipe").removeClass("active");
 	});	

});
	


