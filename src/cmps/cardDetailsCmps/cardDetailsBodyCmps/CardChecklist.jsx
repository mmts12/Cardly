import React, { Component } from 'react';
import { utilService } from '../../../services/misc/utilService.js';
import { ChecklistPreview } from './ChecklistPreview.jsx';
import { eventBus } from './../../../services/eventBusService';

export class CardChecklist extends Component {
  state = {
    newTodo: '',
    todos: [],
    closeAddTodoSection: false,
  };

  componentDidMount() {
    let todos = [];
    this.props.checklists.map((todoList) => {
      todos.push(todoList);
    });
    this.setState({ todos });
  }

  handleInput = (ev) => {
    let { newTodo } = this.state;
    newTodo = ev.target.value;
    this.setState({ newTodo });
  };

  addTodo = (currChecklist) => {
    currChecklist.todos.push({
      id: utilService.makeId(),
      txt: this.state.newTodo,
      isDone: false,
      createdAt: Date.now(),
    });
    this.setState({ todos: currChecklist.todos });
    this.props.updateChecklist(currChecklist);
    eventBus.emit('closeAddSection', false);
  };

  handleCheckboxTodo = (todoId, checklist) => {
    const { ...copyChecklist } = checklist;
    const todoToUpdate = copyChecklist.todos.find((todo) => todo.id === todoId);
    todoToUpdate.isDone = !todoToUpdate.isDone;
    const checklistToUpdate = copyChecklist.todos.map((todo) =>
      todo.id === todoToUpdate.id ? todoToUpdate : todo
    );

    this.props.updateChecklist(checklistToUpdate);
  };

  render() {
    const { checklists } = this.props;
    return (
      <div>
        {checklists.map((checklist) => {
          return (
            <ChecklistPreview
              handleCheckboxTodo={this.handleCheckboxTodo}
              key={checklist.id}
              checklist={checklist}
              onRemoveTodo={this.props.onRemoveTodo}
              handleInput={this.handleInput}
              addTodo={this.addTodo}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}
