import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class NavMenuComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">SUDOKU SOLVER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

