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
        
        // replaces underscore with right letter
        underscore[wordpicked.indexOf(keyword)] = keyword;
        docUnderScore.innerHTML = underscore.join(' ');
        docrightletter.innerHTML = rightguess.join(' ');
        }
            //  Alerts users when word has been guessed
    else {
        wrongguess.push(keyword);
        docwrongletter.innerHTML = wrongguess.join(' ')
             }
       // sends an incorrect guess to wrongguess array
    
     if (underscore.join(' ') == wordpicked){
        alert('You WIN!');
     }
    
    
   });
  
docUnderScore.innerHTML = underscoreword()



