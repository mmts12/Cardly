import React, { Component } from 'react';
import { CardPreview } from './CardPreview';

export class CardList extends Component {
  render() {
    return (
      <div>
        <h2>CardList</h2>
        <CardPreview />
        <CardPreview />
        <CardPreview />
      </div>
    );
  }
}
