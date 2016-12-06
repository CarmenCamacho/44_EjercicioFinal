$(document).ready( function(){
	$(".js-back").hide();
	printNews();
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
});

/*
// Función que escribe en el P 
*/
	function printNews(){
		$(".callout-news > p").text("NUEVAS RECETAS");
	}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	for (var i = 0; i < activities.length ; i++){
		renderActivity(activities[i]);
		console.log('Activity: ' + i, activities);
	}
	if (activities.length > 0){
		$(".wrapper-message").hide();
	}

}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	console.log('Recipes: ', recipesArray);
	var arreglo = recipesArray.length;

	for (var i = 0; i <= arreglo; i++){
		var receta = recipesArray[i];
		if (receta) {
			if (receta.highlighted == true){
			renderRecipe(receta);	
		}	
		}
		
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	// console.log('Voy a pintar la receta: ', recipe);


	var item = $('<a>').attr("class", "item-recipe");
	var attribution = $('<span>').attr("class", "attribution");
	item.append(attribution);

	var title = $("<span>").attr("class", "title-recipe");
	title.text(recipe.title);
	attribution.append(title);

	var metadata = $('<span>').attr("class", "metadata-recipe");
	attribution.append(metadata);

	var author = $('<span>').attr("class","author-recipe");
	author.text(recipe.source.name)
	var bookmarks = $('<span>').attr("class", "bookmarks-recipe");
	metadata.append(author);

	var icon = $('<span>').attr("class", "icon-bookmark");
	bookmarks.append(icon);

	metadata.append(bookmarks);
	var image = $('<img>');
	image.attr("src", "img/recipes/640x480/" + recipe.name + ".jpg"); 
	item.append(image);

$(".list-recipes").append(item);

}




/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(actividad) {
	 var template =
    '<a href="#" class="item-activity">'+
      '<span class="attribution">'+ 
      	'<span class="avatar">'+   
      		'<img src="<%= userAvatar %>" class="image-avatar">'+
      	'</span>'+ 
      	'<span class="meta">'+ 
       		'<span class="author"><%= userName %></span>'+
       		'<span class="recipe"><%= recipeName %></span>'+
       		'<span class="location"><%= place %></span>'+
      	'</span>'+
      '</span>'+ 
      '<div class="bg-image" style="background-image: url(<%= image %>)"></div>' +
    '</a>';
  
  var compiled= _.template(template);
  var compilado=compiled(actividad);
$(".list-activities").append(compilado);
}


