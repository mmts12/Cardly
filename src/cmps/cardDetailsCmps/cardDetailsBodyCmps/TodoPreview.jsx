import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export function TodoPreview({
  todo,
  onRemoveTodo,
  checklist,
  handleCheckboxTodo,
}) {
  return (
    <div key={todo.id} className="todo-row flex space-between">
      <div>
        <input
          className="todo-input"
          checked={todo.isDone ? 'checked' : ''}
          onChange={() => handleCheckboxTodo(todo.id, checklist)}
          type="checkbox"
        ></input>
        <span className={todo.isDone ? 'todo-done todo-txt' : 'todo-txt'}>
          {todo.txt}
        </span>
      </div>
      <DeleteIcon
        onClick={() => onRemoveTodo(todo.id, checklist)}
        className="todo-delete-icon"
      ></DeleteIcon>
    </div>
  );
}
