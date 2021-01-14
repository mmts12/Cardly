import React, { Component } from 'react';
import { CardPreview } from './CardPreview';

export class CardList extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map((card) => {
          return <CardPreview key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
