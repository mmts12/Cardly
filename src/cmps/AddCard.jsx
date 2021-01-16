import React, { Component } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

export class AddCard extends Component {
  state = {
    card: {
      title: '',
    },
  };

  handleInput = (ev) => {
    const { card } = this.state;
    card.title = ev.target.value;
    this.setState({ card }, () => {
      // console.log(this.state);
    });
  };

  onAdd = () => {
    this.props.addNewCard(this.state.card);
    // this.state.card.title = '';
    // this.setState({ card: '' });
  };

  render() {
    return (
      <section>
        <div>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.card.title}
          />
        </div>
        <div>
          <button onClick={this.onAdd}>Add</button>
          <button onClick={this.props.closeAddSection}>
            <ClearIcon></ClearIcon>
          </button>
        </div>
      </section>
    );
  }
}
