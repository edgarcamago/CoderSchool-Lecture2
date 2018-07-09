let    min = 1;
let    max = 100;
let    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let    pastGuesses = [];
let    gameCount = 10;
console.log(randomNum)

let name;
let score;
let scoreArray = [];

// ---- UNFINISHED ----
// let scoreGetter = function () {
//     name = prompt('Enter initials here.')
//     score = pastGuesses.length
//     scoreArray.push( {
//         name, score } )
//     console.log(scoreArray)
// }

// function ResetGlobalVariables() {
//     min = 1;
//     max = 100;
//     randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     pastGuesses.length = 0
//     gameCount = 10
//     i = 0
// }


let userGuess = parseInt(prompt(`Please guess a number between ${min} and ${max}.`)) 


for (let i = 0; i < gameCount - 1; i++) {
    
    // UNFINISHED    
    // if (gameCount - pastGuesses.length == 0) {
    //     ResetGlobalVariables()

    // if (pastGuesses.length == gameCount) {
    //     // ResetGlobalVariables()
    //     userGuess = parseInt(prompt(`Please guess a number between ${min} and ${max}.`)) 
    //     console.log(randomNum)
        
    if (isNaN(userGuess) || Math.sign(userGuess) == -1 || Math.sign(userGuess) == 0) {
            userGuess = parseInt(prompt(`Words, zero, or negative numbers are not allowed. Please input a positive integer between ${min} and ${max}.`))
    
        } else if (userGuess == randomNum) {
            pastGuesses.push(userGuess)
            alert(`Congratulations! ${randomNum} was the correct answer! It took you ${pastGuesses.length} tries to guess the answer.`)
            break;
            // scoreGetter()

        } else if (pastGuesses.includes(userGuess) == true) {
            userGuess = parseInt(prompt(`You already guessed ${userGuess}. Please input a positive integer between ${min} and ${max}.`))

        } else if (i == 0 && userGuess != randomNum) {
            pastGuesses.push(userGuess)
            userGuess = parseInt(prompt(`Wrong! Guesses left: ${gameCount - pastGuesses.length}. You just guessed: ${pastGuesses.join(', ')}`));
        } else if (Math.abs(userGuess - randomNum) < Math.abs(pastGuesses[pastGuesses.length - 1] - randomNum)) {
            pastGuesses.push(userGuess)
            console.log(pastGuesses)
            userGuess = parseInt(prompt(`You're getting warmer! Guesses left: ${gameCount - pastGuesses.length}. Your past guesses are: ${pastGuesses.join(', ')}`));
        } else {
            pastGuesses.push(userGuess)
            console.log(pastGuesses)
            userGuess = parseInt(prompt(`You're getting colder! Guesses left: ${gameCount - pastGuesses.length}. Your past guesses are: ${pastGuesses.join(', ')}`));
        }
} 



// TOO LOW - TOO HIGH
//     } else if (userGuess < randomNum) {
//         pastGuesses.push(userGuess)
//         userGuess = parseInt(prompt(`Guess is too low. You have ${gameCount - pastGuesses.length} guesses left. Your past guesses are: ${pastGuesses.join(', ')}`));
//     } else {
//         pastGuesses.push(userGuess)
//         userGuess = parseInt(prompt(`Guess is too high. You have ${gameCount - pastGuesses.length} Your past guesses are: ${pastGuesses.join(', ')}`));
