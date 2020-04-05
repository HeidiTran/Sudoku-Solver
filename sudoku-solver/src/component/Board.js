import React from 'react';
import { SquareComponent } from './Square';
import { Row, Container, Button } from 'react-bootstrap';
import { solveSudokuSucceed } from '../functions/solve';
 
export const BOARD_SIZE = 9;

export class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
    };
    
    this.resetBoard = this.resetBoard.bind(this);
    this.solveAndUpdateBoard = this.solveAndUpdateBoard.bind(this);
  }

  handleClick(r, c) {
    const squares = this.state.squares.slice();
    let newValue = squares[r][c];

    if (newValue === null) {
      newValue = 1;
    } else if (newValue === 9) {
      newValue = null;
    } else {
      newValue++;
    }

    squares[r][c] = newValue;
    this.setState({squares: squares});
  }

  buildBoard() {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const board = rows.map((row) => this.buildRow(row));
    return board;
  }

  buildRow(rowNumber) {
    const cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const row = cols.map((col) =>
      this.renderSquare(rowNumber, col)
    );

    return (
      <div
        key={"row-" + rowNumber.toString()}
        className="board-row"
      >
        {row}
      </div>
    );
  }

  resetBoard() {
    const board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    this.setState({squares: board});
  }

  renderSquare(r, c) {
    return (
      <SquareComponent
        id={"square-" + r.toString() + "-" + c.toString()}
        key={"square-" + r.toString() + "-" + c.toString()}
        value={this.state.squares[r][c]}
        onClick={() => this.handleClick(r, c)}
      />
    );
  }

  solveAndUpdateBoard() {
    const startTime = performance.now();
    const board = this.state.squares.slice();
    if (solveSudokuSucceed(board)) {
      const endTime = performance.now();
      console.log(`It took ${(endTime - startTime).toFixed(3)} milliseconds to solve!`);
      this.setState({squares: board});
      // TODO: prevent users from changing cellValue after Sudoku is solved
    }
    
    // TODO: Handle if solveSudokuSucceed fails due to invalid board
  }

  render() {
    return (
      <div>
        <Container>
          {this.buildBoard()}
        </Container>
        <Row className="button-row mb-5 mt-5">
          <Button
            variant='danger' 
            className='mr-5' 
            onClick={this.resetBoard}
          >
            Reset
          </Button>
          <Button
            variant='success'  
            onClick={this.solveAndUpdateBoard}
          >
            Solve!
          </Button>
        </Row>
      </div>
    );
  }
}