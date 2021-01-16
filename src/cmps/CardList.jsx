import React, { Component } from 'react';
import { CardPreview } from './CardPreview';

export class CardList extends Component {
  render() {
    const { cards, stack } = this.props;
    return (
      <div>
        {cards.map((card) => {
          return <CardPreview stack={stack} key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
