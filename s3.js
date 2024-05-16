var boardSize = 10;
var playerPosition = 1;

function createBoard() {
    var board = document.getElementById("board");
    board.innerHTML = "";

    var cellCount = boardSize * boardSize;
    for (var i = 1; i <= cellCount; i++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = i;
        board.appendChild(cell);
    }

    addSnakesAndLadders();
    updatePlayerPosition();
}

function addSnakesAndLadders() {
    var snakesAndLadders = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78
    };

    Object.keys(snakesAndLadders).forEach(function (start) {
        var end = snakesAndLadders[start];
        document.querySelector(`#board .cell:nth-child(${start})`).classList.add("snake");
        document.querySelector(`#board .cell:nth-child(${end})`).classList.add("ladder");
    });
}

function updatePlayerPosition() {
    document.getElementById("player-position").innerText = playerPosition;
    var cells = document.querySelectorAll("#board .cell");
    cells.forEach(function (cell) {
        cell.classList.remove("active");
    });
    cells[playerPosition - 1].classList.add("active");
}

function rollDice() {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").innerText = diceResult;
    playerPosition += diceResult;
    if (playerPosition > boardSize * boardSize) {
        playerPosition = boardSize * boardSize;
    }
    updatePlayerPosition();
    checkForSnakesAndLadders();
}

function checkForSnakesAndLadders() {
    var snakesAndLadders = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78
    };

    if (snakesAndLadders[playerPosition]) {
        playerPosition = snakesAndLadders[playerPosition];
        updatePlayerPosition();
    }
}

window.onload = function () {
    createBoard();
};
