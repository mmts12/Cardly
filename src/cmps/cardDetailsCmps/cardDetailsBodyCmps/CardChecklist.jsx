import React, { Component } from 'react';
import { utilService } from '../../../services/misc/utilService.js';
import { ChecklistPreview } from './ChecklistPreview.jsx';

export class CardChecklist extends Component {
  state = {
    newTodo: '',
    todos: [],
  };

  componentDidMount() {
    let todos = [];
    this.props.checklists.map((todoList) => {
      todos.push(todoList);
    });
    this.setState({ todos });
  }

  toggleAddItem() {
    let { show } = this.state;
    show = !show;
    this.setState({ show });
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
    this.setState((this.state.todos = currChecklist.todos));
    this.props.onAddTodo(currChecklist);
  };

  render() {
    const { checklists } = this.props;
    return (
      <div>
        {checklists.map((checklist) => {
          return (
            <ChecklistPreview
              checklist={checklist}
              onRemoveTodo={this.props.onRemoveTodo}
              handleInput={this.handleInput}
              addTodo={this.addTodo}
              toggleAddItem={this.toggleAddItem}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}
