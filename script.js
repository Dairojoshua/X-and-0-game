let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(index) {
  if (board[index] === " ") {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWin()) {
      alert("Player " + currentPlayer + " wins!");
      resetBoard();
    } else if (!board.includes(" ")) {
      alert("It's a tie!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6] // diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== " " && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}
