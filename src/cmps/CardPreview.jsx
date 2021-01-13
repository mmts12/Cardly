import React, { Component } from 'react';
import { CardDetails } from './CardDetails';

export class CardPreview extends Component {
  state = {
    isCardDetailsSelected: false,
  };

  onShowCardDetails = () => {
    this.setState({ isCardDetailsSelected: true });
  };

  render() {
    const { card } = this.props;
    const { isCardDetailsSelected } = this.state;
    return (
      <div>
        <div onClick={this.onShowCardDetails}>{card.title}</div>
        {isCardDetailsSelected && <CardDetails />}
      </div>
    );
  }
}
