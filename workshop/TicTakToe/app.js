//1. Make board
// <div class 'board'>
// w/ 9 cells <div>
// player 1 / player 2
//indicate who's turn it is

//2. Cells need to be clickable
// clicking add a value (x or O) to the cell
// once there is a value, it can't be changed anymore

//3. ability to clear board (optional)

//4.  2 players
//flag for current player
//each player is assigned x or o

//5. create an array of current cell values
//refresh on each change

//6. create all win conditions
//

const game = [0,1,2,3,4,5,6,7,8];

let counter = 0;

const board = document.getElementById("board");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";

let currentPlayer = "1";
player1.classList.add("active");

function win() {
    console.log(currentPlayer);
    board.removeEventListener('click', handleClick);
    alert(`Player ${currentPlayer} wins!`);
}

function verifyWin() {
        //rows
        if (game[0] === game[1] && game[1] === game[2]) win();
        if (game[3] === game[4] && game[4] === game[5]) win();
        if (game[6] === game[7] && game[7] === game[8]) win();
        //diag
        if (game[0] === game[4] && game[4] === game[8]) win();
        if (game[2] === game[4] && game[4] === game[6]) win();
        //columns
        if (game[0] === game[3] && game[3] === game[6]) win();
        if (game[1] === game[4] && game[4] === game[7]) win();
        if (game[2] === game[5] && game[5] === game[8]) win();
}

function togglePlayer() {
  currentPlayer = currentPlayer === "1" ? "2" : "1";
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

function handleClick() {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  let location = cell.charAt(cell.length - 1);
  const icon = currentPlayer === "1" ? PLAYER_1_ICON : PLAYER_2_ICON;
  
  if (typeof game[location] === 'number') {
    currentCellDiv.innerText = icon;
    game[location] = icon;
    counter +=1;
    if (counter < 9) {
        verifyWin();
        togglePlayer();
    } else {
        alert('DRAW!');
    } 
  }
}

board.addEventListener("click", handleClick);