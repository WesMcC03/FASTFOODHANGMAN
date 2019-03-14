var wordbank = ['wendys','mcdonalds','chickfila','whataburger','taco cabana','sonic','taco bell','jack in the box','arbys','kfc','raising canes',
 'panda express','burger king','carls jr.','dairy queen','popeyes',];

 // Randomly select a word
var randomnum = Math.floor(Math.random() *wordbank.length);
var wordpicked = wordbank[randomnum];
var underscore = [];
var rightguess = [];
var wrongguess = [];



// Dom Manipulation
var docUnderScore = document.getElementById('UnderScore')
// console.log here in order to check the word for debugging purpose
console.log(wordpicked)
var docrightletter = document.getElementById('rightletter')
var docwrongletter = document.getElementById('wrongletter')
 


// Generate amount of underscores needed for word randomly selected 
var underscoreword = () => {
    for(let i = 0; i < wordpicked.length; i++ ) {
        underscore.push('_');
        
    }
    return underscore;
}

// Get a letter guess from user
document.addEventListener('keypress',(event) => {
    var keyword = String.fromCharCode(event.keyCode);

// Check if users guess is right
    if(wordpicked.indexOf(keyword) > -1) {
    //add to right guess array  
        rightguess.push(keyword);
        
        // replaces underscore with right letter and inserts right letter right guess array
        underscore[wordpicked.indexOf(keyword)] = keyword;
        docUnderScore.innerHTML = underscore.join(' ');
        docrightletter.innerHTML = rightguess.join(' ');
        }
             // sends an incorrect guess to wrongguess array
    else {
        wrongguess.push(keyword);
        docwrongletter.innerHTML = wrongguess.join(' ')
             }
      
        //  Alerts users when word has been guessed
     
    
    
   });

    // This is the statement I tried to use in the if statement above, however was unsuccessful    
   if (underscore.join(' ') == wordpicked){
    alert('You WIN!');
 }
  
docUnderScore.innerHTML = underscoreword()



