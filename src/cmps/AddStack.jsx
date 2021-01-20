import React, { Component } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

export class AddStack extends Component {
  state = {
    stack: {
      cards: [],
      style: {},
      title: '',
    },
  };

  handleInput = (ev) => {
    const { stack } = this.state;
    stack.title = ev.target.value;
    this.setState({ stack });
  };

  onAdd = (ev, stack) => {
    ev.preventDefault();
    if (!stack.title) return;
    const { addNewStack } = this.props;
    addNewStack(stack);
  };

  render() {
    const { closeAddSection } = this.props;
    const { stack } = this.state;
    return (
      <section className="add-stack-modal flex column">
        <div className="add-stack-input">
          <form onSubmit={(ev) => this.onAdd(ev, stack)}>
            <input
              onChange={this.handleInput}
              type="text"
              name=""
              id=""
              placeholder="Title ?"
              onBlur={this.props.onCloseAddSection}
            />
          </form>
        </div>
        <div className="add-stack-container flex align-center">
          <button className="save-btn" onClick={(ev) => this.onAdd(ev, stack)}>
            Add List
          </button>
          <button className="clear-btn" onClick={closeAddSection}>
            <ClearIcon></ClearIcon>
          </button>
        </div>
      </section>
    );
  }
}
