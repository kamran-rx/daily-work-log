 //  Guess the number Game

 let userGuess = 4 ;
 let secretnumber = Math.floor(Math.random()*10 + 1)
 
 function guessGame(userGuess ,secretnumber){
            if (userGuess  == secretnumber){
                 return `Congratulations !! Your answer "${userGuess}" is correct...`
            }      
            if ( userGuess<secretnumber){
                     return ` You guessed ${userGuess} ...Guess high `
            }
            if ( userGuess>secretnumber){
                 return ` You guessed ${userGuess} ...Guess Low  `
            }

 }
 let result = guessGame (userGuess,secretnumber)
 console.log(" the secret number is ",secretnumber);
 console.log(result)
    