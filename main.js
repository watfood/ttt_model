console.log("main.js loaded")

/* MODEL */

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", // 0, 1, 2
  "", "", "", // 3, 4 ,5
  "", "", "" // 6, 7, 8
];

// 1. Start The Game
// 2. Move + changes turn
//    inputs:
//    -whose turn it is,
//    - what cell?
//    outputs / outcome
//    - fill in cell with the rigth player
//    - calculate if there is a winner
//    - turn changes
var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if currentPlayer === "X" {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }

};


// 3. Win the Game
var gameWon = function() {

}
