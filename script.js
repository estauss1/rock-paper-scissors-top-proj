/*
computerPlay func - randomly returns a string either rock paper or scissors
Algo:
-randomly select a number either 1, 2 or 3
(random function * 90) + 1
-based on the random number choose between a case of a switch statement
-each case of the switch will have a return statement with either returning rock paper or scissors string
 */

function computerPlay() {
    const randNum = Math.floor(Math.random() * 90) + 1; //random number between 1 and 90 (inclusive)
    console.log(randNum);
    if(randNum <= 30){
        return "Rock";
    } else if(randNum <= 60){
        return "Paper";
    } else {
        return "Scissors";
    }
}

/* playARound function - plays a round of rock paper scissors and returns a string saying if you won or lose and why
-function parameters are the string of the players selection and the computers random selection 
-convert user argument into correct string form
-if user selection is the same as computer selection return "It's a draw! You both chose " the selection.
-do all the possible cases in a if else if statements and return the correct string
*/

function playRound(userSelection, computerSelection){
    //make string in correct format
    userSelection = userSelection.toLowerCase();
    const firstChar = userSelection.charAt(0);
    const capitalChar = firstChar.toUpperCase();
    userSelection = userSelection.replace(firstChar, capitalChar);
    
    const youLose = "You Lose! ";
    const youWin = "You Win! ";
    const paperBeatsRock = "Paper beats Rock";
    const scissorsBeatsPaper = "Scissors beats Paper";
    const rockBeatsScissors = "Rock beats Scissors";
    if(userSelection == computerSelection){
      return `It's a draw! You both chose ${userSelection}`;
    } else if(userSelection == "Rock"){
        if(computerSelection == "Paper"){
            return youLose + paperBeatsRock;
        } else if(computerSelection == "Scissors"){
            return youWin + rockBeatsScissors;
        }
    } else if(userSelection == "Scissors"){
        if(computerSelection == "Paper"){
            return youWin + scissorsBeatsPaper;
        } else if(computerSelection == "Rock"){
            return youLose + rockBeatsScissors;
        }
    } else if(userSelection == "Paper"){
        if(computerSelection == "Rock"){
            return youWin + paperBeatsRock;
        } else if(computerSelection == "Scissors"){
            return youLose + scissorsBeatsPaper;
        }
    }
}

/*
wonOrLose func - takes the string given by playRound and returns a string of the winner
-store a new string that is from index 4 to 7 inclusive
-compare this string to win and lose string and based on this return a string either user or computer
*/

function winOrLose(fullString){
    const toCompare = fullString.slice(4,8);
    if(toCompare == "Win!"){
        return "user";
    } else if(toCompare == "Lose"){
        return "comp";
    } else{
        return "tie";
    }
}

/*
game func - plays a 5 round game and announces who won at the end
-intitialize a variable for computerwins and userwins to zero
-use a for loop that iterates 5 times
-inside loop ask for user input using prompt
-pass the user input and computerplay func into playRound function
-determine the winner and increment the appropriate variable
-exit loop and determine whether computerwins or userwins is greater
-return a string depending on winner
*/

function game(){
    let compWins = 0;
    let userWins = 0;
    let userString;
    let winOrLoseStmt;
    let whoWon;
    for(let i = 0; i < 5; ++i){
        userString = prompt("Enter rock, paper or scissors: ");
        winOrLoseStmt = playRound(userString, computerPlay());
        whoWon = winOrLose(winOrLoseStmt);
        if(whoWon == "user") ++userWins;
        else if(whoWon == "comp") ++compWins;
    }
    if(compWins > userWins){
        return `You Lose! You won ${userWins} round(s) and the computer won ${compWins} round(s)`;
    } else if(userWins > compWins){
        return `You Win! You won ${userWins} round(s) and the computer won ${compWins} round(s)`;
    } else{
        return `Its a tie! You won ${userWins} round(s) and the computer won ${compWins} round(s)`
    }
}

