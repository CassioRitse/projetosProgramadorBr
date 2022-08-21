document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    let btnRestart = document.getElementById("restart");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })

    btnRestart.addEventListener("click", refreshGame);
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if(position){
        console.log(position);

        if (handleMove(position)) {
            alert("O Jogo Acabou");
        }
        updateSquare(position);
    }
}

function refreshGame(){
    resetGame();
    resetSquares();
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        square.innerHTML = `<div class='${symbol}'></div>`
    })
}