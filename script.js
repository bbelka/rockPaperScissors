let win = 0;
let tie = 0;
let loss = 0;
const choices = ["R", "P", "S"];

const getUserChoice = async () => {

    const userChoice = prompt("Rock, Paper or Scissors? Type R, P, or S.").toUpperCase();

    const valid = await validateUserChoice(userChoice);

    switch (valid) {
        case true:
            return userChoice;
            
        default:
            break;
    }
};

const validateUserChoice = async (choice) =>{
    switch (choice) {

        case "R":
        case "P":
        case "S":
            return true;

        default:
            return false
    }
}


const getComputerChoice = async () => {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    alert(`Computer chooses ${computerChoice}`);

    return computerChoice;
};


const determineOutcome = async (userChoice, computerChoice) => {

    let outcome = "";

    if (userChoice === computerChoice) {
        tie++;
        outcome = "tie";

    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")) {
        win++;
        outcome = "win";

    } else {
        loss++;
        outcome = "lose"
    };

    return outcome;
};


const displayOutcome = async (outcome) => {

    switch (outcome) {

        case "tie":
            alert("It's a tie!")
            break;

        case "win":
        case "lose":
            alert(`You ${outcome}!`);
            break;
    };
}


const displayStats = async () => {

    alert(`Your record:
Wins: ${win}
Losses: ${loss}
Ties: ${tie}`);
};


const rePlayGame = () => {

    var rePlay = confirm("Would you like to play again?")

    switch (rePlay) {
        case true:
            game();
            break;
        default:
            break;
    };
};

const game = async () => {
    await displayOutcome(await determineOutcome(await getUserChoice(), await getComputerChoice()));
    await displayStats();
    rePlayGame();
}

game();