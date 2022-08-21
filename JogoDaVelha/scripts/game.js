let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;  // 0 ou 1
let gameOver = false;

let symbols = ['o', 'x'];

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 1) ? 0 : 1
        }
    }

    return gameOver;
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }

    return false;
}

function resetGame(){
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;  // 0 ou 1
    gameOver = false;       
    console.log("JOGO REINICIADO");
}
