import React from 'react';
import { Container } from 'react-bootstrap';
import { BoardComponent } from '../component/Board';

export class HomeComponent extends React.Component {
  render() {
    return (
      <Container>
        <BoardComponent />
      </Container>
    );
  }
}