
var grapeArray = ["syrah", "chardonnay", "viognier", "mourvedre", "muscadet", "trollinger", "merlot", "granache", "carignan", "colombard"]

var wins = 0;

var userGuesses = [];

var underScores = [];

var randomGrape;

var randomGrapeArray = [];

var wrongLetters = [];

var guessesLeft = 10;


function grapeGame() {

    var randomGrape = grapeArray[Math.floor(Math.random() * grapeArray.length)];
    randomGrapeArray = randomGrape.split("");
    console.log("random grape = " + randomGrape);
    underScores = [];
    for (var i = 0; i < randomGrape.length; i++) {
        underScores.push(' _ ');

    }

    console.log (underScores);

    document.getElementById("current-word").innerHTML = underScores.join(" ");
    //to reset
    guessesLeft = 10;

    var wrongLetter = 0;

    document.getElementById("guesses-remaining").innerHTML = guessesLeft;

}






document.onkeyup = function (event) {

    userGuesses = event.key;
    
    console.log("USER PRESSED: " + userGuesses)
    if (randomGrapeArray.indexOf(userGuesses) > -1) {
        for (var i = 0; i < randomGrapeArray.length; i++) {
            {
                if (randomGrapeArray[i] === userGuesses){
                    underScores[i] = userGuesses;    
                }
                
            }
        }
    }
    else {
        if(wrongLetters.indexOf(userGuesses) == -1) {

        
        wrongLetters.push(userGuesses);
        guessesLeft--;
        }
    }

    document.getElementById("current-word").innerHTML = underScores.join(" ");
    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    document.getElementById("letters-used").innerHTML = wrongLetters.join(",");

    var flag = true;
    for (var i = 0; i < randomGrapeArray.length; i++) {
        {
            if (underScores.indexOf(randomGrapeArray[i]) == -1){
                flag = false;
            }
            
        }
    }
    if(flag == true){
        alert("CONGRATS! " + randomGrapeArray.join("") + " was correct!" )
        grapeGame();
    }
}


grapeGame();
