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