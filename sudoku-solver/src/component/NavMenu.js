import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class NavMenuComponent extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/Sudoku-Solver">
          <img 
            src="https://cdn2.iconfinder.com/data/icons/sports-and-games-doodles-vol-02/32/sudoku-puzzle-game-math-riddle-512.png" 
            alt="sudoku icon" 
            height="30px" 
            className="mr-3" 
          />
          <strong>SUDOKU SOLVER</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {/* <Nav.Link href="/Sudoku-Solver">Home</Nav.Link> */}
          {/* <Nav.Link href="/about">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

