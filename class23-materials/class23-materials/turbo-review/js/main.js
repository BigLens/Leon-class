// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const stringAssign = 'sentence as a string?';
   // alert(stringAssign.endsWith('?'));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multipleWords = 'I am a jr. dev'
console.log(multipleWords.replaceAll('jr. dev', 'software engineer'));


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function randomSPR() {
    let possibleRandom = Math.random()
    if (possibleRandom < .33) {
        return 'rock'
    }else if (possibleRandom < .66) {
        return 'paper'
    }else {
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin (playerWins) {
    let botChoice = randomSPR()
    if ( (botChoice === 'rock' && botChoice === 'scissors') || (botChoice === 'paper' && botChoice === 'rock') || (botChoice ==='scissors' && 'paper')) {
        console.log('Wineerrrrrr!!!!');
    }else if (botChoice === playerWins) {
        console.log('Tiiiiieddddd!!!');
    }else {
        console.log('looossiiigammeee!!');
    }

}
checkWin('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


