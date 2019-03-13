// Create a Word Bank
const wordbank = ['Wendys','Mcdonalds','Chickfila','Whataburger','Taco Cabana','Sonic','Taco Bell','Jack in the Box','Arbys','KFC','Raising Canes',
 'Panda Express','Burger King','Carls Jr.','Dairy Queen','Popeyes',]

 // Randomly pick a work from the Word Bank
var randomnum = Math.floor(Math.random() *wordbank.length);
var wordpicked = wordbank[randomnum];
var underscore = [];
console.log(wordpicked);
// Generate amount of underscores needed for word randomly selected 
let underscoreword = () => {
    for(let i = 0; i < wordpicked.length; i++ ) {
        underscore.push('_');
    }
    return underscore;
}

console.log(underscoreword());
// Recieve a letter choice from the player
document.addEventListener('keypress',(event) => {
    var keyword = String.fromCharCode(event.keyCode)
    console.log(keyword); 
    });


// Check letter choice
// If the guess is correct, send the letter to the rightletter array
// If the guess is incorrect, send the letter to the wrong letter array