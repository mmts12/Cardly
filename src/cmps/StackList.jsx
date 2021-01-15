import React from 'react';
import { StackPreview } from './StackPreview.jsx';

export function StackList(props) {
  const { stacks } = props.board;
  if (!stacks) return <h1>Loading ...</h1>;

  return (
    //map Stack Preview
    <div>
      <div className=" flex ">
        {props.board.stacks.map((stack) => {
          return (
            <StackPreview
              boardId={props.boardId}
              key={stack.id}
              stack={stack}
            />
          );
        })}
      </div>
    </div>
  );
}
