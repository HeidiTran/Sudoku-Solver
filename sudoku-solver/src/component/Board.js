import React from 'react';
import { SquareComponent } from './Square';
import { Row, Container, Button } from 'react-bootstrap';
import { solveSudoku } from './solve';
 
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
    let board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
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
    let t0 = performance.now();
    let board = solveSudoku(this.state.squares.slice());
    let t1 = performance.now();
    console.log(`It took ${(t1 - t0).toFixed(3)} milliseconds to solve!`);
    this.setState({squares: board});
  }

  render() {
    return (
      <div>
        <Container>
          {this.buildBoard()}
        </Container>
        <Row className="button-row">
          <Button
            variant='danger' 
            className='mt-5 mr-5' 
            onClick={this.resetBoard}
          >
            Reset
          </Button>
          <Button
            variant='success' 
            className='mt-5' 
            onClick={this.solveAndUpdateBoard}
          >
            Solve!
          </Button>
        </Row>
      </div>
    );
  }
}