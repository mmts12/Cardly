import React, { Component } from 'react';
import { CardDetails } from './CardDetails';

export class CardPreview extends Component {
  render() {
    return (
      <div>
        <h2>CardPreview</h2>
        <CardDetails />
      </div>
    );
  }
}
