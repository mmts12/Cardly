import React, { Component } from 'react';
import SubjectIcon from '@material-ui/icons/Subject';

export class CardDescription extends Component {
  state = {
    card: {},
  };
  componentDidMount() {
    const { card } = this.props;
    const cardCopy = { ...card };
    this.setState({ card: cardCopy });
  }

  handleInput = (ev) => {
    const { card } = this.state;
    card.desc = ev.target.value;
    this.setState({ card });
  };

  saveDesc = () => {
    const { onSaveCard } = this.props;
    const { card } = this.state;
    onSaveCard(card);
  };

  render() {
    const { card } = this.state;
    return (
      <section className="card-desc-container">
        <div className="card-desc-title">
          <SubjectIcon className="desc-icon" />
          <h3 className="card-desc-words">Description</h3>
        </div>
        <div className="card-desc-textarea">
          <textarea
            className="cd-textarea"
            placeholder="Add a more detailed description..."
            value={card.desc}
            rows="4"
            cols="50"
            onChange={this.handleInput}
          ></textarea>
          <button className="save-btn" onClick={this.saveDesc}>
            Save
          </button>
        </div>
      </section>
    );
  }
}
