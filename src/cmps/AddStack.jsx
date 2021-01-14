import React, { Component } from 'react';

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

  //   cards: (2) [{…}, {…}]
  // id: "g101"
  // style: {}
  // title: "To Do"

  render() {
    const { addNewStack, closeAddSection } = this.props;
    const { stack } = this.state;
    return (
      <>
        <input
          onChange={this.handleInput}
          type="text"
          name=""
          id=""
          placeholder="Title ?"
        />
        <button onClick={() => addNewStack(stack)}>Add</button>
        <button onClick={closeAddSection}>X</button>
      </>
    );
  }
}
