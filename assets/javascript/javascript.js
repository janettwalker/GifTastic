//array of animals that will display when page opens
var randomAnimal = ["koala", "rabbit", "platypus", "opposum"];
console.log(randomAnimal);

//function that renders the buttons from the array of randomAnimals
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
		y.attr("data-name", randomAnimal[i]);
			

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


});


//buttons are ready
///////////////////////////////////////////////////////////////////////////////////////////////////
//setup calls to api


//function that will call the gif api and retrieve the data based on the button input
function showAnimalGif() {

	//run function on #button click
	$("#button").on("click", function(){


	var animalData = $(this).attr("data-name");

	//queryURL to find the giphy api
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animalData + "&api_key=dc6zaTOxFJmzC&limit=10";
	console.log(queryURL)

	//function that retrieves api data (the promise)
	$.ajax({
		url: queryURL,
		method: "GET"
	})

	//function that determines what happens to the retrieved data
	.done(function(response) {
	
	//variable for the data that we get from response
	var results = response.data;
	console.log(results)

	//create a for loop to loop through the data from the response
	for (var i = 0; i < results.length; i++) {

	//create a div for the rating and gif images
	var gifDiv = $("<div class='item'>");
 	
 	//variable for the rating in array of results
	var rating = results[i].rating;

	//create html paragraph for the rating text
	var p = $("<p>").text("Rating: " + rating);

	//create html img for the gifs
	var gifImage = $("<img>");

	//assigning an attribute to the image and giving it a source that is from the array of results
	gifImage.attr("src", results[i].images.fixed_height.url);

	//prepend rating text to the gifDiv
	gifDiv.prepend(p);

	//prepend the gif images to the gifDiv
	gifDiv.prepend(gifImage);

	//adding the gifDiv to the id="gifHere"
	$("#gifHere").append(gifDiv);

	};

});

});

};

//call the showButtons function
showButtons();

//call the showAnimalGif function
showAnimalGif ();



