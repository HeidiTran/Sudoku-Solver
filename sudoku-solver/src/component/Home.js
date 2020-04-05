import React from 'react';
import { Container } from 'react-bootstrap';
import { BoardComponent } from '../component/Board';
import { FooterComponent } from './Footer';

export class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-5">Let the power of AI solve your problems!</h1>
        <Container>
          <BoardComponent />   
        </Container>
        <FooterComponent />
      </div>
    );
  }
}