/*Prompts the user for their name
Prompts the user if they would like to play 3 or 6 holes of golf
Prompts the user three or six times (depending on their answer for #2) for the number of putts for each hole
Each prompt for the score displays the specific hole they are on "(hole 1", "hole 2" or "hole 3")
A console log is made on completion of the 4 total prompts
The console log displays the user’s name
The console log includes the correct number for the par calculation
If even with par, the console log reads: "Good game, (user’s name). Your total par was: 0"
If under par, the console log reads: "Great job, (user’s name)! Your total par was: -(par)" (don’t forget the minus (-) symbol!
If over par, the console log reads: "Nice try, (user’s name)... Your total par was: +(par)" (don’t forget the plus (+) symbol!
    USEFUL!!!
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
        module 3 section 5.2 while loops
        else if link: https://www.youtube.com/watch?v=IsG4Xd6LlsM
        refer to gc youtube video for (let i=0;)
fix if/else if- all 3 showing in consol?
*/

let username = prompt("Welcome to Paul's mini golf! What is your name?");
let holes = prompt("Hi, "+ username +"! Would you like to play 3 or 6 holes?");
let putt = 0;
let score = 0;
let hole = 1;
let total = holes * 3;
while(holes != "3" && holes != "6"){
}
    for (let i=0; i < holes; i++){
    let putt = Number( prompt("How many putts for hole "+ hole +"? (par: 3)") );
    hole ++;
    score += putt;
}

if (score > total) {
    console.log("Nice try, " + username + "... Your total par was: + " + (score - total));
}else if (score < total) {
    console.log("Great job, " + username + "! Your total par was: " + (score - total));
}else if (score === total) {
    console.log("Good game, " + username + ". Your total par was: 0");
}