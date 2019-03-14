// Global Variables
var rightguess = [];
var wrongguess = [];
var underscore = [];

// Create a Word Bank
var wordbank = ['Wendys','Mcdonalds','Chickfila','Whataburger','Taco Cabana','Sonic','Taco Bell','Jack in the Box','Arbys','KFC','Raising Canes',
 'Panda Express','Burger King','Carls Jr.','Dairy Queen','Popeyes',]

 // Randomly select a word
var randomnum = Math.floor(Math.random() *wordbank.length);
var wordpicked = wordbank[randomnum];



// Dom Manipulation
var docUnderScore = document.getElementById('UnderScore')
console.log(docUnderScore)

 


// Generate amount of underscores needed for word randomly selected 
var underscoreword = () => {
    for(let i = 0; i < wordpicked.length; i++ ) {
        underscore.push('_');
        
    }
    return underscore;
}


// Get a letter guess from user
document.addEventListener('keypress',(event) => {
    var keyword = String.fromCharCode(event.keyCode)

// Check if users guess
    if(wordpicked.indexOf(keyword) > -1) {
    //add to right guess array  
        rightguess.push(keyword);
        // replaces underscore with right letter
        underscore[wordpicked.indexOf(keyword)] = keyword;
        console.log(underscore); }
            //  Alerts users when word has been guessed
        if(underscore.join("") == wordpicked){
        alert('You WIN!');
     }
       // sends an incorrect guess to wrongguess array
    else {
        wrongguess.push(keyword);
     }
    
    
   });
underscoreword().join(' ')  
docUnderScore.innerHTML = underscoreword()



// Check letter choice
// If the guess is correct, send the letter to the rightletter array
// If the guess is incorrect, send the letter to the wrong letter array