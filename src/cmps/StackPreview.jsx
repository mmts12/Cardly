import React, { Component } from 'react';
import { CardList } from './CardList';

export class StackPreview extends Component {
  render() {
    const { stack } = this.props;
    return (
      <div className="stack-preview-card card-list">
        <h3 className="stack-title">{stack.title}</h3>
        <CardList cards={stack.cards} />
      </div>
    );
  }
}
