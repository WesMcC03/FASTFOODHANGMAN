// Create a Word Bank
const wordbank = ['Wendys','Mcdonalds','Chickfila','Whataburger','Taco Cabana','Sonic','Taco Bell','Jack in the Box','Arbys','KFC','Raising Canes',
 'Panda Express','Burger King','Carls Jr.','Dairy Queen','Popeyes',]

 // Randomly select a word
var word = Math.floor(Math.random() * wordbank.length);

// Sets up # of Underscore's needed
var Answer =[];
for (var i = 0; i , word.length; i++) {
    Answer[i] = "_";
}

// creates variable to hold number of letters to be guessed
var remainingletters = word.length;


// MAIN GAME
while (remainingletters > 0); {
    // Show progess
    alert(Answer.join("_"));

    // Recieve a guess from player
    var guess = prompt('Guess a letter, or click cancel to quit!')

    // If guess is blank
    if (guess ==null){
        // exiut game loop
        break;
        // if guess is more than one letter or no letters
        }else if (guess.length !== 1) {
            // alert them to guess single letter
            alert("Please only guess a single letter!")
            // valid guess
        }else {
            // update the game state with the guess
            for (var j= 0; j < word.length; j++) {
                // if the letter guessed is correct
                if (word[j] ===guess) {
                    // update word with letter guessed
                    Answer[j] = guess;
                    // subtract one from remaining letters
                    remainingletters --;
                }

            }

        }
        //  END OF GAME LOOP
    }
    // Let player know word picked
    alert(Answer.join("_"));
    //  congratulate the player
    alert("Good job! The  answer was " + word);   


