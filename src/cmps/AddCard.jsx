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
    this.setState({ card });
  };

  onAdd = () => {
    if (!this.state.card.title) return;
    this.props.addNewCard(this.state.card);
  };

  render() {
    return (
      <section className="add-card-modal flex column">
        <form onSubmit={this.onAdd}>
          <div className="add-card-input">
            <input
              onBlur={this.onAdd}
              type="text"
              onChange={this.handleInput}
              value={this.state.card.title}
            />
          </div>
          <div className="add-btn-container flex align-center">
            <button className="save-btn" onClick={this.onAdd}>
              Add Card
          </button>
            <button className="clear-btn" onClick={this.props.closeAddSection}>
              <ClearIcon></ClearIcon>
            </button>
          </div>
        </form>
      </section>
    );
  }
}
