import React from 'react';
import { StackPreview } from './StackPreview.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

export function StackList(props) {
  const { stacks } = props.board;
  if (!stacks) return <h1>Loading ...(stacks)</h1>;

  const onDragEnd = (result) => {};

  // onDragEnd={this.onDragEnd}

  return (
    <div>
      <div className="stack-list-container flex ">
        <DragDropContext>
          {props.board.stacks.map((stack) => {
            return (
              <StackPreview
                boardId={props.boardId}
                key={stack.id}
                stack={stack}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
