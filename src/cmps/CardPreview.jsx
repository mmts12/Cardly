import React, { Component } from 'react';
import { CardDetails } from './CardDetails';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
        <div className="card-preview-line flex space-between">
          <div onClick={this.onShowCardDetails}>
            {card.title}
          </div>
          <div className="card-preview-icons flex">
          <EditIcon className="card-preview-edit-icon"></EditIcon>
          <DeleteIcon className="card-preview-edit-icon"></DeleteIcon>
          </div>
        </div>
        {isCardDetailsSelected && (
          <CardDetails card={card} onCloseModal={this.closeModal} />
        )}
      </div>
    );
  }
}
