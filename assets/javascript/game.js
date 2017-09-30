/*<link rel="stylesheet" type="text/javaScript" href="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">*/

//letters to choose from	
	var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var userGuess = "";
	var lettersRemain = 0;
	var rightGuess = 0;
	var wrongGuess = 0;
	var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

	console.log(randomLetter);




$(".letter").on("click", function (event) {
	userGuess = event.target.innerHTML;
	userGuess = userGuess.toLowerCase();
	console.log(userGuess);
	$(this).fadeTo("slow",.5);
	
	if (userGuess === randomLetter) {
		console.log("You are a good guesser!");
	}

	// updateGuesses();


});

function updateGuesses() {
	var guessBox = $('.remainingGuess');

	// grab the inner contents of that element
	// e.g. '10'
	var guessBox = document.getElementsByClassName(".remainingGuess");
	console.log(guessBox);


	// convert that value to a number

	// decrease that number by 1
	// e.g. var x = 10;
	// x--;

	// check to see if that number is 0 
	// or less than 0

	// If you're out of guesses - do some work

	// take that new value
	// insert it back into that same html element
}

//guessed letter will cause fade button to fade

        



//Guessed letter goes into userGuess, if correct, letter is added added to rightGuess, if wrong, nothing happens, user must keep choosing letters, until they get to 5 guesses 

//if all 5 guesses are guessed without the answer being correct, game over alert

//if answer is guessed, winner alert

</script>