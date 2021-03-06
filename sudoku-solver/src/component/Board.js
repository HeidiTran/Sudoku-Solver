import React from 'react';
import { SquareComponent } from './Square';
import { Row, Container, Button, Modal, div, Card, Toast } from 'react-bootstrap';
import { solveSudokuSucceed } from '../functions/solve';
 
export const BOARD_SIZE = 9;

export class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)),
      selectedCell: [],
      showNumPad: false,
      showToast: false,
      toastBody: "",
      solved: false
    };
    
    this.resetBoard = this.resetBoard.bind(this);
    this.solveAndUpdateBoard = this.solveAndUpdateBoard.bind(this);
    this.numPad = this.numPad.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showToastSuccess = this.showToastSuccess.bind(this);
    this.showToastFail = this.showToastFail.bind(this);
    this.hideToast = this.hideToast.bind(this);
  }

  handleClick(r, c) {
    this.setState({showNumPad: true, selectedCell: [r, c] }); 
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
    this.setState({squares: board, solved: false});
  }

  renderSquare(r, c) {
    return (
      <SquareComponent
        id={"square-" + r.toString() + "-" + c.toString()}
        key={"square-" + r.toString() + "-" + c.toString()}
        disabled={this.state.solved}
        value={this.state.squares[r][c]}
        onClick={() => this.handleClick(r, c)}
      />
    );
  }

  selectCellValue(value) {
    let squares = this.state.squares.slice();
    const selectedCell = this.state.selectedCell.slice();
    squares[selectedCell[0]][selectedCell[1]] = value;
    this.setState({squares: squares, showNumPad: false});
  }

  hideModal() {
    this.setState({showNumPad: false});
  }

  numPad() {
    return (
      <Modal show={this.state.showNumPad} onHide={this.hideModal} centered>
        <Modal.Body>
          <div className="board-row">
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(1)}>1</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(2)}>2</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(3)}>3</Button>
            </Card>
          </div>
          <div className="board-row">
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(4)}>4</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(5)}>5</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(6)}>6</Button>
            </Card>
          </div>
          <div className="board-row">
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(7)}>7</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(8)}>8</Button>
            </Card>
            <Card>
              <Button variant="outline-success" onClick={() => this.selectCellValue(9)}>9</Button>
            </Card>
          </div>
          <div className="board-row mt-2">
              <Button variant="outline-danger" onClick={() => this.selectCellValue(null)}>Clear</Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  solveAndUpdateBoard() {
    const board = this.state.squares.slice();
    const startTime = performance.now();
    if (solveSudokuSucceed(board)) {
      const endTime = performance.now();
      this.setState({squares: board, solved: true});
      this.showToastSuccess((endTime - startTime).toFixed(3));
    } else {
      this.showToastFail();
    }
  }

  showToastSuccess(time) {
    const body = (
      <div>
        <strong style={{"color": "green"}}>SUCCESS! </strong>
        It took {time} milliseconds to solve your puzzle!
      </div>
    );

    this.setState({showToast: true, toastBody: body});
  }

  showToastFail() {
    const body = (
      <div>
        <strong style={{"color": "red"}}>ERROR: </strong> 
        Invalid sudoku board! Please try again.
      </div>
    );

    this.setState({showToast: true, toastBody: body});
  }

  hideToast() {
    this.setState({"showToast": false});
  }

  render() {
    return (
      <div>
        <Container>
          {this.buildBoard()}
          <this.numPad />
        </Container>
        <div style={{"display": "flex"}}>
          <Toast 
            style={{"position": "absolute", "bottom": "60px", "right": "0"}} 
            className="mr-3"
            onClose={this.hideToast}
            show={this.state.showToast}
            delay={4000}
            autohide
          >
            <Toast.Body>
              {this.state.toastBody}
            </Toast.Body>
          </Toast>
        </div>
        <Row className="button-row mb-4 mt-4">
          <Button variant='danger' className='mr-5' onClick={this.resetBoard}>
            Reset
          </Button>
          <Button variant='success' disabled={this.state.solved} onClick={this.solveAndUpdateBoard}>
            Solve!
          </Button>
        </Row>
      </div>
    );
  }
}