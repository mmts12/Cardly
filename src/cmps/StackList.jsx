import React from 'react';
import { StackPreview } from './StackPreview.jsx';

export function StackList(props) {
  const { stacks } = props.board;
  console.log(stacks);
  if (!stacks) return <h1>Loading ...</h1>;
  return (
    //map Stack Preview
    <div>
      <h2>StackList</h2>
      <div className=" flex ">
        {props.board.stacks.map((stack) => {
          return <StackPreview key={stack.id} stack={stack} />;
        })}
      </div>
    </div>
  );
}
