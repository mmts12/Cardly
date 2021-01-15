import React, { Component } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

export class AddCard extends Component {
  state = {
    card: {
      title: '',
    },
  };

  handleInput = () => {};

  render() {
    return (
      <section>
        <div>
          <input type="text" name="" id="" />
        </div>
        <div>
          <button>Add</button>
          <button onClick={this.props.closeAddSection}>
            <ClearIcon></ClearIcon>
          </button>
        </div>
      </section>
    );
  }
}
