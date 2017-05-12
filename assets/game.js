

    // variable letters
var letters = ['a', 'b', 'c',  'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Tracking wins, losses and ties. I.e. score...
var wins = 0;

var losses = 0;

var guesses = 10;

var guessedLetters //Will log user guesses

var psykerChoice = letters[Math.floor(Math.random() * letters.length)];
//will allow dev to see computer choice verify that code is working...
console.log(psykerChoice);

//Player presses key and funnction will run...
document.onkeyup = function(event) {
  var userGuess = event.key;
  var guessedLetters = event.key;
  if(userGuess === psykerChoice){
      wins++;
      guesses =10;
  }else{
      guesses--;
  };

  if(guesses === 0){
      losses++;
      guesses = 10;
  };

  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "Losses: " + losses;
  document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
  document.getElementById('user_guesses').innerHTML = "Letter you guessed: " + guessedLetters;
};
