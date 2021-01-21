import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export function TodoPreview({ todo, onRemoveTodo, checklist }) {
  return (
    <div key={todo.id} className="todo-row flex space-between">
      <div>
        <input className="todo-input" type="checkbox"></input>
        <span className="todo-txt">{todo.txt}</span>
      </div>
      <DeleteIcon
        onClick={() => onRemoveTodo(todo.id, checklist)}
        className="todo-delete-icon"
      ></DeleteIcon>
    </div>
  );
}
