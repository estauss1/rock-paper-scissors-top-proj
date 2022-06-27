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

function playARound(userSelection, computerSelection){
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