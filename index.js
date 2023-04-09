// Defining the Sudoku(s)
let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
let p8zzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
let puzzleCopy = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
// Defining Functions
function getRow(puzzle, indexRow) {
  //   Grab the Row out of the puzzle Array
  return puzzle[indexRow];
}

function getColumn(puzzle, indexCol) {
  //   Grab the Index of each Row Array
  let arrCol = [];

  for (let i = 0; i < puzzle.length; i++) {
    let row = puzzle[i];
    arrCol.push(row[indexCol]);
  }
  return arrCol;
}

function getSection(puzzle, xCoord, yCoord) {
  //   Grab the 3 Indexes of 3 Row Arrays
  let arrSec = [];

  for (let i = yCoord * 3; i < yCoord * 3 + 3; i++) {
    arrSec.push(...puzzle[i].slice(xCoord * 3, xCoord * 3 + 3));
  }
  return arrSec;
}

function includes1to9(arr) {
  for (let num = 1; num <= 9; num++) if (arr.indexOf(num) === -1) return false;
  return true;
//   Strange Behavior when adding '{}'
}

function sudokuIsValid(puzzle) {
  for (let i = 0; i < 9; i++)
    if (
      !includes1to9(getRow(puzzle, i)) ||
      !includes1to9(getColumn(puzzle, i)) ||
      !includes1to9(getSection(puzzle, i % 3, Math.floor(i / 3)))
    ) {
      return false;
    }
  return true;
}

console.log(sudokuIsValid(puzzle));
console.log(sudokuIsValid(p8zzle));

function isSame(puzzle, puzzle2) {
  for (let i = 0; i < 81; i++)
    if (puzzle[Math.floor(i / 9)][i % 9] !== puzzle2[Math.floor(i / 9)][i % 9]){
      return false};
    return true;
}

console.log(isSame(puzzle, puzzleCopy));
console.log(isSame(puzzle, p8zzle));
console.log(isSame(puzzle, puzzle));
