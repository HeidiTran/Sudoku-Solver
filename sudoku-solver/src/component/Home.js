import React from 'react';
import { Container } from 'react-bootstrap';
import { BoardComponent } from '../component/Board';
import { FooterComponent } from './Footer';

export class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <BoardComponent />   
        </Container>
        <FooterComponent />
      </div>
    );
  }
}