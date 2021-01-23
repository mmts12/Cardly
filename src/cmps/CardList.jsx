import React, { Component } from 'react';
import { CardPreview } from './CardPreview';

import { Droppable } from 'react-beautiful-dnd';

export class CardList extends Component {
  render() {
    const { cards, allowStackDrag, disableStackDrag, stack } = this.props;
    return (
      <Droppable droppableId={stack.id} type="card">
        {(provided) => (
          <div
            className="stack-drop"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => {
              return (
                <CardPreview
                  allowStackDrag={allowStackDrag}
                  disableStackDrag={disableStackDrag}
                  index={index}
                  stack={stack}
                  key={card.id}
                  card={card}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}
