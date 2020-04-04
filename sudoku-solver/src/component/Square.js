import React from 'react';
import { Button } from 'react-bootstrap';

export class SquareComponent extends React.Component {
  render() {
    return (
      <Button 
        variant='outline-secondary' 
        onClick={this.props.onClick}
        className="square"
      >
        {this.props.value}
      </Button>
    );
  }
}