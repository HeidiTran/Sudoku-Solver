import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export class FooterComponent extends React.Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            Made with &hearts; by Heidi Tran and Sammy Tran
          </Navbar.Text>
          <Nav.Link href="https://github.com/HeidiTran/Sudoku-Solver" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} size='lg' color="grey"/>
          </Nav.Link>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

