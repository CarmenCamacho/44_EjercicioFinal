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

	 $(".js-back").click(function(){
	 	window.location = "index.html"
	 })

});




  var template =
    '<a href="#" class="item-activity">'+
      '<span class="attribution">'+ 
      	'<span class="avatar">'+   
      		'<img src="<%= activities.userAvatar %>">'+
      	'</span>'+ 
      	'<span class="meta">'+ 
       		'<span class="author"><%= activities.UserName%></span>'+
       		'<span class="recipe"><%= activities.recipeName%></span>'+
       		'<span class="location"><%= activities.place%></span>'+
      	'</span>'+
      '</span>'+ 
    '</a>';
  
  var compiled=_.template(template);



