var spaces = ["", "", "", "", "", "", "", "", ""];
var gameOver = false;
update();
document.getElementById("statusText").innerHTML = "Welcome to Tic-Tac-Toe! Click a square to start the game.";

//updates text in grid (can be "", X or O)
function update() {
    for (a = 0; a < spaces.length; a++) {
        document.getElementById("space" + (a + 1).toString()).innerHTML = spaces[a];
    }
}
//If the game is still running and the space is blank, adds an x to the space, checks win  condition  and updates message accordingly
function playerMove(x) {
    if (gameOver === false) {
        if (spaces[x - 1] === "") {
            spaces[x - 1] = "X";
            update();
            if (!spaces.includes("")) {
                checkWin("X");
                if (gameOver === true) {
                    document.getElementById("statusText").innerHTML = "You win! Click here to reset.";
                }
                else {
                    gameOver = true;
                    document.getElementById("statusText").innerHTML = "It's a tie! Click here to reset.";
                }
            }
            else {
                checkWin("X");
                if (gameOver === true) {
                    document.getElementById("statusText").innerHTML = "You win! Click here to reset.";
                }
                else {
                    document.getElementById("statusText").innerHTML = "It's the computer's turn.";
                    computerTurn();
                    update();
                    checkWin("O");
                    if (gameOver === true) {
                        document.getElementById("statusText").innerHTML = "The computer wins! Click here to reset.";
                    }
                    else {
                        document.getElementById("statusText").innerHTML = "Click a square to place an X.";
                    }
                }
            }
        }
        else {
            document.getElementById("statusText").innerHTML = "That square is already taken, please try again.";
        }
    }
}

function computerTurn() {
    //determine list of possible moves (all blank spaces)
    blanks = [];
    for (ia = 0; ia < spaces.length; ia++) {
        if (spaces[ia] === "") {
            blanks.push(ia);
        }
    }
    var chosenSpace = 12;
    var spaceAssigned = false;
    //Check for opportunities to win
    for (ja = 0; ja < blanks.length; ja++) {
        spaces[blanks[ja]] = "O";
        if (mockCheckWin("O") === true) {
            chosenSpace = blanks[ja];
            spaceAssigned = true;
        }
        spaces[blanks[ja]] = "";
    }
    if (spaceAssigned === false) {
        //if that fails, check for opportunities to stop opponent from winning
        for (ka = 0; ka < blanks.length; ka++) {
            spaces[blanks[ka]] = "X";
            if (mockCheckWin("X") === true) {
                chosenSpace = blanks[ka];
                spaceAssigned = true;
            }
            spaces[blanks[ka]] = "";
        }
        if (spaceAssigned === false) {
            // if that fails, pick a random blank space
            chosenSpace = blanks[Math.floor(Math.random() * blanks.length)];
            spaceAssigned = true;
        }
    }
    spaces[chosenSpace] = "O";
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
    for (ib = 0; ib < spaces.length; ib = ib + 3) {
        if (spaces[ib] === spaces[ib + 1] && spaces[ib] === spaces[ib + 2] && spaces[ib] === m) {
            gameOver = true;
        }
    }
    //Check columns
    for (jb = 0; jb < spaces.length / 3; jb++) {
        if (spaces[jb] === spaces[jb + 3] && spaces[jb] === spaces[jb + 6] && spaces[jb] === m) {
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

function mockCheckWin(m) {
    //Check rows
    for (ic = 0; ic < spaces.length; ic = ic + 3) {
        if (spaces[ic] === spaces[ic + 1] && spaces[ic] === spaces[ic + 2] && spaces[ic] === m) {
            return true;
        }
    }
    //Check columns
    for (jc = 0; jc < spaces.length / 3; jc++) {
        if (spaces[jc] === spaces[jc + 3] && spaces[jc] === spaces[jc + 6] && spaces[jc] === m) {
            return true;
        }
    }
    //Check diagonals
    if (spaces[0] === spaces[4] && spaces[0] === spaces[8] && spaces[0] === m) {
        return true;
    }
    if (spaces[2] === spaces[4] && spaces[2] === spaces[6] && spaces[2] === m) {
        return true;
    }
}