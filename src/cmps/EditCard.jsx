import React, { Component } from 'react';

export class EditCard extends Component {
  state = {
    card: {
      title: '',
    },
  };

  componentDidMount() {
    const { card } = this.props;
    this.setState({ card });
  }

  handleInput = (ev) => {
    const { card } = this.state;
    card.title = ev.target.value;
    this.setState({ card });
  };

  onSave = () => {
    const { card } = this.state;
    const { saveEditedCard } = this.props;
    saveEditedCard(card);
  };

  render() {
    const { title } = this.state.card;
    return (
      <div>
        <input type="text" onChange={this.handleInput} value={title} />
        <button onClick={this.onSave}>Save</button>
      </div>
    );
  }
}
