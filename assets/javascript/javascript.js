var randomAnimal = ["koala", "rabbit", "platypus", "opposum"];
console.log(randomAnimal);
//call function when button is clicked
//make it so that the button searches for the correct data
// $('button').on('click', function(){
// 	var x = $(this).data("search");

// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + randomAnimal + "&api_key=dc6zaTOxFJmzC&limit=10";
// 	console.log(queryURL)
// })

function showButtons() {

	//clear out text from button div
	$("#button").empty();

	//loop through array of randomAnimal
	for (var i = 0; i < randomAnimal.length; i++) {
		
		//generate buttons for all animals in array
		var y = $("<button>");

		//add class of animal to button
		y.addClass("animal");

		//add data-attribute
		y.attr("data-name"),
			randomAnimal[i];

		//give button text
		y.text(randomAnimal[i]);

		//add button to button div
		$("#button").append(y);

	}
};


//event listener when movie button clicked
$("#addButton").on("click", function(event){

	//keeps button from triggered default event
	event.preventDefault();

	//takes input from textbox
	var animal = $("#animalInput").val().trim();

	//add movie from textbox to array
	randomAnimal.push(animal);

	//call showButtons function to complete array
	showButtons();
})

//buttons are ready
///////////////////////////////////////////////////////////////////////////////////////////////////
//setup calls to api

function showAnimalGif() {

	var animalData = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animalData + "&api_key=dc6zaTOxFJmzC&limit=10";
	console.log(queryURL)

	$.ajax({
		url: queryURL,
		method: "GET"
	});

// 	.done(function(response) {
	
// 	var results = response.data.image_original_url;
// 	console.log(results)

// 	var gifImage = $("<img>");

// 	gifImage.attr("src", results);

// 	gifHere.append(gifImage);

// 	$("#gifHere").prepend(gifImage);

// });

	};


$(document).on("click", ".animal", showAnimalGif);

showButtons();