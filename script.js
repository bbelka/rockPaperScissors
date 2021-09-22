var win = 0;
var tie = 0;
var loss = 0;

var choices = ["R", "P", "S"];

function game() {
    //TODO: prompt user R,P,S, save that to a variable
    var userChoice = prompt("Rock, Paper or Scissors? Type R, P, or S.");
    //edge case: what if they use lowercase letters?
    userChoice = userChoice.toUpperCase();

    if (
        userChoice !== "R"
        &&
        userChoice !== "P"
        &&
        userChoice !== "S"
    ) {
        alert("You MUST pick R, P, or S.");
        game()
    }

    //TODO: generate computer choice
    //generate random index
    var randomIndex = Math.floor(Math.random() * choices.length);
    //use random index to select computer choice
    //store comuputer in a variable
    var computerChoice = choices[randomIndex];

    alert("The computer choice is " + computerChoice);

    //TODO: compare choices
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
        loss++;
        alert("You lose!")
    }

    //loss
    // //comp rock, user scissors || comp paper user rock || comp scissors user paper


    //TODO: show cumulative score
    //include wins losses and ties
    alert(`Your record:
Wins: ${win}
Losses: ${loss}
Ties: ${tie}`)

    //TODO: ask to play again
    //start over from top

    var rePlay = confirm("Would you like to play again?")

    if (rePlay===true) {
        game();
    }else{
        return;
    }
}

game();
