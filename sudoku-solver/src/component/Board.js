import React from 'react';
import { SquareComponent } from './Square';
import { Row } from 'react-bootstrap';

const BOARD_SIZE = 9;

export class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
    };
  }
  
  handleClick(r, c) {
    const squares = this.state.squares.slice();
    let newValue = squares[r][c];

    if (newValue === null || newValue === 9) {
      newValue = 1;
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
      <Row 
        key={"row-" + rowNumber.toString()}
        className="board-row"
      >
        {row}
      </Row>
    );
  }

  renderSquare(r, c) {
    return (
      <SquareComponent
        key={"square-" + r.toString() + "-" + c.toString()} 
        value={this.state.squares[r][c]}
        onClick={() => this.handleClick(r, c)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.buildBoard()}
      </div>
    );
  }
}