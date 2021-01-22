import React, { Component } from 'react';
import { TodoPreview } from './TodoPreview';
import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import { eventBus } from './../../../services/eventBusService';
import { LinearProgressWithLabel } from './LinearProgressWithLabel';

export class ChecklistPreview extends Component {
  state = { isAddItemShow: false };

  componentDidMount() {
    this.unsubscribeFromEventBus = eventBus.on('closeAddSection', (data) =>
      this.setState({ isAddItemShow: false })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromEventBus();
  }

  toggleAddItem() {
    let { isAddItemShow } = this.state;
    isAddItemShow = !isAddItemShow;
    this.setState({ isAddItemShow });
  }

  calcTodosForPrograss = () => {
    const { checklist } = this.props;
    const todoCheckedCount = checklist.todos.reduce((acc, todo) => {
      if (todo.isDone) acc++;
      return acc;
    }, 0);

    const precent = (todoCheckedCount / checklist.todos.length) * 100;
    if (!precent) return 0;
    return precent;
  };

  render() {
    const {
      checklist,
      onRemoveTodo,
      handleInput,
      addTodo,
      handleCheckboxTodo,
    } = this.props;
    return (
      <section key={checklist.id} className="checklist flex column">
        <div className="flex space-between column">
          <div className="cl-subtitle ">
            <LibraryAddCheckOutlinedIcon className="checklist-icon" />
            <div className="cl-inner-span flex space-between">
              <h3 className="cl-subtitle-txt flex align-center">
                {checklist.title}
              </h3>
              <button
                className="checklist-del-btn"
                onClick={() => {
                  this.props.onRemove(checklist.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <LinearProgressWithLabel value={this.calcTodosForPrograss()} />
          {checklist.todos.map((todo) => {
            return (
              <TodoPreview
                key={todo.id}
                todo={todo}
                checklist={checklist}
                onRemoveTodo={onRemoveTodo}
                handleCheckboxTodo={handleCheckboxTodo}
              />
            );
          })}
          <div className="flex">
            <button
              className="checklist-add"
              onClick={() => this.toggleAddItem()}
            >
              Add an Item
            </button>
          </div>
        </div>
        {this.state.isAddItemShow && (
          <div>
            <input onChange={handleInput} placeholder="Add an item"></input>
            <button onClick={() => addTodo(checklist)}>Add</button>
          </div>
        )}
      </section>
    );
  }
}
