import React, { Component } from 'react';

export class EditCard extends Component {
  state = {
    card: {
      title: '',
    },
  };

  componentDidMount() {
    const { card } = this.props;
    const cardCopy = { ...card };
    this.setState({ card: cardCopy });
  }

  handleInput = (ev) => {
    const { card } = this.state;
    card.title = ev.target.value;
    this.setState({ card });
  };

  onSave = (ev) => {
    ev.stopPropagation();
    const { card } = this.state;
    const { saveEditedCard } = this.props;
    saveEditedCard(card);
  };

  render() {
    const { title } = this.state.card;
    return (
      <div className="card-preview-edit-card">
        <form action="" onSubmit={(ev) => this.onSave(ev)}>
          <input
            onBlur={this.onSave}
            type="text"
            onChange={this.handleInput}
            value={title}
          />
          <button type="submit" onClick={this.onSave}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
