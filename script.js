var win = 0;
var tie = 0;
var loss = 0;

//in this case, user adn computer choice must be in the global scope because they are accessed in multiple functions
var userChoice = "";
var computerChoice = "";

var choices = ["R", "P", "S"];


function getUserChoice() {

    //prompt user R,P,S, store that to a variable
    userChoice = prompt("Rock, Paper or Scissors? Type R, P, or S.");

    //convert user choice to uppercase for standardization
    userChoice = userChoice.toUpperCase();

    //handle invalid input
    if (
        userChoice !== "R"
        &&
        userChoice !== "P"
        &&
        userChoice !== "S"
    ) {
        alert("You MUST pick R, P, or S.");
        getUserChoice();
    };

    getComputerChoice();
};


function getComputerChoice() {

    //generate computer choice

    //generate random index
    var randomIndex = Math.floor(Math.random() * choices.length);

    //use random index to select computer choice and store in variable
    computerChoice = choices[randomIndex];

    //alert user of computer choice
    alert("The computer choice is " + computerChoice);

    determineOutcome();
};


function determineOutcome() {

    //compare choices and alert user of outcome

    //tie
    if (userChoice === computerChoice) {
        tie++;
        alert("It's a tie!!");

    } else if (

        //win
        //user rock, comp scissors || user paper comp rock || user scissors comp paper
        (userChoice === "R" && computerChoice === "S")
        ||
        (userChoice === "P" && computerChoice === "R")
        ||
        (userChoice === "S" && computerChoice === "P")) {

        win++;
        alert("You win!!");
    } else {

        //loss
        loss++;
        alert("You lose!")
    }

    displayStats();
};


function displayStats() {

    //show user's cumulative score
    alert(
        `Your record:
Wins: ${win}
Losses: ${loss}
Ties: ${tie}`);

    rePlayGame();
};


function rePlayGame() {
    //ask if user would like to play again

    var rePlay = confirm("Would you like to play again?")

    if (rePlay === true) {

        //yes = start over from top

        getUserChoice();
    } else {

        //no = end
        return;
    }
};

getUserChoice();