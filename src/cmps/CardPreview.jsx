import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import EditIcon from '@material-ui/icons/Edit';

export class CardPreview extends Component {
  state = {
    isCardDetailsSelected: false,
  };

  onShowCardDetails = () => {
    this.setState({ isCardDetailsSelected: true });
  };

  closeModal = (ev) => {
    ev.stopPropagation();
    this.setState({ isCardDetailsSelected: false });
  };

  render() {
    const { card } = this.props;
    const { isCardDetailsSelected } = this.state;
    return (
      <div className="card-preview">
        <div onClick={this.onShowCardDetails}>
          {card.title}
          <EditIcon className="card-preview-edit-icon"></EditIcon>
        </div>
        {isCardDetailsSelected && (
          <CardDetails onCloseModal={this.closeModal} />
        )}
      </div>
    );
  }
}
