import { BOARD_SIZE } from './Board';

export function solveSudoku(board) {
  let validPositions = getValidPositions(board);
  backTrack(0, board, validPositions);
  return board;
}

function backTrack(validPositionIndex, curBoard, validPositions) {
  if (isFinal(curBoard)) 
    return;
  
  let position = validPositions[validPositionIndex];
  let nextSteps = getNextSteps(position, curBoard);

  let r = position.row;
  let c = position.col;
  nextSteps.forEach(step => {
    if (!isFinal(curBoard))
      curBoard[r][c] = step;
    backTrack(validPositionIndex + 1, curBoard, validPositions);
    if (!isFinal(curBoard))
      curBoard[r][c] = null;
  });
}

function getValidPositions(board) {
  let positions = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === null)
        positions.push(new Position(i, j)); 
    }  
  }

  return positions;
}

function isFinal(curBoard) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (curBoard[i].indexOf(null) !== -1) 
      return false;    
  }

  return true;
}

function getNextSteps(position, curBoard) {
  let curRow = position.row;
  let curCol = position.col;

  // Remove elems already in row
  let steps = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  steps = new Set([...steps].filter(function(x) { return curBoard[curRow].indexOf(x) < 0}));
  // Remove elems already in col
  for (let row = 0; row < BOARD_SIZE; row++) {
    var cellValue = curBoard[row][curCol];
    if (cellValue !== null && steps.has(cellValue)) 
      steps.delete(cellValue);
  }

  // Remove elems in group
  const groupSize = BOARD_SIZE / 3;
  let topLeftR = Math.floor(curRow / groupSize) * groupSize;
  let topLeftC = Math.floor(curCol / groupSize) * groupSize;
  for (let i = topLeftR; i < topLeftR + groupSize; i++) {
    for (let j = topLeftC; j < topLeftC + groupSize; j++) {
      cellValue = curBoard[i][j];
      if (cellValue !== null && steps.has(cellValue)) 
        steps.delete(cellValue);  
    }  
  }

  return Array.from(steps);
}

class Position {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}