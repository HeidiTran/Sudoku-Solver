import React from 'react';
import { FooterComponent } from './Footer';

export class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <p>THIS IS ABOUT COMPONENT</p>
        <FooterComponent />
      </div>
    );
  }
}