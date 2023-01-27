var spaces = ["", "", "", "", "", "", "", "", ""];
var gameOver = false;
update();
document.getElementById("statusText").innerHTML = "Welcome to Tic-Tac-Toe! Click a square to start the game.";

//updates text in grid (can be "", X or O)
function update() {
    for (i = 0; i < spaces.length; i++) {
        document.getElementById("space" + (i + 1).toString()).innerHTML = spaces[i];
    }
}
//If the game is still running and the space is blank, adds an x to the space, checks win  condition  and updates message accordingly
function playerMove(x) {
    if (gameOver === false) {
        if (spaces[x - 1] === "") {
            spaces[x - 1] = "X";
            update();
            checkWin("X");
            if (gameOver === true) {
                document.getElementById("statusText").innerHTML = "You win! Click here to reset.";
            }
            else {
                document.getElementById("statusText").innerHTML = "It's your turn.";
            }
        }
        else {
            document.getElementById("statusText").innerHTML = "That square is already taken, please try again.";
        }
    }
}

//Sets the game back to its initial parameters if the game is over
function resetGame() {
    if (gameOver === true) {
        spaces = ["", "", "", "", "", "", "", "", ""];
        gameOver = false;
        update();
        document.getElementById("statusText").innerHTML = "Welcome to Tic-Tac-Toe! Click a square to start the game.";
    }
}

//Checks for all possible 3 in a rows
function checkWin(m) {
    //Check rows
    for (i = 0; i < spaces.length; i = i + 3) {
        if (spaces[i] === spaces[i + 1] && spaces[i] === spaces[i + 2] && spaces[i] === m) {
            gameOver = true;
        }
    }
    //Check columns
    for (i = 0; i < spaces.length / 3; i++) {
        if (spaces[i] === spaces[i + 3] && spaces[i] === spaces[i + 6] && spaces[i] === m) {
            gameOver = true;
        }
    }
    //Check diagonals
    if (spaces[0] === spaces[4] && spaces[0] === spaces[8] && spaces[0] === m) {
        gameOver = true;
    }
    if (spaces[2] === spaces[4] && spaces[2] === spaces[6] && spaces[2] === m) {
        gameOver = true;
    }
}