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

  //   cards: (2) [{…}, {…}]
  // id: "g101"
  // style: {}
  // title: "To Do"

  render() {
    const { addNewStack, closeAddSection } = this.props;
    const { stack } = this.state;
    return (
      <section className="add-stack-modal flex column">
       <div className="add-stack-input">
          <input
            onChange={this.handleInput}
            type="text"
            name=""
            id=""
            placeholder="Title ?"
          />
       </div>
          <div className="add-stack-container flex align-center">
            <button className="save-btn" onClick={() => addNewStack(stack)}>Add List</button>
            <button className="clear-btn" onClick={closeAddSection}>  <ClearIcon></ClearIcon></button>
          </div>
      
      </section>
    );
  }
}
