$(document).ready( function(){
	$(".js-back").hide();


	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

/*
// Función que escribe en el P 
*/
	function printNews(){
		$(".callout-news > p").text("NUEVAS RECETAS");
	}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	console.log('Recipes: ', recipesArray);
	var arreglo = recipesArray.length;

	for (var i = 0; i <= arreglo; i++){
		var receta = recipesArray[i]
		if (receta.highlighted == true){
			renderRecipe(receta);	
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
	console.log('Voy a pintar la receta: ', recipe);
	console.log(recipe.title)
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
	image.attr("src", recipe.source.url); 
	item.append(image);

$(".list-recipes").append(item);


}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


