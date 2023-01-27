var spaces = ["", "", "", "", "", "", "", "", ""];
update();

function update() {
    for (i = 0; i < spaces.length; i++) {
        document.getElementById("space" + (i + 1).toString()).innerHTML = spaces[i];
    }
}

function playerMove(x) {
    spaces[x - 1] = "X";
    update();
}