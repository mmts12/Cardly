import React from 'react';
import { StackPreview } from './StackPreview';
import { Link } from 'react-router-dom';
export function StackList(props) {
  return (
    //map Stack Preview
    <div>
      <h2>StackList</h2>
      {console.log(props.board)}
    </div>
  );
}
